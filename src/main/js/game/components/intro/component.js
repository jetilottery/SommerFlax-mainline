define(function(require) {
    const gameFlow = require("skbJet/componentManchester/standardIW/gameFlow");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const meterData = require("skbJet/componentManchester/standardIW/meterData");
    const resources = require("skbJet/component/resourceLoader/resourceLib");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const autoPlay = require("skbJet/componentManchester/standardIW/autoPlay");
    const SKBeInstant = require("skbJet/component/SKBeInstant/SKBeInstant");
    const nokFormat = require("skbJet/componentLondon/utils/nokFormat");
    const Wave = require("./Wave");
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const introLayout = require('game/components/intro/layout');
    const mainLayout = require('game/template/layout');

    require("com/gsap/TweenLite");
    require("com/gsap/TimelineLite");

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;

    return function introComponent(parts) {
        // initial setup;
        parts.intro.visible = true;
        parts.flaxLogo.visible = true;
        parts.logoSmall.visible =  true;
        parts.logoSmall.alpha = 0;
        parts.ticketPrice.text = nokFormat(meterData.ticketCost);
        parts.balanceMeter.text = ""; //start with no text until the balance is updated

        let showBuy = SKBeInstant.config.wagerType === "BUY" && SKBeInstant.config.gameType === "normal";
        let showTry = SKBeInstant.config.wagerType === "TRY" && SKBeInstant.config.gameType === "normal";

        msgBus.publish("UI.updateButtons", {
            audioOn: {visible: true, enabled: true},
            audioOff: {visible: true, enabled: true},
            left: {visible: false},
            right: {visible: false, enabled: true},
            info: {visible: true, enabled: true},
            back: {visible: false},
            scratchAll: {visible: false},
            gamePips: {visible: false},
            buy: {visible: showBuy, enabled: showBuy},
            try: {visible: showTry, enabled: showTry}
        });

        let wave = Wave.fromContainer(parts.ocean);
        window.wave = wave;
        /*
        / msgBus listeners
       */
        window.parts = parts;
        let introTimeLine = new Timeline({paused: true, onComplete: endIntro})
            .to(parts.logoLarge, 0.8, {x: !isMobileOrTablet ? 704 : 550, y: !isMobileOrTablet ? 144 : 234}, 0.5)
            .to(parts.logoLarge.scale, 0.8, {x: 0.5, y: 0.5}, 0.5)
            .to(parts.logoSmall, 0.2, {alpha: 1, visible: 1}, 1.3)
            .to(parts.logoLarge, 0.2, {alpha: 0, visible: 0}, 1.5)
            .to(parts.introText, 1, {rotation: 0, y: !isMobileOrTablet ? 300 : 400}, 1)
            .to(parts.reflection, !isMobileOrTablet ? 0.3 : 0.5, {alpha: 0, visible: 0}, !isMobileOrTablet ? 0.2 : 1)
            .to(wave, !isMobileOrTablet ? 0.5 : 1, {progress: 1}, !isMobileOrTablet ? 0.5 : 1.5)
            .to(wave.mesh, !isMobileOrTablet ? 0.5 : 1, {alpha: 0, y: 75, visible: 0}, !isMobileOrTablet ? 1 : 1.5)
            .to(parts.introText, 0.5, {alpha: 0, visible: 0}, 2.5);

        function play() {
            introTimeLine.play(0);
        }

        function endIntro() {
            //Show buttons after intro
            msgBus.publish("UI.updateButtons", {
                audioOn: {visible: true, enabled: true},
                audioOff: {visible: true, enabled: true},
                left: {visible: true, enabled: false},
                right: {visible: true, enabled: true},
                info: {visible: true, enabled: true},
                back: {visible: false, enabled: true},
                scratchAll: {visible: true, enabled: true},
                gamePips: {visible: true, enabled: true},
                buy: {visible: false},
                try: {visible: false},
                playAgain: {visible: false}
            });
            if(!isMobileOrTablet) {
                msgBus.publish("Game.Change", {gameIndex: 99, transition: "fadeToMenu"});
            } else {
                msgBus.publish("Game.Change", {gameIndex: 0, transition: "fadeToGame"});
            }

            gameFlow.next("START_REVEAL");
        }

        function restart() {
            msgBus.publish("Game.Change", {gameIndex: 99});

            layoutEngine.update(introLayout._BASE_INTRO, [mainLayout, introLayout], isMobileOrTablet ? "portrait" : "landscape");
            wave.progress = 0;
            wave.mesh.alpha = 1;
            wave.mesh.y = 0;

            autoPlay._suspended = false; //something suspends this, fixlater
            
            parts.intro.alpha = 0;
            gameFlow.next("GAME_RESET");

            Tween.to(parts.intro, 3, {
                alpha: 1
            });
        }

        // Attach start call to startNetworkActivity message
        
        msgBus.subscribe("Game.Intro", play);
        msgBus.subscribe("Game.Finish", restart);
        msgBus.subscribe("MeterData.Balance", (data) => {
           parts.balanceMeter.text = resources.i18n.game.Game.balanceMeter + SKBeInstant.formatCurrency(data).formattedAmount;
        });

        return parts.intro;
    };
});

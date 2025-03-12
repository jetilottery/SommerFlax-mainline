define(function(require) {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const nokFormat = require("skbJet/componentLondon/utils/nokFormat");
    const SKBeInstant = require("skbJet/component/SKBeInstant/SKBeInstant");

    require('com/gsap/TweenLite');
    require('com/gsap/TimelineLite');

    let Tween = window.TweenLite;

    return function resultPlaques(parts) {
        // initial setup;
        parts.resultPlaques.visible = false;
        parts.winPlaque.visible = false;
        parts.losePlaque.visible = false;

        function showPlaque() {
            parts.resultPlaques.interactive = true;
            parts.resultPlaques.interactiveChildren = true;
            msgBus.publish("UI.updateButtons", {
                audioOn: {enabled: false},
                audioOff: {enabled: false},
                info: {enabled: false},
                left: {enabled: false},
                right: {enabled: false},
                back: {enabled: false},
                hint: {enabled: false},
                scratchAll: {enabled: false},
                playAgain: {enabled: false}
            });
            if(!isMobileOrTablet) {
                msgBus.publish("Game.Change", {gameIndex: 99, transition: "fadeToMenu"});
            }

            let winAmount = nokFormat(meterData.totalWin);

            if(meterData.totalWin === 0) {
                parts.losePlaque.visible = true;
                parts.winPlaque.visible = false;
                parts.resultPlaques.visible = true;

                Tween.fromTo(parts.resultPlaques, 0.5, {alpha: 0}, {alpha: 1, visible: 1});
            } else {
                parts.losePlaque.visible = false;
                parts.winPlaque.visible = true;
                parts.resultPlaques.visible = true;

                parts.prizeRP.text = winAmount;

                Tween.killTweensOf(parts.burst2);
                Tween.killTweensOf(parts.burst3);

                Tween.fromTo(parts.resultPlaques, 0.5, {alpha: 0}, {alpha: 1, visible: 1});
                Tween.fromTo(parts.burst2, 10, {rotation: 0}, {rotation: Math.PI * 2, onComplete: function(t) {
                    t.restart();
                }, onCompleteParams: ["{self}"]});
                Tween.fromTo(parts.burst3, 7, {rotation: 0}, {rotation: Math.PI * 2, onComplete: function(t) {
                    t.restart();
                }, onCompleteParams: ["{self}"]});
            }
        }

        parts.viewResultButton.on("press", function onPress() {
            if(!isMobileOrTablet) {
                msgBus.publish("UI.updateButtons", {
                    audioOn: {visible: true, enabled: true},
                    audioOff: {visible: true, enabled: true},
                    info: {visible: true, enabled: true},
                    left: {visible: false, enabled: false},
                    right: {visible: false, enabled: false},
                    hint: {visible: false, enabled: false},
                    back: {visible: false, enabled: false},
                    scratchAll: {visible: false, enabled: false},
                    gamePips: {visible: false},
                    buy: {visible: false, enabled: false},
                    try: {visible: false, enabled: false},
                    playAgain: {visible: true, enabled: true}
                });
            } else {
                msgBus.publish("UI.updateButtons", {
                    audioOn: {visible: true, enabled: true},
                    audioOff: {visible: true, enabled: true},
                    info: {visible: true, enabled: true},
                    left: {visible: true, enabled: true},
                    right: {visible: true, enabled: true},
                    hint: {visible: false, enabled: false},
                    back: {visible: false, enabled: false},
                    scratchAll: {visible: false, enabled: false},
                    gamePips: {visible: true},
                    buy: {visible: false, enabled: false},
                    try: {visible: false, enabled: false},
                    playAgain: {visible: true, enabled: true}
                });
            }

            parts.resultPlaques.interactive = false;
            parts.resultPlaques.interactiveChildren = false;
            Tween.fromTo(parts.resultPlaques, 0.5, {alpha: 1}, {alpha: 0, visible: 0});
        });

        parts.okButton.on("press", function onPress() {
            parts.resultPlaques.interactive = false;
            parts.resultPlaques.interactiveChildren = false;
            msgBus.publish("UI.updateButtons", {
                audioOn: {visible: true, enabled: true},
                audioOff: {visible: true, enabled: true},
                info: {visible: true, enabled: true},
                left: {visible: false, enabled: false},
                right: {visible: false, enabled: false},
                back: {visible: false, enabled: false},
                hint: {visible: false, enabled: false},
                scratchAll: {visible: false, enabled: false},
                playAgain: {visible: false, enabled: false},
                buy: {visible: SKBeInstant.config.wagerType === "BUY", enabled: SKBeInstant.config.wagerType === "BUY"},
                try: {visible: SKBeInstant.config.wagerType === "TRY", enabled: SKBeInstant.config.wagerType === "TRY"}
            });

            Tween.fromTo(parts.resultPlaques, 0.5, {alpha: 1}, {alpha: 0, visible: 0, onComplete: function (){
                msgBus.publish("Game.Finish");
            }});
        });

        msgBus.subscribe("Game.ShowResult", showPlaque);

        return parts.resultPlaques;
    };
});

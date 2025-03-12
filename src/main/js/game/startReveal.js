define(function(require) {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const gameFlow = require("skbJet/componentManchester/standardIW/gameFlow");
    const meterData = require("skbJet/componentManchester/standardIW/meterData");

    const luckyTilesG1 = require("game/components/game1/luckyTilesG1");
    const playerTilesG1 = require("game/components/game1/playerTilesG1");
    const luckyTilesG2 = require("game/components/game2/luckyTilesG2");
    const playerTilesG2 = require("game/components/game2/playerTilesG2");
    const playerTilesG3 = require("game/components/game3/playerTilesG3");
    const playerTilesG4 = require("game/components/game4/playerTilesG4");
    const revealAll = require("game/revealAll");

    let revealedWordCount;

    async function startReveal() {
        // Listen for autoplay activation which triggers the remaining cards to reveal automatically
        msgBus.subscribe("Game.AutoPlayStart", revealAll.start);

        // Listen for autoplay deactivation which cancels the revealAll timeline
        msgBus.subscribe("Game.AutoPlayStop", revealAll.stop);

        msgBus.subscribe("Game.WordsRevealed", revealedWords => revealedWordCount = revealedWords);

        // Enable all of the tiles, wait until they are all revealed
        await Promise.all([
            ...luckyTilesG1.enable(),
            ...playerTilesG1.enable(),
            ...luckyTilesG2.enable(),
            ...playerTilesG2.enable(),
            ...playerTilesG3.enable(),
            ...playerTilesG4.enable()
        ]);

        //Prize values
        let prizeLookup = {
            3: 10000,
            4: 20000,
            5: 50000,
            6: 100000,
            7: 1000000,
            8: 5000000,
            9: 10000000,
            10: 50000000
        };
        if(prizeLookup[revealedWordCount]) {
            meterData.win += prizeLookup[revealedWordCount];
        }


        msgBus.publish("UI.updateButtons", {
            audioOn: {visible: true, enabled: true},
            audioOff: {visible: true, enabled: true},
            info: {visible: true, enabled: true},
            left: {enabled: false},
            right: {enabled: false},
            hint: {enabled: false},
            back: {enabled: false},
            scratchAll: {enabled: false},
            gamePips: {visible: true, enabled: true}
        });

        // continue to the next state
        gameFlow.next("REVEAL_COMPLETE");
    }

    gameFlow.handle(startReveal, "START_REVEAL");
});

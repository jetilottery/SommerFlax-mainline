define(function(require) {
    const gameFlow = require("skbJet/componentManchester/standardIW/gameFlow");
    const revealState = require("game/state/revealState");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const SKBeInstant = require("skbJet/component/SKBeInstant/SKBeInstant");

    const luckyTilesG1 = require("game/components/game1/luckyTilesG1");
    const playerTilesG1 = require("game/components/game1/playerTilesG1");
    const luckyTilesG2 = require("game/components/game2/luckyTilesG2");
    const playerTilesG2 = require("game/components/game2/playerTilesG2");
    const playerTilesG3 = require("game/components/game3/playerTilesG3");
    const playerTilesG4 = require("game/components/game4/playerTilesG4");
    const audio = require("skbJet/componentManchester/standardIW/audio");

    function gameReset() {
        revealState.reset();
        luckyTilesG1.reset();
        playerTilesG1.reset();
        luckyTilesG2.reset();
        playerTilesG2.reset();
        playerTilesG3.reset();
        playerTilesG4.reset();

        // Restart background music
        audio.fadeIn("music", 2, true);

        msgBus.publish("UI.updateButtons", {
            audioOn: {visible: true, enabled: true},
            audioOff: {visible: true, enabled: true},
            info: {visible: true, enabled: true},
            left: {visible: false, enabled: false},
            right: {visible: false, enabled: false},
            hint: {visible: false, enabled: false},
            back: {visible: false, enabled: false},
            scratchAll: {visible: false},
            gamePips: {visible: false},
            buy: {visible: SKBeInstant.config.wagerType === "BUY", enabled: SKBeInstant.config.wagerType === "BUY"},
            try: {visible: SKBeInstant.config.wagerType === "TRY", enabled: SKBeInstant.config.wagerType === "TRY"},
            playAgain: {visible: false}
        });

        gameFlow.next("BUY_SCREEN");
    }

    gameFlow.handle(gameReset, "GAME_RESET");
});

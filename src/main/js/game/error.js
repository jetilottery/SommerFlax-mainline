define(function(require) {
    const gameFlow = require("skbJet/componentManchester/standardIW/gameFlow");
    const revealAll = require("game/revealAll");
    const revealState = require("game/state/revealState");

    function error() {
        // stop reveal all if active
        revealAll.stop();
        console.log("----ERROR----");
        console.log(revealState);
    }

    gameFlow.handle(error, "ERROR");
});

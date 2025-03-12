define(function(require) {
    const layoutEngine = require("skbJet/componentManchester/standardIW/layout/engine");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const game1Layout = require("game/components/game1/layout");
    const game1Component = require("game/components/game1/component");
    const mainLayout = require("game/template/layout");
    const luckyTiles = require("./luckyTilesG1");
    const playerTiles = require("./playerTilesG1");

    return function game1Template() {
        let displayList = layoutEngine.createFromTree(
            game1Layout._BASE_GAME,
            null,
            [window.mainLayout, mainLayout, game1Layout],
            isMobileOrTablet ? "portrait" : "landscape"
        );
        
        luckyTiles.init();
        playerTiles.init();

        return game1Component({
            game1:              displayList.game1,
            bgG1:               displayList.bgG1,
            luckyTilesG1:       displayList.luckyTilesG1,
            playerTilesG1:      displayList.playerTilesG1,
            gameLabelG1:        displayList.gameLabelG1,
            gameLabelG1Large:   displayList.gameLabelG2Large,
            luckyLabelG1:       displayList.luckyLabelG1,
            playerLabelG1:      displayList.playerLabelG1,
            tagLine0G1:         displayList.tagLine0G1,
            tagLine1G1:         displayList.tagLine1G1
        });
    };
});

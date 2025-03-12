define(function(require) {
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const game2Layout = require('game/components/game2/layout');
    const game2Component = require('game/components/game2/component');
    const mainLayout = require('game/template/layout');
    const luckyTiles = require("./luckyTilesG2");

    return function game2Template() {
        let displayList = layoutEngine.createFromTree(
            game2Layout._BASE_GAME,
            null,
            [window.mainLayout, mainLayout, game2Layout],
            isMobileOrTablet ? "portrait" : "landscape"
        );

        luckyTiles.init();
        
        return game2Component({
            game2:              displayList.game2,
            bgG2:               displayList.bgG2,
            gameLabelG2:        displayList.gameLabelG2,
            gameLabelG2Large:   displayList.gameLabelG2Large,
            taglineG2:          displayList.taglineG2,
            playerLabelG2:      displayList.playerLabelG2,
            legendG2:           displayList.legendG2,
            luckyLabelG2:       displayList.luckyLabelG2,
            luckyTilesG2:       displayList.luckyTilesG2,
            playerTilesG2:      displayList.playerTilesG2
        });
    };
});

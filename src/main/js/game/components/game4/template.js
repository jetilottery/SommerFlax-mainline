define(function(require) {
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const game4Layout = require('game/components/game4/layout');
    const game4Component = require('game/components/game4/component');
    const mainLayout = require('game/template/layout');
    const playerTiles = require("./playerTilesG4");

    return function game4Template() {
        let displayList = layoutEngine.createFromTree(
            game4Layout._BASE_GAME,
            null,
            [window.mainLayout, mainLayout, game4Layout],
            isMobileOrTablet ? "portrait" : "landscape"
        );

        playerTiles.init();
        
        return game4Component({
            game4:              displayList.game4,
            bgG4:               displayList.bgG4,
            playerTilesG4:      displayList.playerTilesG4,
            gameLabelG4:        displayList.gameLabelG4,
            gameLabelG4Large:   displayList.gameLabelG4Large,
            legendG4:           displayList.legendG4
        });
    };
});

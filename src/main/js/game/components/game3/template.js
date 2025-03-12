define(function(require) {
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const game3Layout = require('game/components/game3/layout');
    const game3Component = require('game/components/game3/component');
    const mainLayout = require('game/template/layout');
    const playerTiles = require("./playerTilesG3");

    return function game3Template() {
        let displayList = layoutEngine.createFromTree(
            game3Layout._BASE_GAME,
            null,
            [window.mainLayout, mainLayout, game3Layout],
            isMobileOrTablet ? "portrait" : "landscape"
        );

        playerTiles.init();
        
        return game3Component({
            game3:          displayList.game3,
            bgG3:           displayList.bgG3,
            luckyTilesG3:   displayList.luckyTilesG3,
            gameLabel0G3:   displayList.gameLabel0G3,
            tagLineG3:      displayList.tagLineG3
        });
    };
});

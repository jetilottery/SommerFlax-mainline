define(function(require) {
    let layoutEngine = require("skbJet/componentManchester/standardIW/layout/engine");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    let resultPlaquesLayout = require("game/components/resultPlaques/layout");
    let resultPlaquesComponent = require("game/components/resultPlaques/component");
    let mainLayout = require("game/template/layout");

    return function resultPlaquesTemplate() {
        let displayList = layoutEngine.createFromTree(
            resultPlaquesLayout._BASE_RESULTPLAQUES,
            null,
            [window.mainLayout, mainLayout, resultPlaquesLayout],
            isMobileOrTablet ? "portrait" : "landscape"
        );
        
        return resultPlaquesComponent({
            resultPlaques: displayList.resultPlaques,
            winPlaque: displayList.winPlaque,
            losePlaque: displayList.losePlaque,
            viewResultButton: displayList.viewResultButton,
            okButton: displayList.okButton,
            burst2: displayList.burst2,
            burst3: displayList.burst3,
            winPopUp: displayList.winPopUp,
            congratulationsRP: displayList.congratulationsRP,
            youWinRP: displayList.youWinRP,
            prizeRP: displayList.prizeRP,
            sorryRP: displayList.sorryRP,
            nextTimeRP: displayList.nextTimeRP
        });
    };
});

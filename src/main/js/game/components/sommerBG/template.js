define(function(require) {
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const bgLayout = require('game/components/sommerBG/layout');
    const bgComponent = require('game/components/sommerBG/component');
    const mainLayout = require('game/template/layout');
    
    return function bgTemplate() {
        let displayList = layoutEngine.createFromTree(
            bgLayout._BASE_BG,
            null,
            [window.mainLayout, mainLayout, bgLayout],
            isMobileOrTablet ? "portrait" : "landscape"
        );
        
        return bgComponent({
            sommerBG: displayList.sommerBG,
            sea1: displayList.sea1,
            sea2: displayList.sea2
        });
    };
});

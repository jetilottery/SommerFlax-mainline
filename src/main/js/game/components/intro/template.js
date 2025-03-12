define(function(require) {
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const introLayout = require('game/components/intro/layout');
    const introComponent = require('game/components/intro/component');
    const mainLayout = require('game/template/layout');

    return function introTemplate() {
        let displayList = layoutEngine.createFromTree(
            introLayout._BASE_INTRO,
            null,
            [window.mainLayout, mainLayout, introLayout],
            isMobileOrTablet ? "portrait" : "landscape"
        );
        
        return introComponent({
            intro: displayList.intro,
            balanceMeter: displayList.balanceMeter,
            ticketPrice: displayList.ticketPrice,
            ocean: displayList.ocean,
            reflection: displayList.reflection,
            logoLarge: displayList.logoLarge,
            flaxLogo: displayList.flaxLogo,
            logoSmall: displayList.logoSmall,
            introText: displayList.introText
        });
    };
});

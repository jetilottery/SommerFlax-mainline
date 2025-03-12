define(function (require){
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");

    if(isMobileOrTablet){
        return {
            landscape: {
                width: 640,
                height: 1136
            },
            portrait: {
                width: 640,
                height: 1136
            }
        };
    } else {
        return {
            landscape: {
                width: 800,
                height: 600
            },
            portrait: {
                width: 800,
                height: 600
            }
        };
    }
});

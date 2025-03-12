define(function(require) {
    const layoutEngine = require("skbJet/componentManchester/standardIW/layout/engine");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const infoLayout = require("game/components/infoPage/layout");
    const infoComponent = require("game/components/infoPage/component");
    const mainLayout = require("game/template/layout");

    return function infoTemplate() {
        let displayList = layoutEngine.createFromTree(
            infoLayout._BASE_INFO,
            null,
            [window.mainLayout, mainLayout, infoLayout],
            isMobileOrTablet ? "portrait" : "landscape"
        );

        return infoComponent({
            infoBase:               displayList.infoBase,
            titleBar:               displayList.titleBar,
            bgInfo:                 displayList.bgInfo,
            titleBarTitle:          displayList.titleBarTitle,
            scrollBar:              displayList.scrollBar,
            scrollPosition:         displayList.scrollPosition,
            infoCloseButton:        displayList.infoCloseButton,
            helpTitle:              displayList.helpTitle,
            help:                   displayList.help,
            payTableTitle:          displayList.payTableTitle,
            payTable:               displayList.payTable,
            oddsLabel0:             displayList.oddsLabel0,
            oddsLabel1:             displayList.oddsLabel1,
            oddsLabel2:             displayList.oddsLabel2,
            helpTitleIcon:          displayList.helpTitleIcon,
            helpTitleText:          displayList.helpTitleText,
            helpTitle0:             displayList.helpTitle0,
            help0:                  displayList.help0,
            helpTitle1:             displayList.helpTitle1,
            help1:                  displayList.help1,
            payTableTitleIcon:      displayList.payTableTitleIcon,
            payTableTitleText:      displayList.payTableTitleText,
            payTableBar0:           displayList.payTableBar0,
            payTableBar1:           displayList.payTableBar1,
            payTableBar2:           displayList.payTableBar2,
            payTableBar3:           displayList.payTableBar3,
            payTableBar4:           displayList.payTableBar4,
            payTableVerticalBar:    displayList.payTableVerticalBar,
            payTableTitle0:         displayList.payTableTitle0,
            payTableTitle1:         displayList.payTableTitle1,
            payTableP0:             displayList.payTableP0,
            payTableP1:             displayList.payTableP1,
            payTableP2:             displayList.payTableP2,
            payTableP3:             displayList.payTableP3,
            payTableP4:             displayList.payTableP4,
            payTableP5:             displayList.payTableP5,
            payTableP6:             displayList.payTableP6,
            payTableP7:             displayList.payTableP7,
            payTableP8:             displayList.payTableP8,
            payTableP9:             displayList.payTableP9,
            payTableV0:             displayList.payTableV0,
            payTableV1:             displayList.payTableV1,
            payTableV2:             displayList.payTableV2,
            payTableV3:             displayList.payTableV3,
            payTableV4:             displayList.payTableV4,
            payTableV5:             displayList.payTableV5,
            payTableV6:             displayList.payTableV6,
            payTableV7:             displayList.payTableV7,
            payTableV8:             displayList.payTableV8,
            payTableV9:             displayList.payTableV9
        });
    };
});

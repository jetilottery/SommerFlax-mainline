define({
    _BASE_INFO: {
        children: ["infoBase"]
    },
    infoBase: {
        type: "container",
        children: ["bgInfo", "scrollBar", "titleBar"]
    },
    /*
     * Background
     */
    titleBar: {
        type: "rectangle",
        children: ["titleBarTitle", "infoCloseButton"],
        fillAlpha: 1,
        fill: 0x33A1FF,
        landscape: { width: 800 },
        portrait: { width: 640 },
        height: 50
    },
        titleBarTitle: {
            type: "text",
            style: "infoTitle",
            anchor: 0.5,
            landscape: { x: 400 },
            portrait: { x: 320 },
            y: 25,
            string: "infoTitle"
        },
        infoCloseButton: {
            type: "button",
            landscape:      { x: 775 },
            portrait:       { x: 615 },
            y: 25,
            textures: {
                enabled:    "infoClose",
                over:       "infoClose",
                pressed:    "infoClose",
                disabled:   "infoClose"
            }
        },
    scrollBar: {
        type: "rectangle",
        children: ["scrollPosition"],
        fillAlpha: 0.3,
        fill: 0x33A1FF,
        landscape: {
            x: 785,
            width: 15,
            height: 550
        },
        portrait: {
            x: 625,
            width: 15,
            height: 1086
        },
        y: 50
    },
        scrollPosition: {
            type: "rectangle",
            fillAlpha: 0.3,
            fill: 0x33A1FF,
            x: 0,
            y: 0,
            width: 15,
            height: 40
        },
    bgInfo: {
        type: "rectangle",
        children: ["helpTitle", "help", "payTableTitle", "payTable", "oddsLabel0", "oddsLabel1", "oddsLabel2"],
        fillAlpha: 1,
        fill: 0xFF9408,
        landscape: {
            width: 800,
            height: 1740
        },
        portrait: {
            width: 640,
            height: 1740
        },
        x: 0,
        y: 0
    },
        helpTitle: {
            type: "container",
            children: ["helpTitleIcon", "helpTitleText"],
            landscape:  { x: 280 },
            portrait:    { x: 205 },
            y: 75
        },
            helpTitleIcon: {
                type: "sprite",
                x: 0,
                y: 0,
                texture: "menu"
            },
            helpTitleText: {
                type: "text",
                style: "infoSubTitle",
                x: 55,
                y: 4,
                string: "helpTitle0"
            },
        help: {
            type: "rectangle",
            children: ["helpTitle0", "help0", "helpTitle1", "help1"],
            fillAlpha: 1,
            fill: 0x00BAC9,
            lineWidth: 4,
            lineColor: 0xFFFFFF,
            radius: 6,
            landscape: {
                width: 764,
                height: 800
            },
            portrait: {
                width: 604,
                height: 820
            },
            x: 18,
            y: 143
        },
            helpTitle0: {
                type: "text",
                style: "helpHeader",
                x: 18,
                y: 24,
                string: "helpTitle0"
            },
            help0: {
                type: "text",
                style: "helpText",
                x: 18,
                y: 68,
                string: "help0",
                wordWrap: true,
                landscape: {
                    wordWrapWidth: 728
                },
                portrait: {
                    wordWrapWidth: 568
                }
            },
            helpTitle1: {
                type: "text",
                style: "helpHeader",
                x: 18,
                landscape: { y: 546 },
                portrait: { y: 590 },
                string: "helpTitle1"
            },
            help1: {
                type: "text",
                style: "helpText",
                x: 18,
                wordWrap: true,
                landscape: {
                    y: 590,
                    wordWrapWidth: 728,
                    string: "help1_landscape"
                },
                portrait: {
                    y: 630,
                    wordWrapWidth: 568,
                    string: "help1_portrait"
                }
            },
        payTableTitle: {
            type: "container",
            children: ["payTableTitleIcon", "payTableTitleText"],
            landscape:  { x: 270, y: 980 },
            portrait:    { x: 195, y: 990 }
        },
            payTableTitleIcon: {
                type: "sprite",
                x: 0,
                y: 0,
                texture: "cup"
            },
            payTableTitleText: {
                type: "text",
                style: "infoSubTitle",
                x: 55,
                y: 4,
                string: "payTableTitle"
            },
        payTable: {
            type: "rectangle",
            children: [
                "payTableBar0",
                "payTableBar1",
                "payTableBar2",
                "payTableBar3",
                "payTableBar4",
                "payTableVerticalBar",
                "payTableTitle0",
                "payTableTitle1",
                "payTableP0",
                "payTableP1",
                "payTableP2",
                "payTableP3",
                "payTableP4",
                "payTableP5",
                "payTableP6",
                "payTableP7",
                "payTableP8",
                "payTableP9",
                "payTableV0",
                "payTableV1",
                "payTableV2",
                "payTableV3",
                "payTableV4",
                "payTableV5",
                "payTableV6",
                "payTableV7",
                "payTableV8",
                "payTableV9"
            ],
            fillAlpha: 1,
            fill: 0x00BAC9,
            lineWidth: 4,
            lineColor: 0xFFFFFF,
            radius: 6,
            x: 18,
            landscape: {
                y: 1060,
                width: 764,
                height: 534
            },
            portrait: {
                y: 1060,
                width: 604,
                height: 534
            }
        },
            payTableBar0: {
                type: "rectangle",
                fillAlpha: 1,
                fill: 0xFFFFFF,
                x: 0,
                y: 50,
                landscape: { width: 764 },
                portrait: { width: 604 },
                height: 48
            },
            payTableBar1: {
                type: "rectangle",
                fillAlpha: 1,
                fill: 0xFFFFFF,
                x: 0,
                y: 146,
                landscape: { width: 764 },
                portrait: { width: 604 },
                height: 48
            },
            payTableBar2: {
                type: "rectangle",
                fillAlpha: 1,
                fill: 0xFFFFFF,
                x: 0,
                y: 242,
                landscape: { width: 764 },
                portrait: { width: 604 },
                height: 48
            },
            payTableBar3: {
                type: "rectangle",
                fillAlpha: 1,
                fill: 0xFFFFFF,
                x: 0,
                y: 338,
                landscape: { width: 764 },
                portrait: { width: 604 },
                height: 48
            },
            payTableBar4: {
                type: "rectangle",
                fillAlpha: 1,
                fill: 0xFFFFFF,
                x: 0,
                y: 434,
                landscape: { width: 764 },
                portrait: { width: 604 },
                height: 48
            },
            payTableVerticalBar: {
                type: "rectangle",
                fillAlpha: 1,
                fill: 0xFFFFFF,
                landscape: { x: 381 },
                portrait: { x: 301 },
                y: 0,
                width: 4,
                height: 534
            },
            payTableTitle0: {
                type: "text",
                style: "payTableHeader",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 26,
                string: "payTableHeader0"
            },
            payTableTitle1: {
                type: "text",
                style: "payTableHeader",
                anchor: 0.5,
                landscape: { x: 580 },
                portrait: { x: 456 },
                y: 26,
                string: "payTableHeader1"
            },
            payTableP0: {
                type: "text",
                style: "payTableText0",
                string: "payTableP0",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 76
            },
            payTableP1: {
                type: "text",
                style: "payTableText1",
                string: "payTableP1",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 124
            },
            payTableP2: {
                type: "text",
                style: "payTableText0",
                string: "payTableP2",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 172
            },
            payTableP3: {
                type: "text",
                style: "payTableText1",
                string: "payTableP3",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 220
            },
            payTableP4: {
                type: "text",
                style: "payTableText0",
                string: "payTableP4",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 268
            },
            payTableP5: {
                type: "text",
                style: "payTableText1",
                string: "payTableP5",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 316
            },
            payTableP6: {
                type: "text",
                style: "payTableText0",
                string: "payTableP6",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 364
            },
            payTableP7: {
                type: "text",
                style: "payTableText1",
                string: "payTableP7",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 412
            },
            payTableP8: {
                type: "text",
                style: "payTableText0",
                string: "payTableP8",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 460
            },
            payTableP9: {
                type: "text",
                style: "payTableText1",
                string: "payTableP9",
                anchor: 0.5,
                landscape: { x: 196 },
                portrait: { x: 154 },
                y: 508
            },
            payTableV0: {
                type: "text",
                style: "payTableText0",
                string: "payTableV0",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 76
            },
            payTableV1: {
                type: "text",
                style: "payTableText1",
                string: "payTableV1",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 124
            },
            payTableV2: {
                type: "text",
                style: "payTableText0",
                string: "payTableV2",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 172
            },
            payTableV3: {
                type: "text",
                style: "payTableText1",
                string: "payTableV3",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 220
            },
            payTableV4: {
                type: "text",
                style: "payTableText0",
                string: "payTableV4",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 268
            },
            payTableV5: {
                type: "text",
                style: "payTableText1",
                string: "payTableV5",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 316
            },
            payTableV6: {
                type: "text",
                style: "payTableText0",
                string: "payTableV6",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 364
            },
            payTableV7: {
                type: "text",
                style: "payTableText1",
                string: "payTableV7",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 412
            },
            payTableV8: {
                type: "text",
                style: "payTableText0",
                string: "payTableV8",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 460
            },
            payTableV9: {
                type: "text",
                style: "payTableText1",
                string: "payTableV9",
                anchor: 0.5,
                landscape: { x: 576 },
                portrait: { x: 456 },
                y: 508
            },
        oddsLabel0: {
            type: "text",
            style: "odds",
            string: "odds0",
            anchor: 0.5,
            landscape: { x: 400, y: 1628 },
            portrait: { x: 320, y: 1628 }
        },
        oddsLabel1: {
            type: "text",
            style: "odds",
            string: "odds1",
            anchor: 0.5,
            landscape: { x: 400, y: 1670 },
            portrait: { x: 320, y: 1670 }
        },
        oddsLabel2: {
            type: "text",
            style: "odds",
            string: "odds2",
            anchor: 0.5,
            landscape: { x: 400, y: 1712 },
            portrait: { x: 320, y: 1712 }
        }
});
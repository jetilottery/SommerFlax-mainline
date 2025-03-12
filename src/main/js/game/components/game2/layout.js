define({
    _BASE_GAME: {
        children: ["game2"]
    },
    /*
     * GAME 2
     */
    game2: {
        type: "rectangle",
        children: ["bgG2", "playerTilesG2", "luckyTilesG2"],
        fillAlpha: 0,
        width: 640,
        height: 1136,
        landscape: {
            x: 200,
            y: 180,
            scale: 0.26
        },
        landscapeSelected: {
            x: 180,
            y: -105,
            scale: 0.68
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        }
    },
        bgG2: {
            type: "rectangle",
            children: ["gameLabelG2", "gameLabelG2Large", "tagLineG2", "playerLabelG2", "legendG2", "luckyLabelG2"],
            width: 584,
            height: 580,
            anchor: 0,
            x: 28,
            y: 280,
            fill: 0X33A1FF,
            fillAlpha: 1,
            lineWidth: 4,
            lineColor: 0xFFF400,
            radius: 2
        },
            gameLabelG2: {
                type: "text",
                string: "gameLabelG2",
                anchor: 0,
                x: 0,
                y: -36,
                landscape: {visible: false},
                landscapeSelected: {visible: true},
                portrait: {visible: true},
                style: "gameLabel"
            },
            gameLabelG2Large: {
                type: "text",
                string: "gameLabelG2",
                anchor: 0.5,
                x: 180,
                y: -80,
                scale: 1.55,
                landscape: {visible: true},
                landscapeSelected: {visible: false},
                portrait: {visible: false},
                style: "gameLabelLarge"
            },
            tagLineG2: {
                type: "text",
                string: "tagLineG2",
                x: 230,
                y: -20,
                anchor: 0.5,
                landscape: {visible: false},
                landscapeSelected: {visible: true},
                portrait: {visible: true},
                style: "tagLineG2"
            },
            playerLabelG2: {
                type: "text",
                string: "playerLabelG2",
                anchor: 0,
                x: 24,
                y: 8,
                landscape: {visible: false},
                landscapeSelected: {visible: true},
                portrait: {visible: true},
                style: "playerLabelG2"
            },
            legendG2: {
                type: "container",
                children: [
                    "legendSurfBoard",
                    "legendTitleG2",
                    "legendSeparator0G2",
                    "legendSubtitle0G2",
                    "legendAmount0G2",
                    "legendSeparator1G2",
                    "legendSubtitle1G2",
                    "legendAmount1G2",
                    "legendSeparator2G2",
                    "legendSubtitle2G2",
                    "legendAmount2G2",
                    "legendSeparator3G2",
                    "legendSubtitle3G2",
                    "legendAmount3G2",
                    "legendSeparator4G2",
                    "legendSubtitle4G2",
                    "legendAmount4G2",
                    "legendSeparator5G2",
                    "legendSubtitle5G2",
                    "legendAmount5G2",
                    "legendSeparator6G2",
                    "legendSubtitle6G2",
                    "legendAmount6G2",
                    "legendSeparator7G2",
                    "legendSubtitle7G2",
                    "legendAmount7G2"
                ],
                x: 448,
                y: 22
            },
                legendSurfBoard: {
                    type: "sprite",
                    texture: "surfboard",
                    x: -55,
                    Y: -22
                },
                legendTitleG2: {
                    type: "text",
                    string: "legendTitleG2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 0,
                    landscape: {visible: false},
                    landscapeSelected: {visible: true},
                    style: "legendTitleG2"
                },
                legendSeparator0G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 25
                },
                legendSubtitle0G2: {
                    type: "text",
                    string: "legendSubtitle0G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 29,
                    style: "legendSubG2"
                },
                legendAmount0G2: {
                    type: "text",
                    string: "legendAmount0G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 44,
                    style: "legendAmG2"
                },
                legendSeparator1G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 71
                },
                legendSubtitle1G2: {
                    type: "text",
                    string: "legendSubtitle1G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 75,
                    style: "legendSubG2"
                },
                legendAmount1G2: {
                    type: "text",
                    string: "legendAmount1G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 90,
                    style: "legendAmG2"
                },
                legendSeparator2G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 117
                },
                legendSubtitle2G2: {
                    type: "text",
                    string: "legendSubtitle2G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 121,
                    style: "legendSubG2"
                },
                legendAmount2G2: {
                    type: "text",
                    string: "legendAmount2G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 136,
                    style: "legendAmG2"
                },
                legendSeparator3G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 163
                },
                legendSubtitle3G2: {
                    type: "text",
                    string: "legendSubtitle3G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 167,
                    style: "legendSubG2"
                },
                legendAmount3G2: {
                    type: "text",
                    string: "legendAmount3G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 182,
                    style: "legendAmG2"
                },
                legendSeparator4G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 209
                },
                legendSubtitle4G2: {
                    type: "text",
                    string: "legendSubtitle4G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 213,
                    style: "legendSubG2"
                },
                legendAmount4G2: {
                    type: "text",
                    string: "legendAmount4G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 228,
                    style: "legendAmG2"
                },
                legendSeparator5G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 255
                },
                legendSubtitle5G2: {
                    type: "text",
                    string: "legendSubtitle5G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 259,
                    style: "legendSubG2"
                },
                legendAmount5G2: {
                    type: "text",
                    string: "legendAmount5G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 274,
                    style: "legendAmG2"
                },
                legendSeparator6G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 301
                },
                legendSubtitle6G2: {
                    type: "text",
                    string: "legendSubtitle6G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 305,
                    style: "legendSubG2"
                },
                legendAmount6G2: {
                    type: "text",
                    string: "legendAmount6G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 320,
                    style: "legendAmG2"
                },
                legendSeparator7G2: {
                    type: "sprite",
                    texture: "separatorG2",
                    x: 0,
                    y: 347
                },
                legendSubtitle7G2: {
                    type: "text",
                    string: "legendSubtitle7G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 351,
                    style: "legendSubG2"
                },
                legendAmount7G2: {
                    type: "text",
                    string: "legendAmount7G2",
                    anchor: {x: 1, y: 0},
                    x: 102,
                    y: 366,
                    style: "legendAmG2"
                },
            luckyLabelG2: {
                type: "text",
                string: "luckyLabelG2",
                anchor: 0,
                x: 27,
                y: 439,
                landscape: {visible: false},
                landscapeSelected: {visible: true},
                portrait: {visible: true},
                style: "luckyLabelG2"
            },
        playerTilesG2: {
            type: "rectangle",
            width: 404,
            height: 404,
            anchor: 0,
            x: 54,
            y: 312,
            fill: 0XFF6C00,
            fillAlpha: 1,
            lineWidth: 4,
            lineColor: 0xFFE400
        },
        luckyTilesG2: {
            type: "container",
            children: [
                "luckyTile1G2",
                "luckyTile2G2",
                "luckyTile3G2",
                "luckyTile4G2",
                "luckyTile5G2",
                "luckyTile6G2",
                "luckyTile7G2",
                "luckyTile8G2",
                "luckyTile9G2",
                "luckyTile10G2",
                "luckyTile11G2",
                "luckyTile12G2",
                "luckyTile13G2",
                "luckyTile14G2",
                "luckyTile15G2",
                "luckyTile16G2",
                "luckyTile17G2",
                "luckyTile18G2"
            ],
            x: 0,
            y: 9
        },
            luckyTile1G2: {
                type: "container",
                x: 64,
                y: 762
            },
            luckyTile2G2: {
                type: "container",
                x: 128,
                y: 762
            },
            luckyTile3G2: {
                type: "container",
                x: 192,
                y: 762
            },
            luckyTile4G2: {
                type: "container",
                x: 256,
                y: 762
            },
            luckyTile5G2: {
                type: "container",
                x: 320,
                y: 762
            },
            luckyTile6G2: {
                type: "container",
                x: 384,
                y: 762
            },
            luckyTile7G2: {
                type: "container",
                x: 448,
                y: 762
            },
            luckyTile8G2: {
                type: "container",
                x: 512,
                y: 762
            },
            luckyTile9G2: {
                type: "container",
                x: 576,
                y: 762
            },
            luckyTile10G2: {
                type: "container",
                x: 64,
                y: 816
            },
            luckyTile11G2: {
                type: "container",
                x: 128,
                y: 816
            },
            luckyTile12G2: {
                type: "container",
                x: 192,
                y: 816
            },
            luckyTile13G2: {
                type: "container",
                x: 256,
                y: 816
            },
            luckyTile14G2: {
                type: "container",
                x: 320,
                y: 816
            },
            luckyTile15G2: {
                type: "container",
                x: 384,
                y: 816
            },
            luckyTile16G2: {
                type: "container",
                x: 448,
                y: 816
            },
            luckyTile17G2: {
                type: "container",
                x: 512,
                y: 816
            },
            luckyTile18G2: {
                type: "container",
                x: 576,
                y: 816
            }
});
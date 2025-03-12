define({
    _BASE_GAME: {
        children: ["game1"]
    },
    /*
     * GAME 1
     */
    game1: {
        type: "rectangle",
        children: ["bgG1", "luckyTilesG1", "playerTilesG1", "gameLabelG1", "gameLabelG1Large", "luckyLabelG1", "playerLabelG1", "tagLine0G1", "tagLine1G1"],
        fillAlpha: 0,
        width: 640,
        height: 1136,
        landscape: {
            x: 29,
            y: 48,
            scale: 0.27
        },
        landscapeSelected: {
            x: 190,
            y: -58,
            scale: 0.64
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        }
    },
        bgG1: {
            type: "sprite",
            anchor: 0,
            x: 0,
            y: 207,
            texture: "boatG1"
        },
        luckyTilesG1: {
            type: "container",
            children: ["luckyTile1G1", "luckyTile2G1", "luckyTile3G1", "luckyTile4G1"]
        },
            luckyTile1G1: {
                type: "container",
                x: 185,
                y: 511
            },
            luckyTile2G1: {
                type: "container",
                x: 171,
                y: 571
            },
            luckyTile3G1: {
                type: "container",
                x: 159,
                y: 633
            },
            luckyTile4G1: {
                type: "container",
                x: 149,
                y: 693
            },
        playerTilesG1: {
            type: "container",
            children: [
                "playerTile1G1",
                "playerTile2G1",
                "playerTile3G1",
                "playerTile4G1",
                "playerTile5G1",
                "playerTile6G1",
                "playerTile7G1",
                "playerTile8G1",
                "playerTile9G1",
                "playerTile10G1",
                "playerTile11G1",
                "playerTile12G1",
                "playerTile13G1",
                "playerTile14G1",
                "playerTile15G1",
                "playerTile16G1",
                "playerTile17G1",
                "playerTile18G1",
                "playerTile19G1",
                "playerTile20G1"
            ]
        },
            playerTile1G1: {
                type: "container",
                x: 299,
                y: 303
            },
            playerTile2G1: {
                type: "container",
                x: 369,
                y: 303
            },
            playerTile3G1: {
                type: "container",
                x: 313,
                y: 370
            },
            playerTile4G1: {
                type: "container",
                x: 381,
                y: 370
            },
            playerTile5G1: {
                type: "container",
                x: 448,
                y: 370
            },
            playerTile6G1: {
                type: "container",
                x: 321,
                y: 439
            },
            playerTile7G1: {
                type: "container",
                x: 389,
                y: 439
            },
            playerTile8G1: {
                type: "container",
                x: 457,
                y: 439
            },
            playerTile9G1: {
                type: "container",
                x: 525,
                y: 439
            },
            playerTile10G1: {
                type: "container",
                x: 333,
                y: 508
            },
            playerTile11G1: {
                type: "container",
                x: 403,
                y: 508
            },
            playerTile12G1: {
                type: "container",
                x: 471,
                y: 508
            },
            playerTile13G1: {
                type: "container",
                x: 539,
                y: 508
            },
            playerTile14G1: {
                type: "container",
                x: 345,
                y: 577
            },
            playerTile15G1: {
                type: "container",
                x: 413,
                y: 577
            },
            playerTile16G1: {
                type: "container",
                x: 481,
                y: 577
            },
            playerTile17G1: {
                type: "container",
                x: 549,
                y: 577
            },
            playerTile18G1: {
                type: "container",
                x: 352,
                y: 645
            },
            playerTile19G1: {
                type: "container",
                x: 417,
                y: 645
            },
            playerTile20G1: {
                type: "container",
                x: 485,
                y: 645
            },
        gameLabelG1: {
            type: "text",
            string: "gameLabelG1",
            anchor: 0.5,
            x: 160,
            y: 320,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "gameLabel"
        },
        gameLabelG1Large: {
            type: "text",
            string: "gameLabelG1",
            anchor: 0.5,
            x: 410,
            y: 158,
            scale: 1.5,
            landscape: {visible: true},
            landscapeSelected: {visible: false},
            portrait: {visible: false},
            style: "gameLabelLarge"
        },
        luckyLabelG1: {
            type: "text",
            string: "luckyLabelG1",
            anchor: 0.5,
            x: 88,
            y: 578,
            style: "luckyLabelG1",
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            rotation: -1.1623892818282233
        },
        playerLabelG1: {
            type: "text",
            string: "playerLabelG1",
            anchor: 0.5,
            x: 320,
            y: 240,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "playerLabelG1"
        },
        tagLine0G1: {
            type: "text",
            string: "tagLine0G1",
            anchor: 0.5,
            x: 320,
            y: 755,
            rotation: -0.2118829711921116,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "tagLine0G1"
        },
        tagLine1G1: {
            type: "text",
            string: "tagLine1G1",
            anchor: 0.5,
            x: 320,
            y: 785,
            rotation: -0.2118829711921116,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "tagLine1G1"
        }
});
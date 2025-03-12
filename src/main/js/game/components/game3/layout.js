define({
    _BASE_GAME: {
        children: ["game3"]
    },
    /*
     * GAME 3
     */
    game3: {
        type: "rectangle",
        children: ["bgG3", "playerTilesG3", "gameLabelG3", "gameLabelG3Large", "tagLineG3"],
        landscape: {
            x: 369,
            y: 67,
            scale: 0.3
        },
        landscapeSelected: {
            x: 175,
            y: -100,
            scale: 0.7
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        },
        fillAlpha: 0,
        width: 640,
        height: 1136
    },
        bgG3: {
            type: "sprite",
            x: 126,
            y: 245,
            texture: "lollyBase"
        },
        playerTilesG3: {
            type: "container",
            children: [
                "playerTile1G3",
                "playerTile2G3",
                "playerTile3G3",
                "playerTile4G3",
                "playerTile5G3",
                "playerTile6G3",
                "playerTile7G3",
                "playerTile8G3",
                "playerTile9G3"
            ],
            x: 0,
            y: 0
        },
            playerTile1G3: {
                type: "container",
                x: 223,
                y: 395
            },
            playerTile2G3: {
                type: "container",
                x: 323,
                y: 333
            },
            playerTile3G3: {
                type: "container",
                x: 433,
                y: 430
            },
            playerTile4G3: {
                type: "container",
                x: 194,
                y: 533
            },
            playerTile5G3: {
                type: "container",
                x: 323,
                y: 458
            },
            playerTile6G3: {
                type: "container",
                x: 411,
                y: 563
            },
            playerTile7G3: {
                type: "container",
                x: 211,
                y: 687
            },
            playerTile8G3: {
                type: "container",
                x: 297,
                y: 603
            },
            playerTile9G3: {
                type: "container",
                x: 385,
                y: 700
            },
        gameLabelG3: {
            type: "text",
            string: "gameLabelG3",
            anchor: 0,
            x: 150,
            y: 287,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "gameLabel"
        },
        gameLabelG3Large: {
            type: "text",
            string: "gameLabelG3",
            anchor: 0.5,
            x: 178,
            y: 155,
            scale: 1.37,
            landscape: {visible: true},
            landscapeSelected: {visible: false},
            portrait: {visible: false},
            style: "gameLabelLarge"
        },
        tagLineG3: {
            type: "text",
            string: "tagLineG3",
            anchor: 0.5,
            x: 320,
            y: 811,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "playerLabelG3"
        }
});
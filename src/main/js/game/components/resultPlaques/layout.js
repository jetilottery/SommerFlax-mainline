define({
    _BASE_RESULTPLAQUES: {
        children: ["resultPlaques"]
    },
    /*
     * INTRO
     */
    resultPlaques: {
        type: "rectangle",
        children: ["winPlaque", "losePlaque", "viewResultButton", "okButton"],
        x: 0,
        y: 0,
        width: 1024,
        height: 1136,
        fill: 0x000000,
        fillAlpha: 0.8
    },
        /*
         * Win
         */

        winPlaque: {
            type: "container",
            portrait: {
                x: 0,
                y: 0,
                scale: 1
            },
            landscape: {
                x: 146,
                y: -150,
                scale: 0.8
            },
            children: ["burst1", "burst2", "burst3", "winPopUp"]
        },
            burst1: {
                type: "sprite",
                x: 320,
                y: 568,
                anchor: 0.5,
                texture: "burst1"
            },
            burst2: {
                type: "sprite",
                x: 320,
                y: 568,
                anchor: 0.5,
                texture: "burst2"
            },
            burst3: {
                type: "sprite",
                x: 320,
                y: 568,
                anchor: 0.5,
                texture: "burst3"
            },
            winPopUp: {
                type: "sprite",
                x: 320,
                y: 578,
                anchor: 0.5,
                texture: "winPopUp",
                children: ["congratulationsRP", "youWinRP", "prizeRP"]
            },
                congratulationsRP: {
                    type: "text",
                    string: "congratulationsRP",
                    anchor: 0.5,
                    x: 0,
                    y: -92,
                    rotation: -0.03490658503988659,
                    style: "congratulationsRP"
                },
                youWinRP: {
                    type: "text",
                    string: "youWinRP",
                    anchor: 0.5,
                    x: 0,
                    y: 0,
                    rotation: 0.08726646259971647,
                    style: "youWinRP"
                },
                prizeRP: {
                    type: "text",
                    anchor: 0.5,
                    x: 0,
                    y: 110,
                    style: "prizeRP"
                },
        losePlaque: {
            type: "container",
            portrait: {
                x: 0,
                y: 0,
                scale: 1
            },
            landscape: {
                x: 146,
                y: -166,
                scale: 0.8
            },
            children: ["losePopUp"]
        },
            losePopUp: {
                type: "sprite",
                x: 320,
                y: 578,
                anchor: 0.5,
                texture: "noWinPopUp",
                children: ["sorryRP", "nextTimeRP"]
            },
                sorryRP: {
                    type: "text",
                    string: "sorryRP",
                    anchor: 0.5,
                    x: 0,
                    y: -75,
                    rotation: -0.03490658503988659,
                    style: "sorryRP"
                },
                nextTimeRP: {
                    type: "text",
                    string: "nextTimeRP",
                    anchor: 0.5,
                    x: 14,
                    y: 90,
                    rotation: 0.06981317007977318,
                    style: "nextTimeRP"
                },
        viewResultButton: {
            type:           "button",
            portrait: {
                x:          200,
                y:          844,
                scale: 1
            },
            landscape: {
                x:          320,
                y:          520,
                scale:      0.8
            },
            string:         "button_viewResult",
            textures: {
                enabled:    "buttonBaseSmallUp",
                over:       "buttonBaseSmallOver",
                pressed:    "buttonBaseSmallDown",
                disabled:   "buttonBaseSmallDisabled"
            },
            style: {
                enabled:    "mainButtonEnabled",
                over:       "mainButtonOver",
                pressed:    "mainButtonPressed",
                disabled:   "mainButtonDisabled"
            }
        },
        okButton: {
            type:           "button",
            portrait: {
                x:          440,
                y:          844,
                scale: 1
            },
            landscape: {
                x:          480,
                y:          520,
                scale:      0.8
            },
            string:         "button_ok",
            textures: {
                enabled:    "buttonBaseSmallUp",
                over:       "buttonBaseSmallOver",
                pressed:    "buttonBaseSmallDown",
                disabled:   "buttonBaseSmallDisabled"
            },
            style: {
                enabled:    "mainButtonEnabled",
                over:       "mainButtonOver",
                pressed:    "mainButtonPressed",
                disabled:   "mainButtonDisabled"
            }
        }
});
define({
    _BASE_INTRO: {
        children: ["intro"]
    },
    /*
     * INTRO
     */
    intro: {
        type: "container",
        children: ["ocean", "reflection", "logoLarge", "flaxLogo", "logoSmall", "introText", "balanceMeter", "ticketPrice"],
        x: 0,
        y: 0
    },
    /*
     * BALANCE
     */
    balanceMeter: {
        type: "text",
        style: "balanceMeterStyle",
        string: "balanceMeter",
        anchor: { x: 1, y: 0 },
        landscape: { x: 794, y: 12 },
        portrait: { x: 634, y: 144 }
    },

    ticketPrice: {
        type: "text",
        style: "ticketPriceStyle",
        anchor: { x: 1, y: 0 },
        landscape: { x: 794, y: 512 },
        portrait: { x: 634, y: 880 }
    },

    /**
     * OCEAN
     */
    ocean: {
            type: "container",
            landscape: {
                x: 0,
                y: 456,
                alpha: 1,
                visible: true
            },
            portrait: {
                x: 0,
                y: 709,
                alpha: 1,
                visible: true
            }
        },
        reflection: {
            type: "sprite",
            anchor: 0.5,
            landscape: {
                x: 402,
                y: 475,
                alpha: 1,
                visible: true
            },
            portrait: {
                x: 320,
                y: 738,
                alpha: 1,
                visible: true
            },
            texture: "reflection"
        },
        logoLarge: {
            type: "sprite",
            anchor: 0.5,
            landscape: {
                x: 406,
                y: 246,
                scale: 1,
                alpha: 1,
                visible: true
            },
            portrait: {
                x: 320,
                y: 438,
                scale: 1,
                alpha: 1,
                visible: true
            },
            texture: "sommerFlaxLogo"
        },

        flaxLogo: {
            type: "sprite",
            anchor: 0.5,
            landscape: {
                x: 93,
                y: 40,
                scale: 0.65,
                texture: "ntFlaxLogo"
            },
            portrait: {
                x: 100,
                y: 170,
                texture: "ntFlaxLogo"
            }
        },

        logoSmall: {
            type: "sprite",
            landscape: {
                x: 704,
                y: 144,
                scale: {
                    x: 0.7,
                    y: 0.7
                },
                anchor: 0.5,
                alpha: 0,
                visible: false,
                texture: "sommerFlaxLogoSmall"
            },
            portrait: {
                x: 550,
                y: 234,
                scale: {
                    x: 1,
                    y: 1
                },
                anchor: 0.5,
                alpha: 0,
                visible: false,
                texture: "sommerFlaxLogoSmall"
            }
        },
        introText: {
            type: "container",
            children: ["introText1", "introText2", "introText3"],
            landscape: {
                x: 400,
                y: 300,
                rotation: 0,
                scale: 0.8,
				alpha: 1
            },
            portrait: {
                x: 320,
                y: 570,
                rotation: -0.1,
                scale: 1,
				alpha: 1
            }
        },
            introText1: {
                type: "text",
                string: "purchase_line1",
                style: "introTitleLarge",
                anchor: {x: 0.5, y: 0},
                x: 0,
                y: 0
            },
            introText2: {
                type: "text",
                string: "purchase_line2",
                style: "introTitleSmall",
                anchor: {x: 0.5, y: 0},
                x: 6,
                y: 75
            },
            introText3: {
                type: "text",
                string: "purchase_line3",
                style: "introTitleLarge",
                anchor: {x: 0.5, y: 0},
                x: 2,
                y: 118
            }
});
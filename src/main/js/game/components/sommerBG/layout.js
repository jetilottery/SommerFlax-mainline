define({
    _BASE_BG: {
        children: ["sommerBG"]
    },
    sommerBG: {
        type: "container",
        children: ["sea1", "sea2"]
    },
    sea1: {
        type: "sprite",
        texture: "sea1",
        anchor: {x: 0.5, y: 1},
        landscape: {
            scale: {
                x: -1.25,
                y: -1
            },
            x: 400,
            y: -180
        },
        portrait: {
            scale: {
                x: 1,
                y: 1
            },
            x: 320,
            y: 1136
        }
    },
    sea2: {
        type: "sprite",
        texture: "sea2",
        anchor: {x: 0.5, y: 1},
        landscape: {
            scale: {
                x: -1.6,
                y: -1
            },
            x: 400,
            y: -180
        },
        portrait: {
            scale: {
                x: 1,
                y: 1
            },
            x: 320,
            y: 1136
        }
    }
});
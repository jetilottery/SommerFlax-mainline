define(["com/pixijs/pixi", "com/pixijs/pixi-particles", "com/pixijs/pixi-filters"], function(PIXI) {
    return {
        idleAll: new PIXI.filters.GlowFilter(20, 5, 0, 0xFFFFFF)
    };
});
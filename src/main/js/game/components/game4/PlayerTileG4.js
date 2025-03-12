define((require) => {
    const PIXI = require("com/pixijs/pixi");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
   
    require('com/gsap/TweenLite');

    const partStyles = require("game/template/particleStyles");
    const ScratchSymbol = require("skbJet/componentLondon/customIW/components/ScratchSymbol");

    //Symbol frame names
    const lookup = {
        A: "symDrink",
        C: "symBeachBall",
        D: "symIceCream",
        G: "symFlower",
        H: "symSnorkel",
        I: "symSun",
        J: "symSunglasses"
    };

    class PlayerTileG4 extends ScratchSymbol {
        constructor() {
            super(65, 79, {
                background: "featherBase",
                win: "none",
                lose: "none",
                foil: "featherFoil"
            });

            this.numberSprite = new PIXI.Sprite();
            this.numberSprite.anchor.set(0.5);
            this.resultContainer.addChild(this.numberSprite);
            this.reset();
        }

        populate(number) {
            this.number = number;
            this.numberFrame = lookup[number];
            this.numberSprite.texture = PIXI.Texture.fromFrame(this.numberFrame);
        }

        reset() {
            super.reset();
            this.number = -1;
            this.numberSprite.texture = PIXI.Texture.EMPTY;
        }

        match() {
            this.matched = true;
        }

        presentWin() {
            this.particles.filters = [partStyles.filterAll];

            let emit = new PIXI.particles.Emitter(
                this.particles.p0,
                "particle0",
                partStyles.player0G4
            );
            emit.spawnPos.set(0, 0);
            let p0 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            emit = new PIXI.particles.Emitter(
                this.particles.p1,
                "particle1",
                partStyles.player1G4
            );
            emit.spawnPos.set(0, 0);
            let p1 = new Promise(resolve => emit.playOnceAndDestroy(resolve));
            
            return Promise.all([p0, p1]);
        }

        static fromContainer(container, number) {
            const tile = new PlayerTileG4(number);
            tile.container = container;

            //Rotate individual elements instead of the whole tile (keeps text unrotated)
            let rot = container.rotation;
            container.rotation = 0;
            tile.background.rotation = rot;
            tile.resultContainer.children.forEach(function (child) {
                if(child.text) {
                    child.rotation = 0;
                } else {
                    child.rotation = rot;
                }
            });
            tile.foil.rotation = rot;
            tile.particles.rotation = rot;

            container.addChild(tile.background, tile.resultContainer, tile.foil);
            tile.particles.x = container.x;
            tile.particles.y = container.y;
            container.parent.addChild(tile.particles);

            msgBus.subscribe("Game.Idle", tile.idle.bind(tile));

            return tile;
        }
    }

    return PlayerTileG4;
});
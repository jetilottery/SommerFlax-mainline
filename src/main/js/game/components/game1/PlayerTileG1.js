define((require) => {
    const FittedText = require("skbJet/componentManchester/standardIW/components/fittedText");
    const TextStyles = require("skbJet/componentManchester/standardIW/textStyles");
    const nokFormat = require("skbJet/componentLondon/utils/nokFormat");

    const PIXI = require("com/pixijs/pixi");
    require('com/gsap/TweenLite');

    const partStyles = require("game/template/particleStyles");

    const Tween = window.TweenLite;

    const ScratchSymbol = require("skbJet/componentLondon/customIW/components/ScratchSymbol");

    class PlayerTileG1 extends ScratchSymbol {
        constructor() {
            super(67, 70, {
                background: "YourBaseG1",
                win: "YourBaseWinG1",
                lose: "none",
                foil: "YourFoilG1"
            });

            this.numberSprite = new FittedText("XX");
            this.numberSprite.anchor.set(0.5);
            this.numberSprite.y = -7;
            this.numberSprite.style = TextStyles.parse("playerNumberG1");
            this.resultContainer.addChild(this.numberSprite);

            this.valueSprite = new FittedText("XXX XXX,-");
            this.valueSprite.anchor.set(0.5);
            this.valueSprite.y = 16;
            this.valueSprite.style = TextStyles.parse("playerValueG1");
            this.resultContainer.addChild(this.valueSprite);

            this.reset();
        }

        populate([number, value]) {
            this.number = number;
            this.value = value;

            this.numberSprite.text = number;
            this.valueSprite.text = nokFormat(value);
        }

        reset() {
            super.reset();
            this.number = -1;
            this.value = -1;

            this.numberSprite.text = "XX";
            this.valueSprite.text = "XXX XXX,-";
            this.numberSprite.style = TextStyles.parse("playerNumberG1");
            this.valueSprite.style = TextStyles.parse("playerValueG1");
            this.win.alpha = 0;
            this.win.visible = 0;
        }

        match() {
            this.matched = true;
            Tween.fromTo(this.win, 0.25, {alpha: 0, visible: 0}, {alpha: 1, visible: 1});
            this.numberSprite.style = TextStyles.parse("playerNumberWinG1");
            this.valueSprite.style = TextStyles.parse("playerValueWinG1");
        }

        presentWin() {
            this.particles.filters = [partStyles.filterAll];

            let emit = new PIXI.particles.Emitter(
                this.particles.p0,
                "particle0",
                partStyles.player0G1
            );
            emit.spawnPos.set(0, 0);
            let p0 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            emit = new PIXI.particles.Emitter(
                this.particles.p1,
                "particle1",
                partStyles.player1G1
            );
            emit.spawnPos.set(0, 0);
            let p1 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            return Promise.all([p0, p1]);
        }

        static fromContainer(container) {
            const tile = new PlayerTileG1();
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
            return tile;
        }
    }

    return PlayerTileG1;
});
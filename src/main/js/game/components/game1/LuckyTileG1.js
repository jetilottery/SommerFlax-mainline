define((require) => {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const FittedText = require("skbJet/componentManchester/standardIW/components/fittedText");
    const TextStyles = require("skbJet/componentManchester/standardIW/textStyles");
    const PIXI = require("com/pixijs/pixi");
    require('com/gsap/TweenLite');

    const partStyles = require("game/template/particleStyles");

    const Tween = window.TweenLite;
    const ScratchSymbol = require("skbJet/componentLondon/customIW/components/ScratchSymbol");

    class LuckyTileG1 extends ScratchSymbol {
        constructor(number) {
            super(60, 75, {
                background: "base" + number + "G1",
                win: "baseWin" + number + "G1",
                lose: "none",
                foil: "foil" + number + "G1"
            });

            this.numberSprite = new FittedText("XX");
            this.numberSprite.anchor.set(0.5);
            this.numberSprite.style = TextStyles.parse("luckyTileG1");
            this.resultContainer.addChild(this.numberSprite);

            this.reset();
        }

        populate(number) {
            this.number = number;
            this.numberSprite.text = number;
        }

        reset() {
            super.reset();
            this.number = -1;
            this.numberSprite.text = "XX";
            this.numberSprite.style = TextStyles.parse("luckyTileG1");
            this.win.alpha = 0;
            this.win.visible = 0;
        }

        match() {
            this.matched = true;
            Tween.fromTo(this.win, 0.25, {alpha: 0, visible: 0}, {alpha: 1, visible: 1});
            this.numberSprite.style = TextStyles.parse("luckyTileWinG1");
            this.emitters = [];
        }

        presentWin() {
            this.particles.filters = [partStyles.filterAll];

            let emit = new PIXI.particles.Emitter(
                this.particles.p0,
                "particle0",
                partStyles.lucky0G1
            );
            emit.spawnPos.set(0, 0);
            let p0 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            emit = new PIXI.particles.Emitter(
                this.particles.p1,
                "particle1",
                partStyles.lucky1G1
            );
            emit.spawnPos.set(0, 0);
            let p1 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            return Promise.all([p0, p1]);
        }

        static fromContainer(container, number) {
            const tile = new LuckyTileG1(number);

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

    return LuckyTileG1;
});
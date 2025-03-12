define((require) => {
    const FittedText = require("skbJet/componentManchester/standardIW/components/fittedText");
    const TextStyles = require("skbJet/componentManchester/standardIW/textStyles");
    const PIXI = require("com/pixijs/pixi");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const nokFormat = require("skbJet/componentLondon/utils/nokFormat");
   
    require('com/gsap/TweenLite');

    const partStyles = require("game/template/particleStyles");

    const Tween = window.TweenLite;

    const ScratchSymbol = require("skbJet/componentLondon/customIW/components/ScratchSymbol");

    class PlayerTileG3 extends ScratchSymbol {
        constructor() {
            super(143, 186, {
                background: "dripBase",
                win: "dripBaseWin",
                lose: "none",
                foil: "dripFoil"
            });

            this.valueSprite = new FittedText("");
            this.valueSprite.anchor.set(0.5);
            this.valueSprite.y = 16;
            this.valueSprite.style = TextStyles.parse("playerValueG3");
            this.resultContainer.addChild(this.valueSprite);

            this.reset();
        }

        populate(value) {
            this.value = value;
            this.valueSprite.text = nokFormat(value);

            if(this.resultContainer.width + 10 > this.foil.width ||
                this.resultContainer.height + 10 > this.foil.height)
            {
                this.resultContainer.scale.set(this.foil.width / (this.resultContainer.width + 10));
            }
        }

        reset() {
            super.reset();
            this.value = -1;

            this.valueSprite.text = "XXX XXX,-";
            this.valueSprite.style = TextStyles.parse("playerValueG3");
            this.win.alpha = 0;
            this.win.visible = 0;
        }

        match() {
            this.matched = true;
            Tween.fromTo(this.win, 0.25, {alpha: 0, visible: 0}, {alpha: 1, visible: 1});
            this.valueSprite.style = TextStyles.parse("playerValueWinG3");
        }

        presentWin() {
            this.particles.filters = [partStyles.filterAll];

            let emit = new PIXI.particles.Emitter(
                this.particles.p0,
                "particle0",
                partStyles.player0G3
            );
            emit.spawnPos.set(0, 0);
            let p0 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            emit = new PIXI.particles.Emitter(
                this.particles.p1,
                "particle1",
                partStyles.player1G3
            );
            emit.spawnPos.set(0, 0);
            let p1 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

            return Promise.all([p0, p1]);
        }

        static fromContainer(container, number) {
            const tile = new PlayerTileG3(number);
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

    return PlayerTileG3;
});
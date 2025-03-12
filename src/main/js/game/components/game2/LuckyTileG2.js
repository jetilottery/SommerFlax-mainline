define((require) => {
    const PIXI = require("com/pixijs/pixi");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");

    require('com/gsap/TweenLite');

    const ScratchSymbol = require("skbJet/componentLondon/customIW/components/ScratchSymbol");

    class LuckyTileG2 extends ScratchSymbol {
        constructor(number) {
            super(60, 75, {
                background: "beachBallTile_O",
                win: "none",
                lose: "none",
                foil: "beachballFoil" + number + "G2"
            });

            msgBus.subscribe("Game.Change", this.hideBG.bind(this));
            msgBus.subscribe("UI.GameReady", this.showBG.bind(this));

            this.reset();
        }

        hideBG() {
            this.background.texture = PIXI.Texture.fromFrame("beachBallTile_Blank");
        }

        showBG() {
            if(this.letterName && this.letterName != "") {
                this.background.texture = PIXI.Texture.fromFrame("beachBallTile_" + this.letterName);
            } else {
                this.background.texture = PIXI.Texture.fromFrame("beachBallTile_Blank");
            }
        }

        populate(letter) {
            switch(letter) {
                case "Ø":
                    this.letterName = "Ol";
                    break;
                case "Æ":
                    this.letterName = "AE";
                    break;
                case "Å":
                    this.letterName = "Ao";
                    break;
                default:
                    this.letterName = letter;
            }
            this.letter = letter;
            this.background.texture = PIXI.Texture.fromFrame("beachBallTile_" + this.letterName);
        }

        reset() {
            super.reset();
            this.letter = "";
            this.background.texture = PIXI.Texture.EMPTY;
        }

        match() {
            this.matched = true;
        }

        presentWin() {
            //noop
        }

        static fromContainer(container, number) {
            const tile = new LuckyTileG2(number);

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

    return LuckyTileG2;
});
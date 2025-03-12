define((require) => {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const PIXI = require("com/pixijs/pixi");
    require('com/gsap/TweenLite');

    const CrosswordLetter = require("skbJet/componentLondon/customIW/components/CrosswordLetter");

    class PlayerTileG2 extends CrosswordLetter {
        constructor(x, y) {
            super(36, 36, 2, {
                unselected: "unselectedTile_O",
                selected: "selectedTile_O",
                hint: "hintHighlightG2"
            });
            this.x = x;
            this.y = y;
            this.reset();
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
            if(letter == "-") {
                this.unselected.texture = PIXI.Texture.EMPTY;
                this.selected.texture = PIXI.Texture.EMPTY;
            } else {
                this.unselected.texture = PIXI.Texture.fromFrame("unselectedTile_" + this.letterName);
                this.selected.texture = PIXI.Texture.fromFrame("selectedTile_" + this.letterName);
            }
        }

        static fromContainer(container, x, y) {
            const tile = new PlayerTileG2(x, y);
            container.addChild(tile._container);

            msgBus.subscribe("Game.Hint", tile.showHint.bind(tile));
            msgBus.subscribe("Game.HideHints", tile.hideHint.bind(tile));
            msgBus.subscribe("Game.Change", tile.hideHint.bind(tile));
            msgBus.subscribe("Game.LuckyTileG2", tile.letterRevealed.bind(tile));

            return tile;
        }
        
        
    }

    return PlayerTileG2;
});
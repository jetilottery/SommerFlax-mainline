define(require => {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const audio = require("skbJet/componentManchester/standardIW/audio");
    const LuckyTile = require("./LuckyTileG2");
    const playerTiles = require("./playerTilesG2");

    require("com/gsap/TweenLite");
    const Tween = window.TweenLite;

    let tiles;
    let letters;
    let hints = false;

    function init() {
        tiles = [
            LuckyTile.fromContainer(displayList.luckyTile1G2, 1),
            LuckyTile.fromContainer(displayList.luckyTile2G2, 2),
            LuckyTile.fromContainer(displayList.luckyTile3G2, 3),
            LuckyTile.fromContainer(displayList.luckyTile4G2, 4),
            LuckyTile.fromContainer(displayList.luckyTile5G2, 1),
            LuckyTile.fromContainer(displayList.luckyTile6G2, 2),
            LuckyTile.fromContainer(displayList.luckyTile7G2, 3),
            LuckyTile.fromContainer(displayList.luckyTile8G2, 4),
            LuckyTile.fromContainer(displayList.luckyTile9G2, 1),
            LuckyTile.fromContainer(displayList.luckyTile10G2, 3),
            LuckyTile.fromContainer(displayList.luckyTile11G2, 4),
            LuckyTile.fromContainer(displayList.luckyTile12G2, 1),
            LuckyTile.fromContainer(displayList.luckyTile13G2, 2),
            LuckyTile.fromContainer(displayList.luckyTile14G2, 3),
            LuckyTile.fromContainer(displayList.luckyTile15G2, 4),
            LuckyTile.fromContainer(displayList.luckyTile16G2, 1),
            LuckyTile.fromContainer(displayList.luckyTile17G2, 2),
            LuckyTile.fromContainer(displayList.luckyTile18G2, 3)
        ];
        playerTiles.init();
    }

    function getLetter(tileIndex) {
        return tiles[tileIndex].letter;
    }

    function populate(data) {
        letters = data;
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        return tiles.map(async tile => {
            // Get the next Winning Letter
            const nextLetter = letters.shift();
            // Populate the tile with the next Winning Letter, ready to be uncovered
            tile.populate(nextLetter);
            // Enable the tile and wait for it to be revealed (manually or automatically)
            await tile.enable();
            // Play the Winning Number reveal audio
            audio.playSequential("winningNumber");
            // Wait for the uncover animation (if animated)
            await tile.scratch();
            msgBus.publish("Game.LuckyTileG2", nextLetter);
        });
    }

    function setActive(active) { 
        tiles.forEach(function(tile) { 
            tile.active = active;     
        });
    }     
    
    function revealAll() {
        // Get all the tiles yet to be revealed
        const unrevealed = tiles.filter(tile => !tile.revealed);

        // Return an array of tweens that calls reveal on each card in turn
        return unrevealed.map((tile) => Tween.delayedCall(0, tile.reveal, null, tile).duration(tile.scratchDuration));
    }

    function reset() {
        tiles.forEach(tile => tile.reset());
    }

    function toggleHints() {
        hints = !hints;
        if(hints) {
            tiles.forEach(function h(tile){
                if(tile.revealed) {
                    msgBus.publish("Game.Hint", tile.letter);
                }
            });
        } else {
            msgBus.publish("Game.HideHints");
        }
    }
    
    msgBus.subscribe("Game.toggleHints", toggleHints);

    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset,
        getLetter
    };
});

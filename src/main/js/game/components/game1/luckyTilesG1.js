define(require => {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const audio = require("skbJet/componentManchester/standardIW/audio");
    const LuckyTile = require("./LuckyTileG1");
    const revealState = require("game/state/revealState");

    require("com/gsap/TweenLite");
    const Tween = window.TweenLite;

    let tiles;
    let numbers;

    function init() {
        tiles = [
            LuckyTile.fromContainer(displayList.luckyTile1G1, 1),
            LuckyTile.fromContainer(displayList.luckyTile2G1, 2),
            LuckyTile.fromContainer(displayList.luckyTile3G1, 3),
            LuckyTile.fromContainer(displayList.luckyTile4G1, 4)
        ];
    }

    function populate(data) {
        numbers = data;
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        return tiles.map(async (tile) => {
            // Get the next Winning Number
            const nextNumber = numbers.shift();
            // Populate the tile with the next Winning Number, ready to be uncovered
            tile.populate(nextNumber);
            // Enable the tile and wait for it to be revealed (manually or automatically)
            await tile.enable();
            // Play the Winning Number reveal audio
            audio.playSequential("winningNumber");
            // Wait for the uncover animation (if animated)
            await tile.scratch();
            msgBus.publish("Game.LuckyTileG1", nextNumber);
            // If the revealed number matches a revealed Player Number then mark the match
            if (revealState.playerG1.includes(tile.number)) {
                tile.match();
                await tile.presentWin();
            }
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
        // Return an array of tweens that calls reveal on each tile in turn
        return unrevealed.map((tile) => Tween.delayedCall(0, tile.reveal, null, tile).duration(tile.scratchDuration));
    }

    function reset() {
        tiles.forEach(tile => tile.reset());
    }

    function checkMatch(playerNumber) {
        const matchedTile = tiles.find(tile => tile.number === playerNumber);
        if (matchedTile && matchedTile.revealed) {
            matchedTile.match();
            matchedTile.presentWin();
        }
    }
    msgBus.subscribe("Game.PlayerTileG1", checkMatch);

    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset
    };
});

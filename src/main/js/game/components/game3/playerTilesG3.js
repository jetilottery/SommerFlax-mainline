define(require => {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const PlayerTile = require("./PlayerTileG3");
    const audio = require("skbJet/componentManchester/standardIW/audio");

    require("com/gsap/TweenLite");
    const Tween = window.TweenLite;

    let tiles;
    let numbers;

    function init() {
        tiles = [
            PlayerTile.fromContainer(displayList.playerTile1G3, 1),
            PlayerTile.fromContainer(displayList.playerTile2G3, 2),
            PlayerTile.fromContainer(displayList.playerTile3G3, 3),
            PlayerTile.fromContainer(displayList.playerTile4G3, 4),
            PlayerTile.fromContainer(displayList.playerTile5G3, 1),
            PlayerTile.fromContainer(displayList.playerTile6G3, 0),
            PlayerTile.fromContainer(displayList.playerTile7G3, 2),
            PlayerTile.fromContainer(displayList.playerTile8G3, 3),
            PlayerTile.fromContainer(displayList.playerTile9G3, 4)
        ];
    }

    function populate(data) {
        numbers = data;
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        return tiles.map(async tile => {
            // Get the next Winning Number
            const nextData = numbers.shift();
            // Populate the tile with the next Winning Number, ready to be uncovered
            tile.populate(nextData);
            // Enable the tile and wait for it to be revealed (manually or automatically)
            await tile.enable();
            // Play the Winning Number reveal audio
            audio.playSequential("playerNumber");
            // Wait for the uncover animation (if animated)
            await tile.scratch();
            msgBus.publish("Game.PlayerTileG3", nextData);

            let matching = 0;
            tiles.forEach(function check(t){
                if(t.revealed && t.value === tile.value) {
                    matching++;
                }
            });
            if(matching >= 3) {
                tiles.forEach(function check(t){
                    if(!t.matched && t.revealed && t.value === tile.value) {
                        t.match();
                        t.presentWin();
                        audio.playSequential("match");
                    }
                });
                meterData.win += tile.value;
            }
        });
    }

    function setActive(active) {
        tiles.forEach(function(tile) { 
            tile.active = active;
            if(!tile.revealed) {
                tile.resultContainer.scale.set(Math.min(0.9, tile.foil.width / tile.valueSprite.width));
            }
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

    function checkMatch() {
        //noop
    }
    msgBus.subscribe("Game.PlayerTileG3", checkMatch);


    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset
    };
});

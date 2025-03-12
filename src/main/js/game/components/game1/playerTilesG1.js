define(require => {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const PlayerTile = require("./PlayerTileG1");
    const revealState = require("game/state/revealState");
    const audio = require("skbJet/componentManchester/standardIW/audio");

    require("com/gsap/TweenLite");
    const Tween = window.TweenLite;

    let tiles;
    let numbers;

    function init() {
        tiles = [
            PlayerTile.fromContainer(displayList.playerTile1G1),
            PlayerTile.fromContainer(displayList.playerTile2G1),
            PlayerTile.fromContainer(displayList.playerTile3G1),
            PlayerTile.fromContainer(displayList.playerTile4G1),
            PlayerTile.fromContainer(displayList.playerTile5G1),
            PlayerTile.fromContainer(displayList.playerTile6G1),
            PlayerTile.fromContainer(displayList.playerTile7G1),
            PlayerTile.fromContainer(displayList.playerTile8G1),
            PlayerTile.fromContainer(displayList.playerTile9G1),
            PlayerTile.fromContainer(displayList.playerTile10G1),
            PlayerTile.fromContainer(displayList.playerTile11G1),
            PlayerTile.fromContainer(displayList.playerTile12G1),
            PlayerTile.fromContainer(displayList.playerTile13G1),
            PlayerTile.fromContainer(displayList.playerTile14G1),
            PlayerTile.fromContainer(displayList.playerTile15G1),
            PlayerTile.fromContainer(displayList.playerTile16G1),
            PlayerTile.fromContainer(displayList.playerTile17G1),
            PlayerTile.fromContainer(displayList.playerTile18G1),
            PlayerTile.fromContainer(displayList.playerTile19G1),
            PlayerTile.fromContainer(displayList.playerTile20G1)
        ];
    }

    function populate(data) {
        numbers = data;
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        return tiles.map(async tile => {
            const nextData = numbers.shift();
            tile.populate(nextData);

            // Enable the tile and wait for it to be revealed (manually or automatically)
            await tile.enable();
            // Play the Winning Number reveal audio
            audio.playSequential("playerNumber");
            // Wait for the uncover animation (if animated)
            await tile.scratch();
            msgBus.publish("Game.PlayerTileG1", nextData[0]);
            // If the revealed number matches a revealed Lucky Number then mark the match
            if (!tile.matched && revealState.luckyG1.includes(nextData[0])) {
                tile.match();
                audio.playSequential('match');
                meterData.win += tile.value;
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

    function checkMatch(luckyTile) {
        tiles.forEach(function check(tile){
            if(tile.revealed && !tile.matched && tile.number === luckyTile) {
                tile.match();
                tile.presentWin();
                meterData.win += tile.value;
                audio.playSequential("match");
            }
        });
    }
    msgBus.subscribe("Game.LuckyTileG1", checkMatch);


    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset
    };
});

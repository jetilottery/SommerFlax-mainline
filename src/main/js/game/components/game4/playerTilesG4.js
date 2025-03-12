define(require => {
    const PIXI = require("com/pixijs/pixi");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const TextStyles = require("skbJet/componentManchester/standardIW/textStyles");
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const PlayerTile = require("./PlayerTileG4");
    const audio = require("skbJet/componentManchester/standardIW/audio");

    require("com/gsap/TweenLite");
    const Tween = window.TweenLite;

    const lookupIcons = {
        "symSunglasses":    ["legendShades0G4", "legendShades1G4", "legendShades2G4"],
        "symSun":           ["legendSun0G4", "legendSun1G4", "legendSun2G4", "legendSun3G4"],
        "symSnorkel":       ["legendSnorkel0G4", "legendSnorkel1G4", "legendSnorkel2G4", "legendSnorkel3G4", "legendSnorkel4G4"],
        "symFlower":        ["legendFlower0G4", "legendFlower1G4", "legendFlower2G4", "legendFlower3G4", "legendFlower4G4", "legendFlower5G4"],
        "symIceCream":      ["legendIceCream0G4", "legendIceCream1G4", "legendIceCream2G4", "legendIceCream3G4", "legendIceCream4G4", "legendIceCream5G4", "legendIceCream6G4"],
        "symBeachBall":     ["legendBeachBall0G4", "legendBeachBall1G4", "legendBeachBall2G4", "legendBeachBall3G4", "legendBeachBall4G4", "legendBeachBall5G4", "legendBeachBall6G4", "legendBeachBall7G4"],
        "symDrink":         ["legendDrink0G4", "legendDrink1G4", "legendDrink2G4", "legendDrink3G4", "legendDrink4G4", "legendDrink5G4", "legendDrink6G4", "legendDrink7G4", "legendDrink8G4"]
    };

    const lookupLabels = {
        "symSunglasses":    ["legendQuantity6G4", "legendValue6G4"],
        "symSun":           ["legendQuantity5G4", "legendValue5G4"],
        "symSnorkel":       ["legendQuantity4G4", "legendValue4G4"],
        "symFlower":        ["legendQuantity3G4", "legendValue3G4"],
        "symIceCream":      ["legendQuantity2G4", "legendValue2G4"],
        "symBeachBall":     ["legendQuantity1G4", "legendValue1G4"],
        "symDrink":         ["legendQuantity0G4", "legendValue0G4"]
    };

    const lookupPrizes = {
        "symSunglasses":    10000,
        "symSun":           20000,
        "symSnorkel":       50000,
        "symFlower":        100000,
        "symIceCream":     	1000000,
        "symBeachBall":     5000000,
        "symDrink":         50000000
    };

    let tiles;
    let numbers;

    function init() {
        tiles = [
            PlayerTile.fromContainer(displayList.playerTile1G4, 2),
            PlayerTile.fromContainer(displayList.playerTile2G4, 3),
            PlayerTile.fromContainer(displayList.playerTile3G4, 6),
            PlayerTile.fromContainer(displayList.playerTile4G4, 3),
            PlayerTile.fromContainer(displayList.playerTile5G4, 1),
            PlayerTile.fromContainer(displayList.playerTile6G4, 2),
            PlayerTile.fromContainer(displayList.playerTile7G4, 4),
            PlayerTile.fromContainer(displayList.playerTile8G4, 5),
            PlayerTile.fromContainer(displayList.playerTile9G4, 6),
            PlayerTile.fromContainer(displayList.playerTile10G4, 4),
            PlayerTile.fromContainer(displayList.playerTile11G4, 1),
            PlayerTile.fromContainer(displayList.playerTile12G4, 5),
            PlayerTile.fromContainer(displayList.playerTile13G4, 6),
            PlayerTile.fromContainer(displayList.playerTile14G4, 2),
            PlayerTile.fromContainer(displayList.playerTile15G4, 1),
            PlayerTile.fromContainer(displayList.playerTile16G4, 3),
            PlayerTile.fromContainer(displayList.playerTile17G4, 4),
            PlayerTile.fromContainer(displayList.playerTile18G4, 3),
            PlayerTile.fromContainer(displayList.playerTile19G4, 5),
            PlayerTile.fromContainer(displayList.playerTile20G4, 4)
        ];
    }

    function populate(data) {
        numbers = data;
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        window.tiles = tiles;
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
            msgBus.publish("Game.PlayerTileG4", nextData);

            //Update Legend
            for(let objName of lookupIcons[tile.numberFrame]) {
                if(!displayList[objName].matched) {
                    displayList[objName].texture = PIXI.Texture.fromFrame("key" + tile.numberFrame + "Win");
                    displayList[objName].matched = true;
                    break;
                }
            }

            //Check for full sets
            let matching = 0;
            tiles.forEach(function check(t){
                if(t.revealed && t.numberFrame === tile.numberFrame) {
                    matching++;
                }
            });
            if(matching === lookupIcons[tile.numberFrame].length) {
                tiles.forEach(function check(t){
                    if(!t.matched && t.revealed && t.number === tile.number) {
                        t.match();
                        t.presentWin();
                        audio.playSequential("match");
                    }
                });
                meterData.win += lookupPrizes[tile.numberFrame];
                lookupLabels[tile.numberFrame].forEach(function winText(l){
                    displayList[l].style = TextStyles.parse("legendWinG4");
                });
            }
        });
    }

    function setActive(active) {
        tiles.forEach(function(tile) {
            tile.active = active;
            if(!tile.revealed) {
                tile.resultContainer.scale.set(0.7);
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
        Object.keys(lookupLabels).forEach(function reset(r){
            lookupLabels[r].forEach(function resetText(rt) {
                displayList[rt].style = TextStyles.parse("legendG4");
            });
        });
        tiles.forEach(tile => {
            if(tile.numberFrame && lookupIcons[tile.numberFrame]) { //edge case - no blance on buying a ticket resets before population
                for (let objName of lookupIcons[tile.numberFrame]) {
                    displayList[objName].texture = PIXI.Texture.fromFrame("key" + tile.numberFrame);
                    displayList[objName].matched = false;
                }
            }
        });
    }

    function checkMatch() {
        //noop
    }
    msgBus.subscribe("Game.PlayerTileG4", checkMatch);


    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset
    };
});

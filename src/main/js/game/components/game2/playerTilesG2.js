define(require => {
    const PIXI = require("com/pixijs/pixi");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const PlayerTile = require("./PlayerTileG2");
    const CrosswordWord = require("skbJet/componentLondon/customIW/components/CrosswordWord");
    const audio = require("skbJet/componentManchester/standardIW/audio");

    const partStyles = require("game/template/particleStyles");

    let tiles;
    let words;
    let luckyLetters;
    let particleLayer;
    let revealedWords = 0;


    function init() {
        let x0 = 22;
        let y0 = 22;
        let xx = x0;
        let yy = y0;
        tiles = [];
        for(let i = 0; i < 121; i++) {
            tiles.push(PlayerTile.fromContainer(displayList.playerTilesG2, xx, yy));
            xx += 36;
            if(xx >= displayList.playerTilesG2._rect.width) {
                xx = x0;
                yy += 36;
            }
        }
        particleLayer = new PIXI.Container();
        particleLayer.name = "particleContainer";
        particleLayer.p0 = new PIXI.Container();
        particleLayer.p1 = new PIXI.Container();
        particleLayer.addChild(particleLayer.p0, particleLayer.p1);
        displayList.playerTilesG2.addChild(particleLayer);
    }

    function populate(scenario) {
        let letterData = scenario.playerTilesG2;
        let wordData = scenario.wordsG2;
        luckyLetters = scenario.luckyTilesG2.slice();
        words = [];
        wordData.forEach(function w(word) {
            let letters = [];
            word.forEach(function w(letter) {
                letters.push(tiles[letter]);
            });
            words.push(new CrosswordWord(letters));
        });

        for(let i = 0; i < letterData.length; i++) {
            tiles[i].populate(letterData[i]);
        }
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        // Only enable tiles that have a corresponding lucky letter
        return tiles.filter(tile => luckyLetters.includes(tile.letter)).map(async tile => {
            // Enable the tile and wait for it to be revealed (manually or automatically)
            await tile.enable();
            // Play the Winning Number reveal audio
            audio.playSequential("playerNumber");
            // Wait for the uncover animation
            await tile.scratch();
            msgBus.publish("Game.PlayerTileG2", tiles.indexOf(tile));

            //Check for completed words
            let finishedWords = words.filter(word => word.revealed);
            //remove finished words from the list
            words = words.filter(word => !word.revealed);

            if(finishedWords.length) {
                revealedWords += finishedWords.length;

                //If words are finished, merge their perimeters and spawn particles around the result
                let joinedSets = {};
				let finalSets = [];
				let perimeters = [];

				//First get a list of joined words for each finishedWord
				for(let i = 0; i < finishedWords.length; i++) {
					joinedSets[i] = [];
					for(let j = 0; j < finishedWords.length; j++) {
						if(i !== j && finishedWords[i].letters.some(elem => finishedWords[j].letters.includes(elem))) {
							joinedSets[i].push(j);
						}
					}
				}

				//If no other word joins a finishedWord, just add its perimeter
				for(let i = 0; i < finishedWords.length; i++) {
					if(joinedSets[i].length === 0) {
						perimeters.push(finishedWords[i].perimeter);
						delete joinedSets[i];
					}
				}

				//Next, merge sets that are joined together
				/* eslint-disable */
				function joined(ind) {
					let arr = [];
					if(joinedSets[ind] && joinedSets[ind].length) {
						arr = arr.concat(joinedSets[ind]);
						delete joinedSets[ind];
						arr.forEach(elem => arr = arr.concat(joined(elem)));
					}
					return arr;
				}
				/* eslint-enable */

				for(let i = 0; i < finishedWords.length; i++) {
					if(joinedSets[i] && joinedSets[i].length) {
						finalSets.push([...new Set(joined(i))]); //remove duplicates
					}
				}

				//finally, convert sets into perimeters and display
				finalSets.forEach(fSet => {
					let ff = fSet.pop();
					let perimeter = finishedWords[ff].perimeter;
					while(fSet.length > 0) {
						let fff = fSet.pop();
						perimeter = finishedWords[fff].merge(perimeter);
					}
					perimeters.push(perimeter);
				});
				while(perimeters.length) {
					await presentWin(perimeters.shift());
				}
            }
        });
    }

    function presentWin(points) {
        //Draw the particles around the merged points
        particleLayer.filters = [partStyles.filterAll];

        let style, p0, p1, emit;

        style = partStyles.player0G2;
        style.spawnSpline.controlPoints = points;
        emit = new PIXI.particles.Emitter(
            particleLayer.p0,
            "particle0",
            style
        );
        emit.spawnPos.set(0, 0);
        p0 = new Promise(resolve => emit.playOnceAndDestroy(resolve));

        style = partStyles.player0G2;
        style.spawnSpline.controlPoints = points;
        emit = new PIXI.particles.Emitter(
            particleLayer.p1,
            "particle1",
            style
        );
        emit.spawnPos.set(0, 0);
        p1 = new Promise(resolve => emit.playOnceAndDestroy(resolve));
        
        msgBus.publish("Game.WordsRevealed", revealedWords);
        
        return Promise.all([p0, p1]);
    }

    function setActive(active) {
        tiles.forEach(tile => {
            tile.active = active;
        });
    }
    
    function revealAll() {
        //reveal all remaining tiles simultaneously
        tiles.forEach(tile => {
            if(tile.unselected.interactive && !tile.revealed) {
                tile.reveal();
            }
        });
    }

    function reset() {
        tiles.forEach(tile => tile.reset());
        revealedWords = 0;
    }

    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset
    };
});

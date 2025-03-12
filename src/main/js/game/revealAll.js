define(function(require){
    require("com/gsap/TimelineLite");
    require("com/gsap/TweenMax");
    const revealState = require("game/state/revealState");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");

    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const resources = require("skbJet/component/resourceLoader/resourceLib");

    const playerTilesG1 = require("game/components/game1/playerTilesG1");
    const luckyTilesG1 = require("game/components/game1/luckyTilesG1");

    const playerTilesG2 = require("game/components/game2/playerTilesG2");
    const luckyTilesG2 = require("game/components/game2/luckyTilesG2");

    const playerTilesG3 = require("game/components/game3/playerTilesG3");

    const playerTilesG4 = require("game/components/game4/playerTilesG4");

    const autoPlay = require("skbJet/componentManchester/standardIW/autoPlay");

    let Tween = window.TweenMax;
    let Timeline = window.TimelineLite;

    let revealAllG1;
    let revealAllG2;
    let revealAllG3;
    let revealAllG4;
    let revealAllLookup = [];

    let nextReveal;
    let allRevealTweens = [];

	let stopping = false;
	let revealAllSequence;

    async function start() {
		console.log("starting revealAll");
		stopping = false; //track reveal start/stop state for clean cancelling

		//Test for landscape menu
		if(!isMobileOrTablet && revealState.gameIndex === 99) {
			msgBus.publish("Game.Change", {gameIndex: 0, transition: "fadeToGame"});
			await nextGame();
		}
		
		//create reveal timelines for each game
        revealAllG1 = function() {
            let luckyTilesG1Reveal = luckyTilesG1.revealAll();
            allRevealTweens = allRevealTweens.concat(luckyTilesG1Reveal);
            let playerTilesG1Reveal = playerTilesG1.revealAll();
            allRevealTweens = allRevealTweens.concat(playerTilesG1Reveal);
            return new Timeline({
                tweens: [
                    new Timeline({
                        tweens: luckyTilesG1Reveal,
                        stagger: resources.i18n.config.autoPlayTileRevealInterval
                    }),
                    new Timeline({
                        tweens: playerTilesG1Reveal,
                        stagger: resources.i18n.config.autoPlayTileRevealInterval
                    })
                ],
                align: "sequence",
                stagger: luckyTilesG1Reveal.length > 0 && playerTilesG1Reveal.length > 0 ? resources.i18n.config.autoPlayTileGroupRevealInterval : 0,
                paused: true
            });
        };

        revealAllG2 = function() {
            let luckyTilesG2Reveal = luckyTilesG2.revealAll();
            allRevealTweens = allRevealTweens.concat(luckyTilesG2Reveal);
            return new Timeline({
                tweens: [
                    new Timeline({
                        tweens: luckyTilesG2Reveal,
                        stagger: resources.i18n.config.autoPlayTileRevealInterval
                    }),
                    new Tween.delayedCall(luckyTilesG2Reveal.length > 0 ? resources.i18n.config.autoPlayTileGroupRevealInterval : 0, playerTilesG2.revealAll),
                    new Tween.delayedCall(2, () => {
                        //forcing a delay on the crossword
                    })
                ],
                align: "sequence",
                paused: true
            });
        };

        revealAllG3 = function() {
            let playerTilesG3Reveal = playerTilesG3.revealAll();
            allRevealTweens = allRevealTweens.concat(playerTilesG3Reveal);
            return new Timeline({
				tweens: playerTilesG3Reveal,
				stagger: resources.i18n.config.autoPlayTileRevealInterval,
				paused: true
			});
		};

        revealAllG4 = function() {
            let playerTilesG4Reveal = playerTilesG4.revealAll();
            allRevealTweens = allRevealTweens.concat(playerTilesG4Reveal);
            return new Timeline({
                tweens: [
                    new Timeline({
                        tweens: playerTilesG4Reveal,
                        stagger: resources.i18n.config.autoPlayTileRevealInterval
                    })
                ],
                paused: true
            });
        };

        //Plan reveal sequence
        revealAllSequence = [0, 1, 2, 3];
        if(revealState.gameIndex < revealAllSequence.length) {
            revealAllSequence = revealAllSequence.splice(revealState.gameIndex, revealAllSequence.length).concat(revealAllSequence);
        }
        revealAllLookup = [revealAllG1, revealAllG2, revealAllG3, revealAllG4];

        //Flip through each game, running the reveal sequence in turn
        while(revealAllSequence.length > 1 && autoPlay._enabled) {
            nextReveal = revealAllLookup[revealAllSequence.shift()]();
            nextReveal.eventCallback("onComplete", function oc(target) {
				//This is maybe overkill but we really don't want the tweens to continue if the game is stopping
                if(!stopping) {
					Tween.delayedCall(2, function ad(){
						if(!stopping) {
							if(!isMobileOrTablet) {
								msgBus.publish("Game.Change", {gameIndex: target, transition: "fadeToGame"});
							} else {
								msgBus.publish("Game.Change", {gameIndex: target, transition: "slideRight"});
							}
						}
					});
				}
            }, [revealAllSequence[0]]);
            nextReveal.play();
            await nextGame();
        }

        //Finish with the final reveal
        if(autoPlay._enabled) {
            nextReveal = revealAllLookup[revealAllSequence.shift()]();
            nextReveal.play();
        }
    }

    function nextGame() {
        return new Promise(resolve => {
            msgBus.subscribe("UI.GameReady", function ready(){
				resolve();
				msgBus.unsubscribe("UI.GameReady", ready);
			});
        });
    }

    function stop() {
        console.log("stopping revealAll");
		stopping = true; //Allows for late cancelling of the game change tween

        let current = nextReveal.getChildren().filter(elem => elem.isActive());

        //cycle through all child timelines and clear them, but leave running tweens to complete
        current.forEach(child => {
            if(child.clear) {
                child.clear();
                child.eventCallback("onComplete", null);
            }
        });

        //stop the main timeline moving on to the next game
        nextReveal.clear();
        nextReveal.eventCallback("onComplete", null);

        //Finally, check through all tweens and make sure they don't start if they are not already running
        let lastTweens = [];
        while(allRevealTweens.length) {
            let twn = allRevealTweens.pop();
            if(twn.isActive()) {
                lastTweens.push(twn);
            } else {
                twn.kill();
            }
        }
        console.log(lastTweens);
        lastTweens = [];
		msgBus.publish("UI.GameReady"); //Fire a gameReady signal to unstick any remaining promises
    }

    return {
        start,
        stop
    };
});

define(function(require) {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const textStyles = require("game/template/textStyles");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const resources = require("skbJet/component/resourceLoader/resourceLib");
    const app = require("skbJet/componentManchester/standardIW/app");
    const mainLayout = require("game/template/layout");
    const gameLayout = require("game/components/game2/layout");
    const layoutEngine = require("skbJet/componentManchester/standardIW/layout/engine");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const luckyTilesG2 = require("game/components/game2/luckyTilesG2");
    const playerTilesG2 = require("game/components/game2/playerTilesG2");
    const PIXI = require("com/pixijs/pixi");

    require("com/gsap/TweenLite");
    require("com/gsap/TimelineLite");

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;
    let index = 1;
    let enabled = false;
    let legendLookup = {
       3 : ["legendSubtitle0G2", "legendAmount0G2"],
       4 : ["legendSubtitle1G2", "legendAmount1G2"],
       5 : ["legendSubtitle2G2", "legendAmount2G2"],
       6 : ["legendSubtitle3G2", "legendAmount3G2"],
       7 : ["legendSubtitle4G2", "legendAmount4G2"],
       8 : ["legendSubtitle5G2", "legendAmount5G2"],
       9 : ["legendSubtitle6G2", "legendAmount6G2"],
       10 : ["legendSubtitle7G2", "legendAmount7G2"]
    };
    let nonWinStyle = [textStyles.legendSubG2, textStyles.legendAmG2];
    let winStyle = [textStyles.legendSubWinG2, textStyles.legendAmWinG2];

    return function game2Component(parts) {
        let slideTime = resources.i18n.config.gameSelectSlideTransitionInterval;
        let fadeTime = resources.i18n.config.gameSelectFadeTransitionInterval;
        let container = parts.game2;
        container.hitArea = new PIXI.Rectangle(parts.bgG2.x, parts.bgG2.y, parts.bgG2.width, parts.bgG2.height);

        // initial setup;
        container.alpha = 0;
        if(isMobileOrTablet) {
            container.x = app.renderer.width;
        }

        function restart() {
            Object.keys(legendLookup).forEach(key => {
                displayList[legendLookup[key][0]].style = nonWinStyle[0];
                displayList[legendLookup[key][1]].style = nonWinStyle[1];
            });

            Tween.to(container, 0.25, {alpha: 0});
            if(isMobileOrTablet) {
                container.x = app.renderer.width;
            }
        }

        function change(data) {
            data = data || {gameIndex: 0};
            enabled = (data.gameIndex === index);
            container.interactive = false;
            container.interactiveChildren = false;

            switch(data.transition) {
                case "slideLeft":
                    if (enabled) {
                        container.alpha = 1;
                        container.x = -app.renderer.width;
                        Tween.to(container, slideTime, {
                            x: 0, visible: 1, onComplete: () => {
                                msgBus.publish("UI.GameReady");
                                container.interactiveChildren = true;
                            }
                        });
                    } else if (container.x === 0) {
                        Tween.to(container, slideTime, {
                            x: app.renderer.width, visible: 0, onComplete: () => {
                                container.interactiveChildren = true;
                            }
                        });
                    }
                    break;
                case "slideRight":
                    if (enabled) {
                        container.alpha = 1;
                        container.x = app.renderer.width;
                        Tween.to(container, slideTime, {
                            x: 0, visible: 1, onComplete: () => {
                                msgBus.publish("UI.GameReady");
                                container.interactiveChildren = true;
                            }
                        });
                    } else if (container.x === 0) {
                        Tween.to(container, slideTime, {
                            x: -app.renderer.width, visible: 0, onComplete: () => {
                                container.interactiveChildren = true;
                            }
                        });
                    }
                    break;
                case "fadeToGame":
                    if (enabled) {
                        new Timeline()
                            .to(container, fadeTime, {alpha: 0, visible: 0})
                            .call(layoutEngine.update, [gameLayout._BASE_GAME, [mainLayout, gameLayout], !isMobileOrTablet ? "landscapeSelected" : "portrait"])
                            .to(container, fadeTime, {alpha: 1, visible: 1})
                            .call(() => {
                                msgBus.publish("UI.GameReady");
                                container.interactiveChildren = true;
                            });
                    } else {
                        Tween.to(container, fadeTime, {alpha: 0, visible: 0});
                    }
                    break;
                case "fadeToMenu":
                    new Timeline()
                        .to(container, fadeTime, {alpha: 0, visible: 0})
                        .call(layoutEngine.update, [gameLayout._BASE_GAME, [mainLayout, gameLayout], isMobileOrTablet ? "portrait" : "landscape"])
                        .to(container, fadeTime, {alpha: 1, visible: 1})
                        .call(() => {
                            msgBus.publish("UI.GameReady");
                            container.interactive = true;
                        });
                    break;
                default:
                    //Show current game without any transition
                    layoutEngine.update(gameLayout._BASE_GAME, [mainLayout, gameLayout], isMobileOrTablet ? "portrait" : "landscape");
                    if (isMobileOrTablet) {
                        container.interactiveChildren = true;
                    } else {
                        container.interactive = true;
                    }
                    container.alpha = 1;
                    container.visible = enabled;
            }
        }
        function setActive() {
            playerTilesG2.setActive(enabled);
            luckyTilesG2.setActive(enabled);
        }

        function updateLegend(revealedWords) {
            Object.keys(legendLookup).forEach(key => {
                if(key == revealedWords) {
                    displayList[legendLookup[key][0]].style = winStyle[0];
                    displayList[legendLookup[key][1]].style = winStyle[1];
                } else {
                    displayList[legendLookup[key][0]].style = nonWinStyle[0];
                    displayList[legendLookup[key][1]].style = nonWinStyle[1];
                }
            });
        }

        container.on("pointertap", (event) => {
            if(event.data.button !== 2) {
                msgBus.publish("Game.Change", {gameIndex: index, transition: "fadeToGame"});
            }
        });

        msgBus.subscribe("Game.WordsRevealed", updateLegend);
        msgBus.subscribe("Game.Finish", restart);
        msgBus.subscribe("Game.Change", change);
        msgBus.subscribe("UI.GameReady", setActive);

        return container;
    };
});

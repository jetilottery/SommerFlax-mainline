define(function(require) {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");

    require('com/gsap/TweenLite');
    require('com/gsap/TimelineLite');

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;

    return function bgComponent(parts) {

        // hide initially;
        parts.sea1.alpha = 0;
        parts.sea2.alpha = 0;

        let bgTimeline = new Timeline({paused: true})
            .to(parts.sea1, 0.5, {alpha: 1}, !isMobileOrTablet ? 0.5 : 0)
            .to(parts.sea2, 0.5, {alpha: 1}, !isMobileOrTablet ? 0.5 : 0);

        function play() {
            bgTimeline.play(0);
        }

        function restart() {
            Tween.to(parts.sommerBG, 0.25, {
                alpha: 0,
                onComplete: function() {
                    parts.sommerBG.alpha = 1;
                    parts.sea1.alpha = 0;
                    parts.sea2.alpha = 0;
                }
            });
        }

        function change(data) {
            switch(data.transition) {
                case "slideLeft":
                    if(data.gameIndex >= 2) {
                        //noop
                    }
                    break;
                case "slideRight":
                    if(data.gameIndex <= 1) {
                        //noop
                    }
                    break;
                default:
                    //do nothing
            }
        }

        msgBus.subscribe("Game.Intro", play);
        msgBus.subscribe("Game.Finish", restart);
        msgBus.subscribe("Game.Change", change);

        return parts.sommerBG;
    };
});

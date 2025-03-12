define(function(require) {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const app = require("skbJet/componentManchester/standardIW/app");
    require("com/gsap/TweenLite");

    let Tween = window.TweenLite;
    let swiping = false;
    let lastY;

    return function infoPage(parts) {
        if (document.addEventListener)
        {
            // IE9, Chrome, Safari, Opera
            document.addEventListener("mousewheel", mouseWheelHandler, false);
            // Firefox
            document.addEventListener("DOMMouseScroll", mouseWheelHandler, false);
        }
        // IE 6/7/8 (irrelevant, tbh).
        else
        {
            document.attachEvent("onmousewheel", mouseWheelHandler);
        }

        function mouseWheelHandler(e)
        {
            // cross-browser wheel delta
            e = window.event || e; // old IE support
            let diff = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) * 30;
            let barB = parts.scrollBar.getLocalBounds();
            let markB = parts.scrollPosition.getLocalBounds();

            parts.bgInfo.y = Math.max(Math.min(0, parts.bgInfo.y + diff), app.renderer.height - parts.bgInfo.height - (parts.infoBase.y * 2));
            parts.scrollPosition.y = Math.min((barB.height - markB.height) * (parts.bgInfo.y / (app.renderer.height - parts.bgInfo.height - (parts.infoBase.y * 2))), );
            return false;
        }


        // initial setup;
        parts.titleBar.alpha = 0;
        parts.titleBar.visible = 0;
        parts.scrollBar.alpha = 0;
        parts.scrollBar.visible = 0;
        parts.bgInfo.alpha = 0;
        parts.bgInfo.visible = 0;
        parts.bgInfo.interactive = false;
        parts.bgInfo.cursor = "normal";

        function beginSwipe(e) {
            swiping = true;
            lastY = e.data.global.y.valueOf();
            e.stopPropagation(); //try to avoid starting a scratch on the elements below
        }

        function endSwipe() {
            swiping = false;
            let barB = parts.scrollBar.getLocalBounds();
            let markB = parts.scrollPosition.getLocalBounds();

            parts.scrollPosition.y = Math.min((barB.height - markB.height) * (parts.bgInfo.y / (app.renderer.height - parts.bgInfo.height - (parts.infoBase.y * 2))), );
        }

        function doSwipe(e) {
            if(swiping) {
                let diff = e.data.global.y - lastY;
                let barB = parts.scrollBar.getLocalBounds();
                let markB = parts.scrollPosition.getLocalBounds();

                parts.bgInfo.y = Math.max(Math.min(0, parts.bgInfo.y + diff), app.renderer.height - parts.bgInfo.height - (parts.infoBase.y * 2));
                parts.scrollPosition.y = Math.min((barB.height - markB.height) * (parts.bgInfo.y / (app.renderer.height - parts.bgInfo.height - (parts.infoBase.y * 2))), );
                lastY = e.data.global.y.valueOf();
            }
        }

        function show() {
            parts.infoCloseButton.interactive = true;

            Tween.to(parts.titleBar, 0.5, {alpha: 1, visible: 1});
            Tween.to(parts.scrollBar, 0.5, {alpha: 1, visible: 1});
            Tween.to(parts.bgInfo, 0.5, {alpha: 1, visible: 1});

            parts.bgInfo.on("pointerdown", beginSwipe);
            parts.bgInfo.on("pointerup", endSwipe);
            parts.bgInfo.on("pointerupoutside", endSwipe);
            parts.bgInfo.on("pointermove", doSwipe);
            parts.bgInfo.interactive = true;

            //Scale and position page to avoid cropping the title and scroll bars.
            let mTop = Math.ceil(parseFloat(app.view.style.marginTop));
            let barH = parts.scrollBar.getLocalBounds().height;
            if(mTop < 0) {
                parts.infoBase.y = -mTop * (app.renderer.height / parseFloat(app.view.style.height));
                parts.scrollBar.scale.set(1, (barH - (2 * parts.infoBase.y)) / barH);
            }
        }

        function hide() {
            parts.infoCloseButton.interactive = false;

            Tween.to(parts.titleBar, 0.5, {alpha: 0, visible: 0});
            Tween.to(parts.scrollBar, 0.5, {alpha: 0, visible: 0});
            Tween.to(parts.bgInfo, 0.5, {alpha: 0, visible: 0});

            parts.bgInfo.off("pointerdown", beginSwipe);
            parts.bgInfo.off("pointerup", endSwipe);
            parts.bgInfo.off("pointerupoutside", endSwipe);
            parts.bgInfo.off("pointermove", doSwipe);
            parts.bgInfo.interactive = false;
            swiping = false;
        }

        parts.infoCloseButton.on("press", hide);

        msgBus.subscribe("UI.toggleHelp", () => {
            if(parts.bgInfo.visible) {
                hide();
            } else {
                show();
            }
        });

        return parts.infoBase;
    };
});
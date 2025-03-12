define(["skbJet/component/resourceLoader/resourceLib", "splash/splashLoadController"], function(
    resLib,
    splashLoadController
) {
    let progress = document.querySelector(".progress");
    let copyright = document.querySelector(".copyright");

    let bgSrc = "";

    function onMessage(msg) {
        if (msg.data && msg.data.loaded) {
            progress.textContent = msg.data.loaded + "%";
        }
    }

    function onResize() {
        let bgImg;
        if(window.innerWidth > window.innerHeight) {
            bgImg = resLib.splash.splashBG_landscape;
        } else {
            bgImg = resLib.splash.splashBG_portrait;
        }
        if (bgImg.src !== bgSrc) {
            bgSrc = bgImg.src;
            document.body.style.backgroundImage = "url(" + bgSrc + ")";
			document.body.style.backgroundSize = "100% auto";
        }
    }

    function onFileLoaded() {
        copyright.textContent = resLib.i18n.splash.splashScreen.footer.shortVersion;
        onResize();

        document.body.classList.add("loaded");

        window.addEventListener("message", onMessage, false);
    }

    function init() {
        splashLoadController.load(onFileLoaded);
    }

    init();
    return {};
});

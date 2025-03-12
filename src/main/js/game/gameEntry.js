define(function(require) {
    const PIXI = require("com/pixijs/pixi");
    PIXI.settings.MIPMAP_TEXTURES = false; //stops ugly border lines appearing on scaled/rotated images

    require("polyfill");
    const app = require("skbJet/componentManchester/standardIW/app");
    const layout = require("skbJet/componentManchester/standardIW/layout");
    const config = require('skbJet/componentManchester/standardIW/gameConfig');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
    const gameSize = require('skbJet/componentManchester/standardIW/gameSize');
    const gameFlow = require("skbJet/componentManchester/standardIW/gameFlow");
    const scenarioData = require("skbJet/componentManchester/standardIW/scenarioData");

    //const prizetableTransform = require('game/prizetableTransform');
    const scenarioTransform = require("game/scenarioTransform");
    
    const templateLayout = require('game/template/layout');
    const gameLayout = require('game/custom/layout');
    const templateConfig = require('game/template/config');
    const gameConfig = require('game/custom/config');
    const templateAudioMap = require('game/template/audioMap');
    const gameAudioMap = require('game/custom/audioMap');
    const templateTextStyles = require('game/template/textStyles');
    const gameTextStyles = require('game/custom/textStyles');
    const dimensions = require('game/template/dimensions');
    const windowSize = require('skbJet/component/deviceCompatibility/windowSize');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");

    // Require customIW component templates
    let buttonSet = require("skbJet/componentLondon/customIW/ui/buttonSet/template");
    let howToPlay = require("skbJet/componentLondon/customIW/ui/howToPlay/template");
    let errorPlaque = require("skbJet/componentLondon/customIW/ui/errorPlaque/template");
    let networkActivity = require("skbJet/componentLondon/customIW/ui/networkActivity/template");
    let IdleTimer = require("skbJet/componentLondon/customIW/idleTimer/IdleTimer");
    let scratchBrush = require("skbJet/componentLondon/customIW/scratchBrush/template");
    
    // Require all game specific components that need initializing
    let sommerBG = require("game/components/sommerBG/template");
    let intro = require("game/components/intro/template");
    let game1 = require("game/components/game1/template");
    let game2 = require("game/components/game2/template");
    let game3 = require("game/components/game3/template");
    let game4 = require("game/components/game4/template");
    let resultPlaques = require("game/components/resultPlaques/template");
    let infoPage = require("game/components/infoPage/template");

    // Require game side state handlers.
    require("game/ticketAcquired");
    require("game/startReveal");
    require("game/resultScreen");
    require("game/gameReset");
    require("game/error");

    
    // Register template configs and game overrides
    layout.register(templateLayout, gameLayout);
    audio.register(templateAudioMap, gameAudioMap);
    config.register(templateConfig, gameConfig);
    textStyles.register(templateTextStyles, gameTextStyles);
    
    // Set game size for portrait and landscape
    gameSize.set(dimensions);
	
	// We have some custom resize code that has to fire *after* the event listener in gameSize. The listener is added in gameInit to ensure this.
    function onResize() {
		let winW = windowSize.getDeviceWidth();
		let winH = windowSize.getDeviceHeight();
        if(winH > winW) {
            let ratio = window.innerWidth / app.renderer.width;
            let sH = Math.min(app.renderer.height * ratio, window.innerHeight + 190);

            app.view.style.height = String(sH) + "px";
            app.view.style.width = String(window.innerWidth) + "px";
            app.view.style.marginLeft = "0px";
            app.view.style.marginTop = String((window.innerHeight - sH) / 2) + "px";
        } else {
            app.view.style.width = String(window.innerWidth) + "px";
            app.view.style.height = String(window.innerHeight) + "px";
            app.view.style.marginTop = "0px";
            app.view.style.marginLeft = "0px";
        }
		//HACK: On the EM portal the game tries to downscale itself instead of leaving us to do it. Undo all its bad changes here.
        document.body.style.width = window.innerWidth + "px";
        document.body.style.height = window.innerHeight + "px";
        document.body.style.backgroundColor = "#000";
        document.body.style.overflow = "hidden";
		document.getElementById("game").style.transform = "";
    }

    function gameInit() {
        // Register a transform function that can be used to turn the scenario string into useable data
        scenarioData.registerTransform(scenarioTransform);

        // Init StandardIW UI templates
        howToPlay = howToPlay();
        errorPlaque = errorPlaque();
        buttonSet = buttonSet();
        networkActivity = networkActivity();
        if(!isMobileOrTablet) {
            networkActivity.children[0].y = 350; //Customise network spinner position.
        }

        // Initialise all game components
        scratchBrush = scratchBrush();
        sommerBG = sommerBG();
        intro = intro();
        game1 = game1();
        game2 = game2();
        game3 = game3();
        game4 = game4();
        resultPlaques = resultPlaques();
        infoPage = infoPage();

        let idleT = new IdleTimer();
        idleT.init();

        // Add everything to the stage
        window.app = app;
        // Add everything to the stage
        window.obj = {
            infoPage: infoPage,
            resultPlaques: resultPlaques,
            errorPlaque: errorPlaque,
            buttonSet: buttonSet,
            networkActivity: networkActivity,
            sommerBG: sommerBG,
            intro: intro,
            game1: game1,
            game2: game2,
            game3: game3,
            game4: game4,
            scratchBrush: scratchBrush
        };

        app.stage.addChild(
            layout.container,
            sommerBG,
            game1,
            game2,
            game3,
            game4,
            intro,
            buttonSet,
            scratchBrush,
            resultPlaques,
            infoPage,
            howToPlay,
            errorPlaque,
            networkActivity
        );

		window.addEventListener('resize', onResize);
        onResize();

        // Once everything is initialized continue to next state
        gameFlow.next();
    }
    
    gameFlow.handle(gameInit, "GAME_INIT");
});
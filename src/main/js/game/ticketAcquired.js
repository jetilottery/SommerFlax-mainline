define((require) => {
    const scenarioData = require('skbJet/componentManchester/standardIW/scenarioData');

   /* const scenarioData = {
        scenario: {
            luckyTilesG1: [22, 32, 12, 77],
            playerTilesG1: [
                [56, 100],
                [12, 1000],
                [78, 10000],
                [54, 100000],
                [22, 1000000],
                [21, 10000000],
                [87, 200],
                [38, 2000],
                [45, 20000],
                [66, 200000],
                [8,  2000000],
                [1,  20000000],
                [22, 300],
                [11, 3000],
                [55, 30000],
                [67, 300000],
                [49, 3000000],
                [99, 30000000],
                [12, 400],
                [2,  4000]
            ],
            luckyTilesG2: ["A", "E", "O", "P", "Q", "R", "C", "I", "Y", "T", "W", "H", "S", "M", "F", "V", "L", "B"],
            playerTilesG2: [
            //       0    1    2    3    4    5    6    7    8    9   10
            /!*0*!/   "K", "A", "R", "I", "E", "S", "-", "S", "A", "F", "T", //0
            /!*11*!/  "A", "-", "-", "N", "-", "M", "-", "K", "-", "A", "-", //11
            /!*22*!/  "N", "O", "E", "N", "-", "U", "T", "I", "-", "L", "-", //22
            /!*33*!/  "I", "-", "-", "E", "-", "K", "-", "-", "I", "D", "E", //33
            /!*44*!/  "N", "E", "O", "N", "S", "K", "I", "C", "T", "-", "-", //44
            /!*55*!/  "-", "G", "-", "F", "-", "A", "-", "-", "A", "-", "-", //55
            /!*66*!/  "-", "G", "-", "R", "-", "S", "O", "M", "M", "E", "R", //66
            /!*77*!/  "T", "-", "P", "Å", "Z", "-", "-", "-", "Ø", "-", "A", //77
            /!*88*!/  "O", "-", "E", "-", "-", "L", "Ø", "V", "E", "-", "S", //88
            /!*99*!/  "P", "Å", "S", "K", "E", "-", "-", "-", "Æ", "-", "K", //99
            /!*110*!/ "P", "R", "O", "-", "-", "B", "L", "O", "M", "S", "T"  //110
            ],
            wordsG2: [
                [0, 1, 2, 3, 4, 5],
                [7, 8, 9, 10],
                [22, 23, 24, 25],
                [27, 28, 29],
                [41, 42, 43],
                [44, 45, 46, 47, 48, 49, 50, 51, 52],
                [71, 72, 73, 74, 75, 76],
                [79, 80, 81],
                [93, 94, 95, 96],
                [99, 100, 101, 102, 103],
                [110, 111, 112],
                [115, 116, 117, 118, 119, 120],

                [0, 11, 22, 33, 44],
                [77, 88, 99, 110],
                [45, 55, 65],
                [100, 111],
                [3, 14, 25, 36, 47, 58, 69, 80],
                [5, 16, 27, 38, 49, 60, 71],
                [7, 18, 29],
                [41, 52, 63, 74, 85, 96, 107, 118],
                [9, 20, 31, 42],
                [79, 90, 101, 112],
                [76, 87, 98, 109, 120]
            ],
            playerTilesG3: [
                10000,
                100000,
                1000000,
                10000000,
                200,
                2000,
                10000,
                200000,
                10000
            ],
            playerTilesG4: [
                0,
                1,
                3,
                4,
                5,
                6,
                0,
                3,
                0,
                4,
                3,
                4,
                5,
                4,
                1,
                2,
                4,
                6,
                4,
                4
            ]
        }
    };*/

    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const gameFlow = require('skbJet/componentManchester/standardIW/gameFlow');
    const audio = require('skbJet/componentManchester/standardIW/audio');


    const luckyTilesG1 = require("game/components/game1/luckyTilesG1");
    const playerTilesG1 = require("game/components/game1/playerTilesG1");
    const luckyTilesG2 = require("game/components/game2/luckyTilesG2");
    const playerTilesG2 = require("game/components/game2/playerTilesG2");
    const playerTilesG3 = require("game/components/game3/playerTilesG3");
    const playerTilesG4 = require("game/components/game4/playerTilesG4");

    function ticketAcquired() {
        luckyTilesG1.populate(scenarioData.scenario.luckyTilesG1);
        playerTilesG1.populate(scenarioData.scenario.playerTilesG1);
        luckyTilesG2.populate(scenarioData.scenario.luckyTilesG2);
        playerTilesG2.populate(scenarioData.scenario);
        playerTilesG3.populate(scenarioData.scenario.playerTilesG3);
        playerTilesG4.populate(scenarioData.scenario.playerTilesG4);

        if (!audio.isPlaying('music')) {
            audio.fadeIn('music', 0.5, true);
        }
        
        msgBus.publish("Game.Intro");
    }
    
    gameFlow.handle(ticketAcquired, 'TICKET_ACQUIRED');
});

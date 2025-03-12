define((require) => {
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');

    return function scenarioTransform(scenarioString) {
		//scenarioString = "29,10,40,24;16:H,28:F,41:J,42:C,4:C,26:B,11:G,47:G,36:C,38:I,22:J,19:E,8:A,12:E,49:F,35:F,3:E,23:H,21:I,17:G|B-GAMMEL-M-R-R--A-UBÅTØREKLIPS-N-T-N-Y-R-SEN--S-TRO-P---HEST-VIRUSN-N-E-I-Å-TÆREN-USIKRER--O--J---GT--E--O-AKE-FINLAND--T:DTEILFMRUNÅVØPJGSA|BJBIGGIJA|AAIACGGADCGIGHCDAGHD    ";

        // split the string by games
        let gameStrings = scenarioString.split('|');

        // Game 1 - lucky numbers and number/prize pairs
        let game1Strings = gameStrings[0].split(';');
        const luckyTilesG1 = game1Strings[0].split(",").map(int => parseInt(int, 10));
        let game1PlayerPairs = game1Strings[1].split(",");
        const playerTilesG1 = game1PlayerPairs.map((pair) => {
            const [number, prize] = pair.split(":");
            return [parseInt(number, 10), prizeData.prizeTable[prize]];
        });

        // Game 2 - Crossword strings and lucky letters
        let [game2Crossword, game2lucky] = gameStrings[1].split(":");
        const luckyTilesG2 = game2lucky.split("");
        const playerTilesG2 = game2Crossword.split("");
        let wordsInd = [];
        let acrossWords = [];
        //get words from each 11-char row
        for(let i = 0; i < 11; i++) {
            let firstInd = i * 11;
            acrossWords = acrossWords.concat(game2Crossword.slice(firstInd, firstInd + 11).split("-").filter(elem => elem.length > 1));
        }
        acrossWords.forEach(elem => {
            let first = game2Crossword.indexOf(elem);
            let wInd = [];
            //test for 'words' that wrap around 2 rows
            for(let i = first; i < first + elem.length; i++) {
                wInd.push(i);
            }
            wordsInd.push(wInd);
        });
        for(let column = 0; column < 11; column++) {
            let indices = [];
            let colStr = playerTilesG2.filter((elem, index) => {
                    if ((index + column) % 11 === 0) {
                        indices.push(index);
                        return true;
                    }
                    return false;
                }).join("");
            let downWords = [];
            //get words from each 11-char column
            for(let i = 0; i < 11; i++) {
                let firstInd = i * 11;
                downWords = downWords.concat(colStr.slice(firstInd, firstInd + 11).split("-").filter(elem => elem.length > 1));
            }
            downWords.forEach(elem => {
                let first = colStr.indexOf(elem);
                let wInd = [];
                for(let i = first; i < first + elem.length; i++) {
                    wInd.push(indices[i]);
                }
                wordsInd.push(wInd);
            });
        }
        const wordsG2 = wordsInd;


        // Game 3 - prize values
        const playerTilesG3 = gameStrings[2].split("").map(prize => {return prizeData.prizeTable[prize];});

        // Game 4 - numbers
        let playerTilesG4 = gameStrings[3].split("");

        return {
            luckyTilesG1,
            playerTilesG1,
            luckyTilesG2,
            playerTilesG2,
            wordsG2,
            playerTilesG3,
            playerTilesG4
        };
    };
});

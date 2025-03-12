define(require => {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

    const _state = {
        luckyG1: [],
        playerG1: [],
        luckyG2:  [],
        playerG2: [],
        playerG3: [],
        playerG4: [],
        activeTiles: [],
        gameIndex: 0,
        scenario: null
    };

    function reset() {
        _state.luckyG1 = [];
        _state.playerG1 = [];
        _state.luckyG2 = [];
        _state.playerG2 = [];
        _state.playerG3 = [];
        _state.playerG4 = [];
        _state.activeTiles = [];
        _state.gameIndex = 0;
        _state.lastData = null;
    }

    function updateGameIndex(data) {
        _state.gameIndex = data.gameIndex;
    }

    function updateScenario(data) {
        _state.lastData = data;
    }

    msgBus.subscribe("jLottery.startUserInteraction", updateScenario);
    msgBus.subscribe("Game.LuckyTileG1", number => _state.luckyG1.push(number));
    msgBus.subscribe("Game.PlayerTileG1", number => _state.playerG1.push(number));
    msgBus.subscribe("Game.LuckyTileG2", number => _state.luckyG2.push(number));
    msgBus.subscribe("Game.PlayerTileG2", number => _state.playerG2.push(number));
    msgBus.subscribe("Game.PlayerTileG3", number => _state.playerG3.push(number));
    msgBus.subscribe("Game.PlayerTileG4", number => _state.playerG4.push(number));
    msgBus.subscribe("Game.TileActive", tile => {
        if(tile.active) {
            if(!_state.activeTiles.includes(tile)) {
                _state.activeTiles.push(tile);
            }
        } else if(_state.activeTiles.includes(tile)) {
            _state.activeTiles.splice(_state.activeTiles.indexOf(tile), 1);
        }
    });
    msgBus.subscribe("Game.Change", updateGameIndex);

    return {
        get luckyG1() {
            return _state.luckyG1;
        },
        get playerG1() {
            return _state.playerG1;
        },
        get luckyG2() {
            return _state.luckyG2;
        },
        get playerG2() {
            return _state.playerG2;
        },
        get playerG3() {
            return _state.playerG3;
        },
        get playerG4() {
            return _state.playerG4;
        },
        get gameIndex() {
            return _state.gameIndex;
        },
        get activeTiles() {
            return _state.activeTiles;
        },
        get lastData() {
            return _state.lastData;
        },
        reset
    };
});

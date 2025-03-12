define({
    // IMPLEMENT: Map SFX to channels

    /* 
     * If audio assets are named nicely you can do:
     * {
     *  fileName: channelNumber
     * }
     * 
     * Otherwise use a nice name for the keys and include the filename and channel as an array:
     * {
     *  soundName: ['Ugly_sound_file_V2-final', channelNumber]
     * }
     */

    music: ['ambience', 0],
    winTerminator: ['win', 1],
    loseTerminator: ['lose', 1],
    click: ['control', 4],
    instantWin: ['match', 2],
    costMax: ['UI Max Bet Reached 3', 3],

    /*
     * Audio groups
     * A game can include multiple letiations of each of these sounds. Ensure each letiation starts
     * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
     * item in the group will be used.
     */

    winningNumber: ['instantScratch', 3],
    // winningNumber_2: ['WinningNumberSelect2', 5],
    // winningNumber_3: ['WinningNumberSelect3', 6],
    playerNumber: ['instantScratch', 4],
    match: ['match', 1],

    /*
     * Optional audio
     * The following audio is optional and will be ignored if not included
     */

    buy: ['buy', 4],
    revealAll: ['scratchAll', 4],
});

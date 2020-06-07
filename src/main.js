// Game Configuration object

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
    //main game object
    let game = new Phaser.Game(config);

    var savedScore;
//define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000,
    highScore: 0
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;

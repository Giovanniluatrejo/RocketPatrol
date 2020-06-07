// Giovanni, Lua-Trejo
// Track High Score and Display (10)
// Copyright free background music (10) Made in Boscaceoil
// New scrolling tile sprite for background (10)
// Allow player to control Rocket after it is fired (10)
// New Sound effects (15)
// New Title Screen (15)
//New animated sprite for Spaceship enemies (15)
// New Artwork for all in game assets (25)
// Redesign artwork/UI/Sound/ for theme aesthetic (50)



// Game Configuration object

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
};
    //main game object
    let game = new Phaser.Game(config);

    
//define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000,
    highScore: 0
  
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;



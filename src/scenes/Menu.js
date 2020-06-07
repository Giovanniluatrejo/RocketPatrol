class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }


    preload() {
        //loads audio
        this.load.audio('sfx_select' , './assets/Hit3.wav');
        this.load.audio('sfx_explosion' , './assets/Hit2.wav');
        this.load.audio('sfx_rocket' , './assets/Hit.wav');
        this.load.image('title', './assets/title.png')
       
    }

    create() {
        // displays menu
        this.add.image(316, 242, 'title');

        // defining keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //highscore
        this.highScoreDisplay = this.add.text(centerX, centerY + textSpacer*3, "High Score:" + highScore, menuconfig).setOrigin(0.5);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000, 
                highScore: 0
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000,
                highScore: 0
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
    }
}
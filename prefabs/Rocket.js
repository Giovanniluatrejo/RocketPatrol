// Rocket prefab

class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // adds to the existing scene, display/update list
        this.sfxRocket = scene.sound.add('sfx_rocket'); // rocket sfx
        this.isFiring = false; // tracks firing status
    }

    update() {
        // movement left and right
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= 47) {
                this.x -=2;
            } else if (keyRIGHT.isDown && this.x <= 598) {
                this.x += 2;
            }
        }
   
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); // Sfx plays
        }
   
        // if fire, moves up
        if (this.isFiring && this.y >= 108) {
            this.y -=2;
            
            if (keyLEFT.isDown && this.x >= 48){
                this.x -=2;
            } else if (keyRIGHT.isDown && this.x <= 596) {
                this.x += 2;
            }
        }
        
        //resets on miss
        if (this.y <= 108) {
            this.reset();
        }
   
    }

        //reset rocket to inital place
        reset() {
            this.isFiring = false;
            this.y = 431;
        }
}
// Prefab for Spaceship

class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // adds exisitng scene display/update list
        this.points =  pointValue; // stores pointValue
    }

update() {
    // moves spaceship to left
    this.x -= game.settings.spaceshipSpeed;
    // wraparound from left to right edge
    if (this.x <= 0-this.width) {
        this.reset();
    }
}

reset() {
    this.x = game.config.width;
}
}
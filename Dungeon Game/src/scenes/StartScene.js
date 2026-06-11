export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('background', 'assets/castle.png');
        this.load.image('play', 'assets/play.png');
        this.load.audio('menuMusic', 'assets/menuMusic.mp3');
        this.load.spritesheet('player', 'assets/player.png', {
            frameWidth: 48,
            frameHeight: 48,
        });
        this.load.spritesheet('player1', 'assets/player1.png', {
            frameWidth: 48,
            frameHeight: 48,
        });
    }

    create() {
        //Fade-In Effekt
        this.cameras.main.fadeIn(1000,0,0,0)
        // Hintergrund
        this.add.image(640,360,'background').setDisplaySize(1280,720);

        // Play-Button
        const playButton = this.add.image(640,400,'play')  
            .setDisplaySize(314,127.2)
            .setInteractive();   // <-- WICHTIG!

        // Klick nur auf den Play-Button
        playButton.on('pointerup', () => {
            this.music.stop();
            this.scene.start('Game');
        });

        //Hover 
        playButton.on('pointerover', () => {
            playButton.setDisplaySize(392.5, 159)
        });

        //Normale Grösse
        playButton.on('pointerout', () => {
            playButton.setDisplaySize(314,127.2)
        });

        //Beim draufdrücken
        playButton.on('pointerdown', () => {
            playButton.setDisplaySize(261,106)
        });

        // Titel
        this.title = this.add.text(640, 200, 'DEPTHS OF RUIN', {
            fontFamily: 'bold',
            fontSize: '64px',
            color: 'cyan'
        }).setOrigin(0.5);

        this.music = this.sound.add('menuMusic', {loop: true, volume: 0.5});
        this.music.play();

        this.tweens.add({
            targets: playButton,
            y: 410,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.player = this.physics.add.sprite(400, 400, 'player').setDisplaySize(128,128);
        this.player1 = this.physics.add.sprite(875, 400, 'player1').setDisplaySize(128,128);
    }
}

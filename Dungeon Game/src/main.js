import { Start } from './scenes/StartScene.js';
import { Game } from './scenes/GameScene.js';


const config = {
    type: Phaser.AUTO,
    title: 'Overlord Rising',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        Start, Game
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'arcade',
        arcade:  {
            debug: false
        }
    }

    
}

new Phaser.Game(config);
            
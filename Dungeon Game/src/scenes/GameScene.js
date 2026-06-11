export class Game extends Phaser.Scene {

    constructor() {
        super('Game');
    }

    preload() {
        this.load.spritesheet('player', 'assets/player.png', {
            frameWidth: 48,
            frameHeight: 48,
        });

        this.load.spritesheet('run', 'assets/player_run.png', {
            frameWidth: 48,
            frameHeight: 48,
        });

        this.load.image('background_game', 'assets/background.png');
        this.load.image('ground', 'assets/floor.png');

        this.load.spritesheet('jump', 'assets/jump.png', {
            frameWidth:48,
            frameHeight:48
        });

        this.load.spritesheet('attack', 'assets/attack.png', {
            frameWidth:80,
            frameHeight:48
        });  

        this.load.spritesheet('slide', 'assets/slide.png', {
            frameWidth:48,
            frameHeight:48
        });

        this.load.spritesheet('shoot', 'assets/shoot.png', {
            frameWidth:48,
            frameHeight:48
        });

        this.load.spritesheet('katana', 'assets/katana_tuff.png', {
            frameWidth:80,
            frameHeight: 48
        });

        this.load.spritesheet('zombieIdle', 'assets/zombieIdle.png', {
            frameWidth:48,
            frameHeight: 48
        });

        this.load.spritesheet('zombieWalk', 'assets/zombieWalk.png', {
            frameWidth:48,
            frameHeight: 48
        });

        this.load.spritesheet('hurt', 'assets/hurt.png', {
            frameWidth:48,
            frameHeight: 48
        });

        this.load.spritesheet('death', 'assets/death.png', {
            frameWidth:48,
            frameHeight: 48
        });

        this.load.spritesheet('zombieHurt', 'assets/zombieHurt.png', {
            frameWidth:48,
            frameHeight: 48
        });

        this.load.spritesheet('zombieAttack', 'assets/zombieAttack.png', {
            frameWidth:48,
            frameHeight: 48
        });

        this.load.spritesheet('zombieDeath', 'assets/zombieDeath.png', {
            frameWidth:48,
            frameHeight: 48
        });
   
        this.load.image('door', 'assets/door.png');   
        this.load.image('sky', 'assets/sky.png');
        this.load.image('well', 'assets/well.png');
        this.load.image('tree', 'assets/tree.png');

        this.load.audio('gameMusic', 'assets/gameMusic.mp3');
        this.load.audio('walkingSound', 'assets/walking.mp3');
        this.load.audio('swordSound', 'assets/swordSound.mp3');
    }

    create() {
        if (!this.sound.get('gameMusic')) {
            this.music = this.sound.add('gameMusic', {loop: true, volume: 0.5});
            this.music.play();
        } else {
            this.music = this.sound.get('gameMusic');
        }

        this.add.image(640, 400, 'door').setDisplaySize(1280,790);
        this.add.image(1920,400, 'sky').setDisplaySize(1280,790);
        this.add.image(1600,550,'well');
        this.add.image(2200,400,'tree').setDisplaySize(468,555);

        // STATIC GROUND
        this.ground1 = this.physics.add.staticImage(90, 700, 'ground').setDisplaySize(191,121);
        this.ground1.refreshBody();
        this.ground1.body.setOffset(0,28);

        this.ground2 = this.physics.add.staticImage(280, 700, 'ground').setDisplaySize(191,121);
        this.ground2.refreshBody();
        this.ground2.body.setOffset(0,28);

        this.ground3 = this.physics.add.staticImage(470, 700, 'ground').setDisplaySize(191,121);
        this.ground3.refreshBody();
        this.ground3.body.setOffset(0,28);

        this.ground4 = this.physics.add.staticImage(660, 700, 'ground').setDisplaySize(191,121);
        this.ground4.refreshBody();
        this.ground4.body.setOffset(0,28);

        this.ground5 = this.physics.add.staticImage(850, 700, 'ground').setDisplaySize(191,121);
        this.ground5.refreshBody();
        this.ground5.body.setOffset(0,28);

        this.ground6 = this.physics.add.staticImage(1040, 700, 'ground').setDisplaySize(191,121);
        this.ground6.refreshBody();
        this.ground6.body.setOffset(0,28);

        this.ground7 = this.physics.add.staticImage(1230, 700, 'ground').setDisplaySize(191,121);
        this.ground7.refreshBody();
        this.ground7.body.setOffset(0,28);

        this.ground8 = this.physics.add.staticImage(1420, 700, 'ground').setDisplaySize(191,121);
        this.ground8.refreshBody();
        this.ground8.body.setOffset(0,28);

        this.ground9 = this.physics.add.staticImage(1610, 700, 'ground').setDisplaySize(191,121);
        this.ground9.refreshBody();
        this.ground9.body.setOffset(0,28);

        this.ground10 = this.physics.add.staticImage(1800, 700, 'ground').setDisplaySize(191,121);
        this.ground10.refreshBody();
        this.ground10.body.setOffset(0,28);

        this.ground11 = this.physics.add.staticImage(1990, 700, 'ground').setDisplaySize(191,121);
        this.ground11.refreshBody();
        this.ground11.body.setOffset(0,28);

        this.ground12 = this.physics.add.staticImage(2180, 700, 'ground').setDisplaySize(191,121);
        this.ground12.refreshBody();
        this.ground12.body.setOffset(0,28);

        this.ground13 = this.physics.add.staticImage(2370, 700, 'ground').setDisplaySize(191,121);
        this.ground13.refreshBody();
        this.ground13.body.setOffset(0,28);

        this.ground14 = this.physics.add.staticImage(2560, 700, 'ground').setDisplaySize(191,121);
        this.ground14.refreshBody();
        this.ground14.body.setOffset(0,28);

        // PLAYER
        this.player = this.physics.add.sprite(640, 600, 'player').setDisplaySize(128,128);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(800);
        this.playerHealth = 200;
        this.playerAlive = true;
        this.playerAttackcooldown = false;

        this.zombie = this.physics.add.sprite(1750, 550, 'zombieIdle').setDisplaySize(150,150);
        this.zombie.setCollideWorldBounds(true);
        this.zombie.body.setGravityY(800);
        this.zombie.body.setOffset(0,-5);
        this.zombieHealth = 50;
        this.zombieAlive = true;
        this.zombieAttacking = false;

        this.physics.add.collider(this.player, [
            this.ground1, this.ground2, this.ground3,
            this.ground4, this.ground5, this.ground6, this.ground7, this.ground8, this.ground9,
            this.ground10, this.ground11, this.ground12, this.ground13, this.ground14, 
        ]);

        this.physics.add.collider(this.zombie, [
            this.ground1, this.ground2, this.ground3,
            this.ground4, this.ground5, this.ground6, this.ground7, this.ground8, this.ground9,
            this.ground10, this.ground11, this.ground12, this.ground13, this.ground14, 
        ]);

        this.physics.world.setBounds(0, 0, 4000, 720);
        this.cameras.main.setBounds(0, 0, 4000, 720);
        this.cameras.main.startFollow(this.player);

        // INPUT
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('W,A,S,D,F,E,C,Q,R');
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.popupOpen = true;
        const popup = this.add.rectangle(640,360,600,300,0x000000,1);
        popup.setStrokeStyle(4,0xffffff);
        const popupText = this.add.text(400,250,"Welcome adventurer. Your goal is to capture flags, kill enemies and upgrade your charackter using coins which you can find in chests. Open chest with E, Attack with F, Slide with C, Shoot with Q, Ult with R, Climb with W", {
            fontSize: "24px",
            color: "cyan",
            wordWrap: {width: 500}
        });
        const closeBtn = this.add.text(590,460,"PRESS X", {
            fontSize: "26px",
            color: "white"
        }).setInteractive();
        const closePopup = () => {
            popup.destroy();
            popupText.destroy();
            closeBtn.destroy();
            this.popupOpen = false;
        };
        this.input.keyboard.on("keydown-X", closePopup);

        // ANIMATIONS
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            frames:this.anims.generateFrameNumbers('jump'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('attack'),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'slide',
            frames: this.anims.generateFrameNumbers('slide'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'shoot',
            frames: this.anims.generateFrameNumbers('shoot'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'katana',
            frames: this.anims.generateFrameNumbers('katana'),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
            key: 'zombieIdle',
            frames: this.anims.generateFrameNumbers('zombieIdle'),
            frameRate:10,
            repeat: -1
        });

        this.anims.create({
            key: 'zombieWalk',
            frames: this.anims.generateFrameNumbers('zombieWalk'),
            frameRate:10,
            repeat: -1
        });

        this.anims.create({
            key: 'hurt',
            frames: this.anims.generateFrameNumbers('hurt'),
            frameRate:10,
            repeat: 0
        });

        this.anims.create({
            key: 'death',
            frames: this.anims.generateFrameNumbers('death'),
            frameRate:10,
            repeat: 0
        });

        this.anims.create({
            key: 'zombieHurt',
            frames: this.anims.generateFrameNumbers('zombieHurt'),
            frameRate:10,
            repeat: 0
        });

        this.anims.create({
            key: 'zombieAttack',
            frames: this.anims.generateFrameNumbers('zombieAttack'),
            frameRate:10,
            repeat: 0
        });

        this.anims.create({
            key: 'zombieDeath',
            frames: this.anims.generateFrameNumbers('zombieDeath'),
            frameRate:10,
            repeat: 0
        });

        this.player.anims.play('idle');
        this.zombie.anims.play('zombieIdle');

        // SOUNDS
        this.walking = this.sound.add('walkingSound', {loop: true, volume: 0.5, rate: 1.5}); 
        this.sword = this.sound.add('swordSound', { volume: 0.5, rate: 0.7 });

        // KATANA CONTROL
        this.isKatana = false;

        this.player.on('animationcomplete', (anim) => {
            if (anim.key === 'katana') {
                this.isKatana = false;
                this.player.anims.play('idle');
            }
        });

        // ZOMBIE DAMAGE COOLDOWN
        this.zombieDamageCooldown = false;

        // ZOMBIE ATTACK OVERLAP
        this.physics.add.overlap(this.player, this.zombie, () => {
            if (!this.zombieAlive || !this.playerAlive) return;
            if (this.zombieDamageCooldown) return;

            this.zombieAttacking = true;
            this.zombie.setVelocityX(0);
            this.zombie.anims.play('zombieAttack', true);

            this.damagePlayer(10);

            this.zombieDamageCooldown = true;
            this.time.delayedCall(800, () => {
                this.zombieDamageCooldown = false;
            });
        });

        // Zombie Attack Animation fertig → wieder Idle
        this.zombie.on('animationcomplete', (anim) => {
            if (anim.key === 'zombieAttack') {
                this.zombieAttacking = false;
            }
        });

        //this.physics.world.createDebugGraphic();
    }

    update() {

        // Wenn Player tot ist → keine Eingaben / keine Animationswechsel mehr
        if (!this.playerAlive) {
            this.player.setVelocity(0,0);
            if (Phaser.Input.Keyboard.JustDown(this.keys.R)) {
                this.scene.restart();
            }
            return;
        }

        // ZOMBIE AI
        const zombieSpeed = 100;
        const chaseRange = 400;
        const stopDistance = 60;

        const distance = Phaser.Math.Distance.Between(
            this.player.x, this.player.y,
            this.zombie.x, this.zombie.y
        );

        if (this.zombieAlive && !this.zombieAttacking) {

            if (distance < chaseRange && distance > stopDistance) {

                if (this.player.x < this.zombie.x) {
                    this.zombie.setVelocityX(-zombieSpeed);
                    this.zombie.setFlipX(true);
                } else {
                    this.zombie.setVelocityX(zombieSpeed);
                    this.zombie.setFlipX(false);
                }

                if (!this.zombie.anims.isPlaying || this.zombie.anims.currentAnim.key !== 'zombieWalk') {
                    this.zombie.anims.play('zombieWalk', true);
                }

            } else {

                this.zombie.setVelocityX(0);

                if (!this.zombie.anims.isPlaying || this.zombie.anims.currentAnim.key !== 'zombieIdle') {
                    this.zombie.anims.play('zombieIdle', true);
                }
            }
        }

        // PLAYER MOVEMENT
        const speed = 400;
        let moving = false;
        let slide = false;

        if (this.isKatana) return;

        if (this.popupOpen) {
            this.player.setVelocityX(0);
            return;
        }

        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.player.setVelocityX(-speed);
            moving = true;
            this.player.setFlipX(true);
        }
        else if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.player.setVelocityX(speed);
            moving = true;
            this.player.setFlipX(false);
        }
        else {
            this.player.setVelocityX(0);
        }

        if (moving && this.player.body.onFloor()) {
            if (!this.walking.isPlaying) this.walking.play();
        } else {
            if (this.walking.isPlaying) this.walking.stop();
        }

        if (Phaser.Input.Keyboard.JustDown(this.space) && this.player.body.onFloor()) {
            this.player.setVelocityY(-speed);
        }

        if (this.keys.C.isDown && this.player.body.onFloor()) {
            slide = true;
            const slideSpeed = this.player.flipX ? -400 : 400;
            this.player.setVelocityX(slideSpeed);
        }

        if (Phaser.Input.Keyboard.JustDown(this.keys.R) && !this.isKatana) {
            this.isKatana = true;
            this.player.anims.play('katana', true);
            return;
        }

        // PLAYER ATTACK
        let attack = this.keys.F.isDown;
        let shoot = this.keys.Q.isDown;

        if (attack && !this.playerAttackcooldown) {
            this.playerAttackcooldown = true;
            if (!this.sword.isPlaying) {
                this.sword.play();
            }

            if (this.zombieAlive &&
                Phaser.Math.Distance.Between(this.player.x, this.player.y, this.zombie.x, this.zombie.y) < 80) {

                this.damageZombie(10);
            }

            this.time.delayedCall(300, () => {
                this.playerAttackcooldown = false;
            })
        }

        // PLAYER ANIMATIONS
        if (attack) {
            this.player.anims.play('attack', true);
        } 
        else if (!this.player.body.onFloor()) {
            this.player.anims.play('jump', true);
        } 
        else if (moving) {
            this.player.anims.play('run', true);
        } 
        else if (slide) {
            this.player.anims.play('slide', true);
        } 
        else if (shoot) {
            this.player.anims.play('shoot', true);
        }
        else {
            this.player.anims.play('idle', true);
        }
    }

    damagePlayer(amount) {
        if (!this.playerAlive) return;

        this.playerHealth -= amount;
        if (this.playerHealth < 0) this.playerHealth = 0;

        if (this.playerHealth > 0) {
            this.player.anims.play('hurt', true);
        }

        this.player.setTint(0xff0000);
        this.time.delayedCall(150, () => this.player.clearTint());

        if (this.playerHealth <= 0) {
            this.playerAlive = false;
            this.player.anims.stop();
            this.player.setVelocity(0, 0);
            this.player.anims.play('death', true);
            this.player.body.enable = false;
        }
    }

    damageZombie(amount) {
        if (!this.zombieAlive) return;

        this.zombieHealth -= amount;
        if (this.zombieHealth < 0) this.zombieHealth = 0;

        this.zombie.anims.play('zombieHurt', true);

        this.zombie.setTint(0xff0000);
        this.time.delayedCall(150, () => this.zombie.clearTint());

        if (this.zombieHealth <= 0) {
            this.zombieAlive = false;
            this.zombie.setVelocity(0, 0);
            this.zombie.anims.play('zombieDeath', true);

            this.zombie.on('animationcomplete', () => {
                this.zombie.destroy();
            });
        }
    }
}

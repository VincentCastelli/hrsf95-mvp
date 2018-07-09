const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update
  },
};

const game = new Phaser.Game(config);

let map;
let player;
let heart1;
let heart2;
let heart3;
let lilypads;
let cursors;
let speed;
let scoreText;

function preload() {
  this.load.image('levelOne', './assets/level_one.png');
  this.load.image('heart', './assets/heartcontainer.png');
  this.load.image('lilypad', './assets/lilypad.png');
  this.load.image('restart', './assets/restart.png');
  this.load.spritesheet('frog',
    './assets/frog_hop1-sheet.png',
    { frameWidth: 50, frameHeight: 50 });
}

function create() {
  this.add.sprite(0, 0, 'levelOne').setOrigin(0, 0);

  lilypads = this.physics.add.group({
    key: 'lilypad',
    repeat: 4,
    setXY: { x: 75, y: 20, stepX: 160 },
  });

  player = this.physics.add.sprite(400, 600, 'frog');
  heart1 = this.add.sprite(25, 580, 'heart');
  heart2 = this.add.sprite(60, 580, 'heart');
  heart3 = this.add.sprite(95, 580, 'heart');
  scoreText = this.add.text(650, 570, 'score: 0', { fontSize: '24px', fill: '#000' });

  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('frog', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: true,
  });

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('frog', { start: 4, end: 7 }),
    frameRate: 10,
    repeat: true,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('frog', { start: 8, end: 11 }),
    frameRate: 10,
    repeat: true,
  });

  cursors = this.input.keyboard.createCursorKeys();
  this.physics.add.overlap(player, lilypads, collectLily, null, this);
}

function update() {
  speed = 150;
  player.setVelocity(0, 0);

  if (cursors.left.isDown) {
    player.setVelocityX(-speed);
    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(speed);
    player.anims.play('right', true);
  } else {
    player.setVelocityX(0);
  } if (cursors.up.isDown) {
    player.setVelocityY(-speed);
    player.anims.play('up', true);
  } else {
    player.setVelocityY(0);
  }
}

const collectLily = (player, lilypads) => {
  lilypads.disableBody(true, true);
};

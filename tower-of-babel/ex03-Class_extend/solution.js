'use strict';

class Character {
  constructor(x, y) {
    this.x       = x;
    this.y       = y;
    thix.health_ = 100;
  }

  damage() {
    this.health_ = this.health_ - 10;
  }

  getHealth() {
    return this.health_;
  }

  toString() {
    return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
  }
}

class Player extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

const x         = process.argv[2];
const y         = process.argv[3];
const name      = process.argv[4];
const character = new Character(+x, +y);

character.damage();
console.log(character.toString());

const player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());

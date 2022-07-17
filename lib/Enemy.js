const Potion = require('./Potion');
const Character = require('./Character');

// creates Enemy object
class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
  this.weapon = weapon;
  this.potion = new Potion();
}

// // inherit prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype);

  // describes the enemy
  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}


module.exports = Enemy;
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable max-classes-per-file */
export class Character {
  constructor(name, type) {
    this.name = name,
    this.type = type,
    this.health = 100,
    this.level = 1,
    this.attack,
    this.defence;
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 25,
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 40,
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 10,
    this.defence = 40;
  }
}

export class Deamon extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 10,
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 25,
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 40,
    this.defence = 10;
  }
}

export class Team {
  constructor([...person]) {
    this.members = person;
  }

  [Symbol.iterator]() {
    let current;
    const obj = this.members;
    return {
      next() {
        current = current === undefined ? 0 : current + 1;
        return {
          done: current >= obj.length,
          value: obj[current],
        };
      },
    };
  }
}

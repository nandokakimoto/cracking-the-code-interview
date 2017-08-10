/* eslint-disable class-methods-use-this */

export class Animal {
  constructor(name) {
    this.name = name;
    this.order = 0;
  }

  isDog() {
    return false;
  }

  isCat() {
    return false;
  }
}

export class Dog extends Animal {
  isDog() {
    return true;
  }
}

export class Cat extends Animal {
  isCat() {
    return true;
  }
}

/* eslint-enable class-methods-use-this */


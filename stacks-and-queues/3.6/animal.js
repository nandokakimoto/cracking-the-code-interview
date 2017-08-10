export class Animal {
  constructor(name) {
    this.name = name;
  }

  isDog() {
    return false;
  }

  isCat() {
    return false;
  }
}

export class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  isDog() {
    return true;
  }
}

export class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  isCat() {
    return true;
  }
}

class Level {
  constructor(name, upLevel) {
    this.name = name;
    this.upLevel = upLevel || null;
  }

  equals(other) {
    if (other !== null && other.name === this.name) {
      return true;
    }

    return false;
  }
}

class Director extends Level {
  constructor() {
    super('director');
  }
}

class Manager extends Level {
  constructor() {
    super('manager', new Director());
  }
}

class Respondent extends Level {
  constructor() {
    super('respondent', new Manager());
  }
}

module.exports = {
  Respondent,
  Manager,
  Director,
};

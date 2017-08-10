class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  enqueue(animal) {
    this.animals.push(animal);
  }

  dequeueAny() {
    if (this.animals.length === 0) {
      throw new Error('There are no animals in the shelter.');
    }

    return this.removeAnimalFromList(0);
  }

  dequeueDog() {
    const dog = this.dequeueAnimal((animal) => animal.isDog());

    if (dog === undefined) {
      throw new Error('There are no dogs in the shelter');
    }

    return dog;
  }

  dequeueCat() {
    const cat = this.dequeueAnimal((animal) => animal.isCat());

    if (cat === undefined) {
      throw new Error('There are no cats in the shelter');
    }

    return cat;
  }

  dequeueAnimal(fn) {
    for (let i = 0; i < this.animals.length; i += 1) {
      if (fn.call(this, this.animals[i])) {
        return this.removeAnimalFromList(i);
      }
    }
  }

  removeAnimalFromList(i) {
    return this.animals.splice(i, 1)[0];
  }
}

export default AnimalShelter;

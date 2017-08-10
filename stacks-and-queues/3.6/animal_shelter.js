import Queue from '../lib/queue';

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.order = 0;
  }

  enqueue(animal) {
    if (animal.isCat()) {
      this.enqueueCat(animal);
    } else {
      this.enqueueDog(animal);
    }
  }

  enqueueDog(dog) {
    dog.order = this.order;
    this.order += 1;
    this.dogs.add(dog);
  }

  enqueueCat(cat) {
    cat.order = this.order;
    this.order += 1;
    this.cats.add(cat);
  }

  dequeueAny() {
    if (this.dogs.isEmpty() && this.cats.isEmpty()) {
      throw new Error('There are no animals in the shelter');
    }

    if (this.dogs.isEmpty()) {
      return this.dequeueCat();
    }

    if (this.cats.isEmpty()) {
      return this.dequeueDog();
    }

    const dog = this.dogs.peek();
    const cat = this.cats.peek();

    if (dog.order < cat.order) {
      return this.dequeueDog();
    }

    return this.dequeueCat();
  }

  dequeueDog() {
    if (this.dogs.isEmpty()) {
      throw new Error('There are no dogs in the shelter');
    }

    return this.dogs.remove();
  }

  dequeueCat() {
    if (this.cats.isEmpty()) {
      throw new Error('There are no cats in the shelter');
    }

    return this.cats.remove();;
  }

}

export default AnimalShelter;

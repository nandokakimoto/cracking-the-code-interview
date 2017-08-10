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

    queue.enqueue(animal);
  }

  enqueueDog(dog) {
    dog.order = this.order;
    this.order += 1;
    this.dogs.enqueue(dog);
  }

  enqueueCat(cat) {
    cat.order = this.order;
    this.order += 1;
    this.cats.enqueue(cat);
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
    if (this.dog.isEmpty()) {
      throw new Error('There are no dogs in the shelter');
    }

    return this.dogs.dequeue();
  }

  dequeueCat() {
    if (this.cats.isEmpty()) {
      throw new Error('There are no cats in the shelter');
    }

    return this.cats.dequeue();;
  }

}

export default AnimalShelter;

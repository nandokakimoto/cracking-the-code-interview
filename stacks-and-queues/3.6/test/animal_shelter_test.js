import assert from 'assert';
import AnimalShelter from '../animal_shelter';
import { Dog, Cat } from '../animal';

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
    shelter.enqueue(new Cat('Chloe'));
    shelter.enqueue(new Dog('Buddy'));
    shelter.enqueue(new Dog('Charlie'));
    shelter.enqueue(new Cat('Smokey'));
    shelter.enqueue(new Dog('Molly'));
    shelter.enqueue(new Cat('Kitty'));
  });

  describe('dequeueAny', () => {
    it('should return the oldest animal added', () => {
      assert.equal(shelter.dequeueAny().name, 'Chloe');
      assert.equal(shelter.dequeueAny().name, 'Buddy');
      assert.equal(shelter.dequeueAny().name, 'Charlie');
      assert.equal(shelter.dequeueAny().name, 'Smokey');
      assert.equal(shelter.dequeueAny().name, 'Molly');
      assert.equal(shelter.dequeueAny().name, 'Kitty');
      assert.throws(() => { shelter.dequeueAny(); }, /There are no animals/);
    });
  });

  describe('dequeueDog', () => {
    it('should return the oldest dog added', () => {
      assert.equal(shelter.dequeueDog().name, 'Buddy');
      assert.equal(shelter.dequeueDog().name, 'Charlie');
      assert.equal(shelter.dequeueDog().name, 'Molly');
      assert.throws(() => { shelter.dequeueDog(); }, /There are no dogs/);
    });
  });

  describe('dequeueCat', () => {
    it('should return the oldest cat added', () => {
      assert.equal(shelter.dequeueCat().name, 'Chloe');
      assert.equal(shelter.dequeueCat().name, 'Smokey');
      assert.equal(shelter.dequeueCat().name, 'Kitty');
      assert.throws(() => { shelter.dequeueCat(); }, /There are no cats/);
    });
  });
});

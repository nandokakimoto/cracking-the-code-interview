import assert from 'assert';
import SetOfStacks from '../set_of_stacks';

describe('Set of Stacks', () => {
  const limit = 3;
  let setOfStacks;

  function populate(totalStacks) {
    let counter = 1;
    for (let stack = 1; stack <= totalStacks; stack += 1) {
      for (let i = 0; i < limit; i += 1) {
        setOfStacks.push(counter++); // eslint-disable-line no-plusplus
      }
    }
  }

  beforeEach(() => {
    setOfStacks = new SetOfStacks(limit);
  });

  describe('push', () => {
    it('should add element to the same stack if not full', () => {
      const totalStacks = 1;
      populate(totalStacks);

      assert.equal(setOfStacks.stacksCount(), 1);
    });

    it('should add element to new stack if current is full', () => {
      const totalStacks = 3;
      populate(totalStacks);

      assert.equal(setOfStacks.stacksCount(), totalStacks);
    });
  });

  describe('pop', () => {
    it('should return element from the top of the current stack', () => {
      const totalStacks = 1;
      populate(totalStacks);

      assert.equal(setOfStacks.pop(), 3);
      assert.equal(setOfStacks.pop(), 2);
      assert.equal(setOfStacks.pop(), 1);
    });

    it('should return element from the top of the previous stack', () => {
      const totalStacks = 3;
      populate(totalStacks);

      assert.equal(setOfStacks.stacksCount(), 3);
      assert.equal(setOfStacks.pop(), 9);
      assert.equal(setOfStacks.pop(), 8);
      assert.equal(setOfStacks.pop(), 7);

      assert.equal(setOfStacks.stacksCount(), 2);
      assert.equal(setOfStacks.pop(), 6);
      assert.equal(setOfStacks.pop(), 5);
      assert.equal(setOfStacks.pop(), 4);

      assert.equal(setOfStacks.stacksCount(), 1);
      assert.equal(setOfStacks.pop(), 3);
      assert.equal(setOfStacks.pop(), 2);
      assert.equal(setOfStacks.pop(), 1);

      assert(setOfStacks.isEmpty());
    });

    it('should raise error if stack is empty', () => {
      setOfStacks.push(3);
      assert.equal(setOfStacks.pop(), 3);

      assert.throws(() => setOfStacks.pop(), /empty/);
    });
  });

  describe('popAt', () => {
    it('should pops element from a specific stack', () => {
      const totalStacks = 5;
      populate(totalStacks);

      assert.equal(setOfStacks.popAt(1), 3);
      assert.equal(setOfStacks.popAt(2), 6);
      assert.equal(setOfStacks.popAt(3), 9);
      assert.equal(setOfStacks.popAt(4), 12);
      assert.equal(setOfStacks.popAt(5), 15);
    });

    it('should throws error if specific stack is empty', () => {
      const totalStacks = 5;
      populate(totalStacks);

      assert.equal(setOfStacks.popAt(5), 15);
      assert.equal(setOfStacks.popAt(5), 14);
      assert.equal(setOfStacks.popAt(5), 13);
      assert.throws(() => setOfStacks.popAt(5), /does not exist/);
    });

    it('should move stacks if middle stack is empty', () => {
      const totalStacks = 5;
      populate(totalStacks);

      assert.equal(setOfStacks.popAt(2), 6);
      assert.equal(setOfStacks.popAt(2), 5);
      assert.equal(setOfStacks.popAt(2), 4);
      assert.equal(setOfStacks.popAt(2), 9);
    });
  });
});

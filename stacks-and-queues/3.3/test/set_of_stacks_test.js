import assert from 'assert';
import SetOfStacks from '../set_of_stacks';

describe('Set of Stacks', () => {
  const limit = 3;
  let setOfStacks;

  beforeEach(() => {
    setOfStacks = new SetOfStacks(limit);
  });

  describe('push', () => {
    it('should add element to the same stack if not full', () => {
      for (let i = 0; i < limit; i += 1) {
        setOfStacks.push(i);
      }

      assert.equal(setOfStacks.stacksCount(), 1);
    });

    it('should add element to new stack if current is full', () => {
      const totalStacks = 3;

      for (let stack = 1; stack <= totalStacks; stack += 1) {
        for (let i = 0; i < limit; i += 1) {
          setOfStacks.push(i);
        }
        assert.equal(setOfStacks.stacksCount(), stack);
      }
    });
  });

  describe('pop', () => {
    it('should return element from the top of the current stack', () => {

    });
    it('should return element from the top of the previous stack', () => {

    });
    it('should raise error if stack is empty', () => {

    });
  });

  describe('popAt', () => {
  });
});

import assert from 'assert';
import Stacks from '../solution';

describe('Three in One', () => {
  let stacks;

  beforeEach(() => {
    stacks = new Stacks(3, 5, 2);
  });

  describe('first stack', () => {
    it('should allow push and pop operations', () => {
      stacks.push(1, 5);
      stacks.push(1, 10);
      stacks.push(1, 15);

      assert(!stacks.isEmpty(1));
      assert.equal(15, stacks.pop(1));
      assert.equal(10, stacks.pop(1));
      assert.equal(5, stacks.pop(1));
    });

    it('should throw error if pushing above the stack limit', () => {
      stacks.push(1, 5);
      stacks.push(1, 10);
      stacks.push(1, 15);

      assert.throws(() => { stacks.push(1, 25); }, /Stack Overflow/);
    });

    it('should throw error if poping from empty stack', () => {
      stacks.push(1, 5);
      stacks.push(1, 10);

      stacks.pop(1);
      stacks.pop(1);
      assert.throws(() => { stacks.pop(1); }, /Empty Stack/);
    });
  });

  describe('second stack', () => {
    it('should allow push and pop operations', () => {
    });

    it('should throw error if pushing above the stack limit', () => {
    });

    it('should throw error if poping from empty stack', () => {
    });
  });

  describe('third stack', () => {
    it('should allow push and pop operations', () => {
    });

    it('should throw error if pushing above the stack limit', () => {
    });

    it('should throw error if poping from empty stack', () => {
    });
  });
});

import assert from 'assert';
import StackWithLimit, { StackOverflow } from '../stack_with_limit';

describe('Stack with limit', () => {
  describe('push', () => {
    it('adds elements to the stack until limit is not reached', () => {
      const limit = 3;
      const stack = new StackWithLimit(limit);

      stack.push(4);
      assert(4, stack.peek());

      stack.push(6);
      assert(6, stack.peek());

      stack.push(2);
      assert(2, stack.peek());

      assert.throws(() => {
        stack.push(8);
      }, StackOverflow);
    });
  });

  describe('isFull', () => {
    it('returns false until elements count is less then limit', () => {
      const limit = 3;
      const stack = new StackWithLimit(limit);

      assert(!stack.isFull());

      stack.push(4);
      assert(!stack.isFull());

      stack.push(6);
      assert(!stack.isFull());

      stack.push(2);
      assert(stack.isFull());
    });
  });
});

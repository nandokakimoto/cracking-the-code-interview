import assert from 'assert';
import StackMin from '../solution';

describe('Stack Min', () => {
  describe('min', () => {
    it('should throw error if stack is empty', () => {
      const stack = new StackMin();

      assert.throws(() => { stack.min(); }, /Empty Stack/);
    });

    it('should return minimun value after pushing items', () => {
      const stack = new StackMin();

      stack.push(5);
      stack.push(7);
      stack.push(3);
      stack.push(4);
      stack.push(2);
      stack.push(6);

      assert.equal(2, stack.min());
    });

    it('should return minimum value after poping items', () => {
      const stack = new StackMin();

      stack.push(5);
      stack.push(7);
      stack.push(3);
      stack.push(4);
      stack.push(2);
      stack.push(6);

      assert.equal(2, stack.min());

      stack.pop();

      assert.equal(2, stack.min());

      stack.pop();

      assert.equal(3, stack.min());

      stack.pop();

      assert.equal(3, stack.min());

      stack.pop();

      assert.equal(5, stack.min());

      stack.pop();

      assert.equal(5, stack.min());

      stack.pop();
      assert.throws(() => { stack.min(); }, /Empty Stack/);
    });
  });
});

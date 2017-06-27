import assert from 'assert';
import Stack from '../../lib/stack';

describe('Stack', () => {
  it('initialize a stack', () => {
    const stack = new Stack();
    assert(stack.isEmpty());
  });

  it('should push to stack', () => {
    const stack = new Stack();

    stack.push(10);

    assert(!stack.isEmpty());
    assert(10, stack.pop());
    assert(stack.isEmpty());
  });

  it('should follow LIFO rule', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(5);
    stack.push(15);

    assert(15, stack.pop());
    assert(5, stack.pop());
    assert(10, stack.pop());
    assert(stack.isEmpty());
  });

  it('should return the top', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(5);

    assert(5, stack.peek());
    assert(5, stack.peek());
  });
});

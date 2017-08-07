import assert from 'assert';
import Stack from '../../lib/stack';
import sortStack from '../solution';

describe('Sort Stack', () => {
  it('should sort stack with single element', () => {
    const stack = new Stack();
    stack.push(8);

    sortStack(stack);

    assert.equal(stack.pop(), 8);
    assert(stack.isEmpty());
  });

  it('should sorted stack with scrambled elements', () => {
    const stack = new Stack();
    stack.push(8);
    stack.push(4);
    stack.push(2);
    stack.push(6);
    stack.push(10);
    stack.push(1);

    sortStack(stack);

    assert.equal(stack.pop(), 1);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 4);
    assert.equal(stack.pop(), 6);
    assert.equal(stack.pop(), 8);
    assert.equal(stack.pop(), 10);
    assert(stack.isEmpty());
  });

  it('should sorted stack in inverse order elements', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(4);
    stack.push(6);
    stack.push(8);
    stack.push(10);

    sortStack(stack);

    assert.equal(stack.pop(), 1);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 4);
    assert.equal(stack.pop(), 6);
    assert.equal(stack.pop(), 8);
    assert.equal(stack.pop(), 10);
    assert(stack.isEmpty());
  });
});

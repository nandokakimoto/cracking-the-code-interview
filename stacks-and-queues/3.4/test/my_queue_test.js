import assert from 'assert';
import MyQueue from '../my_queue';

describe('My Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new MyQueue();
  });

  it('should initialize a queue', () => {
    assert(queue.isEmpty());
  });

  it('should add element to the queue', () => {
    queue.add(20);

    assert(!queue.isEmpty());
    assert.equal(20, queue.peek());
  });

  it('should return the first element', () => {
    queue.add(20);
    assert.equal(20, queue.peek());

    queue.add(10);
    assert.equal(20, queue.peek());

    queue.add(10);
    assert.equal(20, queue.peek());
  });

  it('should follow FIFO rule', () => {
    queue.add(20);
    queue.add(30);
    queue.add(10);

    assert(20, queue.remove());
    assert(30, queue.remove());
    assert(10, queue.remove());
  });

  it('should raise error if removing from empty queue', () => {
    queue.add(20);

    assert(20, queue.remove());
    assert(queue.isEmpty());
    assert.throws(() => { queue.remove(); }, /Empty queue/);
  });
});

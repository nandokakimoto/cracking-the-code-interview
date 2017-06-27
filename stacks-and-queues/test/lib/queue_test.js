import assert from 'assert';
import Queue from '../../lib/queue';

describe('Queue', () => {
  it('should initialize a queue', () => {
    const queue = new Queue();

    assert(queue.isEmpty());
  });

  it('should add element to the queue', () => {
    const queue = new Queue();

    queue.add(20);

    assert(!queue.isEmpty());
  });

  it('should return the first element', () => {
    const queue = new Queue();

    queue.add(20);

    assert.equal(20, queue.peek());
    assert(!queue.isEmpty());
  });

  it('should follow FIFO rule', () => {
    const queue = new Queue();

    queue.add(20);
    queue.add(30);
    queue.add(10);

    assert(20, queue.remove());
    assert(30, queue.remove());
    assert(10, queue.remove());
  });

  it('should raise error if removing from empty queue', () => {
    const queue = new Queue();

    queue.add(20);

    assert(20, queue.remove());
    assert.throws(() => { queue.remove(); }, /Empty queue/);
  });
});

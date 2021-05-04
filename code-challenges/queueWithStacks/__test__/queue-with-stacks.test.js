'use strict';

const Queue = require('../queue-with-stacks.js');

describe('PseudoQueue', () => {
  it('should successfully enqueue 1 element into a queue', () =>{
    let queue = new Queue();
    queue.enqueue(3);
    expect(queue.firstStack['0']).toEqual(3);
  });

  it('should successfully enqueue multiple elements into a queue', () =>{
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.firstStack['0']).toEqual(5);
    expect(queue.firstStack['2']).toEqual(4);
    expect(queue.firstStack.top).toEqual(3);
  });

  it('should successfully dequeue out of a queue the expected value', () =>{
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue()).toEqual(5);
  });

  it('should return FALSE if calling dequeue on empty queue', () =>{
    let queue = new Queue();

    expect(queue.dequeue()).toBe(false);
  });
});
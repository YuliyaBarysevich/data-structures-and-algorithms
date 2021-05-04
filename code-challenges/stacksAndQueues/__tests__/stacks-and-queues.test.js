'use strict';

const Stack = require('../lib/stack.js');
const Queue = require('../lib/queue.js');

describe('Stack', () => {
  it('should create a new stack', () => {
    let stack = new Stack();

    expect(stack.top).toEqual(0);
  });

  it('should successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top).toEqual(1);
  });

  it('should successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top).toEqual(3);
  });

  it('should successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();

    expect(stack.top).toEqual(2);
  });

  it('should successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toEqual(0);
    expect(stack.pop()).toEqual('Stack is empty');
  });

  it('should successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);

    stack.push(8);
    expect(stack.peek()).toEqual(8);
  });

  it('should raise exception if call pop or peek on empty stack', () => {
    let stack = new Stack();

    expect(stack.peek()).toEqual('Stack is empty');
    expect(stack.pop()).toEqual('Stack is empty');
  });

  it('should return TRUE if stack is empty', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return FALSE if stack is not empty', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('Queue', () => {

  it('should successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);

    expect(queue.front).toEqual(1);
  });

  it('should successfully enqueue into a queue', () => {
    let queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    console.log(queue)
    expect(queue.front).toEqual(3);
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    expect(queue.dequeue()).toEqual(5);
    // console.log(queue);
    expect(queue.front).toEqual(2);
  });

  it('should successfully  empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    // console.log(queue);
    expect(queue.front).toEqual(0);
  });

  it('should successfully  peek into a queue, seeing the expected value', () => {
    let queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    expect(queue.peek()).toEqual(5);
  });

  it('should successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.front).toEqual(0);
  });

  it('should raise exception if calling dequeue or peek on empty queue', () => {
    let queue = new Queue();

    expect(queue.peek()).toEqual('Queue is empty');
    expect(queue.dequeue()).toEqual('Queue is empty');
  });

  it('should return TRUE if queue is empty', () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return FALSE if queue is not empty', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(9);
    expect(queue.isEmpty()).toBe(false);
  });



});

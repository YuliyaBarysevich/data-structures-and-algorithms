# Implement a Queue using two Stacks

**RESOURCES:**

- [JavaScript Tutorial](https://www.javascripttutorial.net/)

## Stacks

A stack is a data structure that holds a list of elements. A stack works based on the LIFO principle i.e., Last In, First out, meaning that the most recently added element is the first one to remove.

A stack has two main operations that occur only at the top of the stack: push and pop. The push operation places an element at the top of stack whereas the pop operation removes an element from the top of the stack.

## Queues

A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue. A queue works based on the first-in, first-out (FIFO) principle.  

A queue has two main operations involving inserting a new element and removing an existing element.

The insertion operation is called enqueue, and the removal operation is called dequeue. The enqueue operation inserts an element at the end of the queue, whereas the dequeue operation removes an element from the front of a queue.  


## Challenge

1. Create a brand new `PseudoQueue` class.
    - This `PseudoQueue` class will implement standard queue interface, but will internally only `utilize 2 Stack objects`. 
2. Method `enqueue(value)` which `inserts` value into the PseudoQueue.
3. Methos `dequeue()` which extracts a value from the PseudoQueue.


## Tests

1. Can successfully enqueue 1 element into a queue
2. Can successfully enqueue multiple elements into a queue
3. Can successfully dequeue out of a queue the expected value
4. Should return FALSE if calling dequeue on empty queue
5. 
6. 
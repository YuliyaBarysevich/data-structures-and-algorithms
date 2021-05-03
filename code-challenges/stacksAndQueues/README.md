# Stacks and Queues

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

1. Stacks 
    - Create a `Stack` class that has a top property. 
    - Define a method called `push` which takes any value as an argument and `adds` a new node with that value to the `top` of the stack. 
    - Define a method called `pop` that does not take any argument, `removes` the node from the `top` of the stack, and returns the node’s value.
    - Define a method called `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
    - Define a method called `isEmpty` that takes no argument, and returns a boolean indicating whether or not the stack is empty.

2. Queues
    - Create a Queue class that has a front property. 
    - Define a method called `enqueue` which takes any value as an argument and `adds` a new node with that value to the `back` of the queue.
    - Define a method called `dequeue` that does not take any argument, `removes` the node from the `front` of the queue, and returns the node’s value.
    - Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
    - Define a method called `isEmpty` that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Testing

1. Can successfully push onto a stack
2. Can successfully push multiple values onto a stack
3. Can successfully pop off the stack
4. Can successfully empty a stack after multiple pops
5. Can successfully peek the next item on the stack
6. Can successfully instantiate an empty stack
7. Calling pop or peek on empty stack raises exception
8. Can successfully enqueue into a queue
9. Can successfully enqueue multiple values into a queue
10. Can successfully dequeue out of a queue the expected value
11. Can successfully peek into a queue, seeing the expected value
12. Can successfully empty a queue after multiple dequeues
13. Can successfully instantiate an empty queue
14. Calling dequeue or peek on empty queue raises exception
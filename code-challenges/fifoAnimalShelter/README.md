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

1. Create a class called `AnimalShelter` which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
2. Implement the following methods:
    - `enqueue(animal)`: adds animal to the shelter. animal can be either a dog or a cat object.
    - `dequeue(pref)`: returns either a dog or a cat. If pref is not "dog" or "cat" then return null.


## Tests

1. Can successfully successfully enqueue an animal into a shelter
2. Can successfully dequeue out of a queue the expected animal (dog or cat)
3. Should return NULL when calling dequeue if animal is not "dog" or "cat 
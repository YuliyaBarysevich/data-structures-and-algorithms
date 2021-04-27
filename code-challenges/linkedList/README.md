# Singly Linked List

A Linked List is a sequence of Nodes that are connected/linked to each other. The most defining feature of a Linked List is that each Node references the next Node in the link.

There are two types of Linked List - Singly and Doubly. We will be implementing a Singly Linked List in this implementation.


## Challenge 05


### Feature Tasks

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

2. Within LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

3. Define a method called `insert` which takes any value as an argument and adds a new node with that value to the `head` of the list with an O(1) Time performance.

4. Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

5. Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
`"{ a } -> { b } -> { c } -> NULL"`

### Tests

- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not exist
- Can properly return a collection of all the values that exist in the linked list


## Challenge 06

### Feature Tasks

1. `.append(value)` which adds a new node with the given `value` to the end of the list

2. `.insertBefore(value, newVal)` which add a new node with the given `newValue` immediately before the first `value` node

3. `.insertAfter(value, newVal)` which add a new node with the given `newValue` immediately after the first `value` node

### Tests

- Can successfully add a node to the end of the linked list
- Can successfully add multiple nodes to the end of a linked list
- Can successfully insert a node before a node located i the middle of a linked list
- Can successfully insert a node before the first node of a linked list
- Can successfully insert after a node in the middle of the linked list
- Can successfully insert a node after the last node of the linked list


## Challenge 07

### Feature Tasks

1. `kthFromEnd(k)` is a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. 


### Tests

- Where k is greater than the length of the linked list
- Where k and the length of the list are the same
- Where k is not a positive integer
- Where the linked list is of a size 1
- “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
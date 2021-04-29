# Zip two linked lists.

A Linked List is a sequence of Nodes that are connected/linked to each other. The most defining feature of a Linked List is that each Node references the next Node in the link.

There are two types of Linked List - Singly and Doubly. We will be implementing a Singly Linked List in this implementation.


## Challenge 08


### Feature Tasks

Create a function called `zipLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1).  

For example, if the first Linked List is `1->3->4->6->8` and second is `15->17->9->2->5`, we return a new Linked List `1->15->3->17->4->9->6->2->8->5`.

### Tests

- Can successfully zip two linked lists, which are the same length, together into one
- Can successfully zip two linked lists different sizes together into one

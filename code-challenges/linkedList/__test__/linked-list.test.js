'use strict';

const LL = require('../lib/linked-list');

describe('Linked List', () => {
  it('should create an empty List', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a node to the end of the linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    expect(list.head.value).toEqual(1);
    list.append(second);
    expect(list.head.value).toEqual(1);
  });

  it('should add multiple nodes to the end of a linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.append(first);
    list.append(second);
    list.append(third);
    expect(list.head.value).toEqual(1);
    expect(list.toString()).toEqual('{1} -> {2} -> {3} -> NULL');

  });

  it('should insert a node before the first node of a linked list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.insert(first);
    expect(list.head.value).toEqual(1);

    list.insert(second);
    expect(list.head.value).toEqual(2);
 

    console.log(list);
  });

  it('should check if list contains a value', () => {
    let list = new LL();
    let first = 1;
    let second = 3;
    let third = 5;

    list.append(first);
    list.append(second);
    list.append(third);


    expect(list.includes(3)).toBe(true);
    expect(list.includes(2)).toBe(false);

  });

  it('should return a string representing all the values in the Linked List', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.append(first);
    list.append(second);
    list.append(third);

    expect(list.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
    console.log(list.toString());

  });

  it('should insert a node before a node located in the middle of a linked list', () =>{
    let list = new LL();

    list.append(1);
    list.append(3);
    list.append(2);
    list.insertBefore(3, 5);
    expect(list.toString()).toEqual('{1} -> {5} -> {3} -> {2} -> NULL');

    console.log(list.toString());
  });



  // it('insert a node after the last node of the linked list', () => {
  //   let list = new LL();

  //   list.append(1);
  //   list.append(3);
  //   list.append(2);
  //   list.insertBefore(1, 5)

  //   expect(list.toString()).toEqual('{5} -> {1} -> {3} -> {2} -> NULL')
  //   console.log(list.toString())

  // })

  it('should insert after a node in the middle of the linked list', () =>{
    let list = new LL();

    list.append(1);
    list.append(3);
    list.append(2);
    list.insertAfter(3, 5);
    expect(list.toString()).toEqual('{1} -> {3} -> {5} -> {2} -> NULL');

    console.log(list.toString());
  });

  it('should insert a node after the last node of the linked list', () =>{
    let list = new LL();

    list.append(1);
    list.append(3);
    list.append(2);
    list.insertAfter(2, 5);
    expect(list.toString()).toEqual('{1} -> {3} -> {2} -> {5} -> NULL');

    console.log(list.toString());
  });

  it('should return FALSE if k is greater than the length of the linked list', () =>{
    let list = new LL();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    expect(list.kthFromEnd(8)).toBe(false);
  });

  it('should return FALSE if k and the length of the list are the same', () =>{
    let list = new LL();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    expect(list.kthFromEnd(4)).toBe(false);
  });

  it('should return FALSE if k is not a positive integer', () =>{
    let list = new LL();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    
    expect(list.kthFromEnd(-2)).toBe(false);
  });

  it('should return FALSE if  the linked list is of a size 1', () =>{
    let list = new LL();
    list.append(1);
    
    expect(list.kthFromEnd(1)).toBe(false);
  });

  it('Happy Path should return the node’s value that is k from the end of the linked list', () =>{
    let list = new LL();

    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    
    expect(list.kthFromEnd(2)).toEqual(3);
  });



});
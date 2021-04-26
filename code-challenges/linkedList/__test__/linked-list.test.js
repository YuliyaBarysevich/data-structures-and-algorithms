'use strict'

const LL = require('../lib/linked-list')

describe('Linked List', () => {
  it('should create an empty List', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a new node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    expect(list.head.value).toEqual(1);
    list.append(second);
    expect(list.head.value).toEqual(1);
  });

  it('should add a new node to the head of the list', () => {
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

    expect(list.includes(3)).toBe(true)
    expect(list.includes(2)).toBe(false)

  });

  it('should return a string representing all the values in the Linked List', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.append(first);
    list.append(second);
    list.append(third);

    expect(list.toString()).toEqual('{1} -> {2} -> {3} -> NULL')
    console.log(list.toString());

  });



})
'use strict';

const LL = require('../lib/ll-zip');

describe('Linked List', () => {
  it('should create an emptu List', () => {
    let list = new LL();
    expect(list.head).toEqual(null)
  });

  it('should add a node to the end of the linked list', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toEqual(1)
  })

  it('should return a string representing all the values in the Linked List', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toString()).toEqual('{1} -> {2} -> {3} -> NULL');
    expect(typeof list.toString()).toBe('string')
  })

  it('should zip the two linked lists together into one (the same length)', () => {
    let list = new LL();
    list.append(1);
    list.append(3);
    list.append(2);

    let list2 = new LL();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    let resultList = new LL();
    
    expect(resultList.zipLists(list, list2).toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> NULL')
  })

  it('should zip the two linked lists together into one (different length)', () => {
    let list = new LL();
    list.append(1);
    list.append(3);


    let list2 = new LL();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    let resultList = new LL();
    
    expect(resultList.zipLists(list, list2).toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {4} -> NULL')
  })

  it('should zip the two linked lists together into one (different length 2', () => {
    let list = new LL();
    list.append(1);
    list.append(3);
    list.append(2);

    let list2 = new LL();
    list2.append(5);
    list2.append(9);


    let resultList = new LL();
    
    expect(resultList.zipLists(list, list2).toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> NULL')
  })

})
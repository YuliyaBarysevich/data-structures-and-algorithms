'use strict';

const mergeSort = require('../merge-sort.js');

describe('Merge Sort Algorithm', () => {
  it('should sort array of numbers', () => {
    let array = [8,4,23,42,16,15];
    expect(mergeSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should sort reverse-sorted array of numbers', () => {
    let array = [20,18,12,8,5,-2];
    expect(mergeSort(array)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('should sort array of numbers with repeated values', () => {
    let array = [5,12,7,5,5,7];
    expect(mergeSort(array)).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('should sort nearly-sorted array of numbers', () => {
    let array = [2,3,5,7,13,11];
    expect(mergeSort(array)).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
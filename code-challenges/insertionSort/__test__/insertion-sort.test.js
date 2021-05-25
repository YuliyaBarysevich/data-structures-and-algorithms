'use strict';

const insertionSort = require('../insertion-sort.js');

describe('Insertion sort function', () => {
  it('should sort an array of numbers', () => {
    let arrayOfNums = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(arrayOfNums)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should sort reverse-sorted array of numbers', () => {
    let reverseArr = [20,18,12,8,5,-2];
    expect(insertionSort(reverseArr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should sort array with repeated numbers', () => {
    let notUniqueArr = [5,12,7,5,5,7];
    expect(insertionSort(notUniqueArr)).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('should sort nearly-sorted array', () => {
    let nearlySortedArr = [2,3,5,7,13,11];
    expect(insertionSort(nearlySortedArr)).toEqual([2,3,5,7,11,13]);
  });
});

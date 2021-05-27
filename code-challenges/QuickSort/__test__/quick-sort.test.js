'use strict'

const quickSort = require('../quick-sort.js')

describe('Quick Sort algorithm', () => {
  it('should sort an array of random numbers', () => {
    let arr = [8,4,23,42,16,15];
    expect(quickSort(arr, 0, arr.length-1)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('should sort reverse-sorted array of numbers', () => {
    let arr = [20,18,12,8,5,-2];
    expect(quickSort(arr, 0, arr.length-1)).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('should sort array of numbers with repeated values', () => {
    let arr = [12,7,5,5,7];
    expect(quickSort(arr, 0, arr.length-1)).toEqual([5, 5, 7, 7, 12]);
  });

  it('should sort nearly-sorted array of numbers', () => {
    let arr = [2,3,5,7,13,11];
    expect(quickSort(arr, 0, arr.length-1)).toEqual([2, 3, 5, 7, 11, 13]);
  });
})
'use strict'

const binarySearch = (sortedArr, searchKey) => {
  
  let indexOfSearchKey;
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end){
    let middleIndex = Math.floor((start+end)/2);

    if(sortedArr.[middleIndex] === searchKey){
      indexOfSearchKey = middleIndex;
      break;
    }else if (sortedArr[middleIndex] < searchKey){
      start = middleIndex + 1;
    } else {
      end = middleIndex - 1;
    }
    indexOfSearchKey = -1;
  }

  return indexOfSearchKey;
}

describe('Testing binary search', () => {
  test('It should return the index of the array’s element that is equal to the search key', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2)
  })
  test('It should return -1 if the element does not exist in the array', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1)
  })
  test('It should return -1 if the element does not exist in the array', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1)
  })
})
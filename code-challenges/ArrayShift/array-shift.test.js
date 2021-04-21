'use strict'

const insertShiftArray = (array, number) => {
  array[array.length] = number;
  let middleNumber;
  let middleIndex;

  for(let i = 0; i < array.length; i++){
    if(array[i] > number){
      middleNumber = array[i];
      break;
    }
  }

  for(let index in array){
    if(array[index] === middleNumber){
      middleIndex = index;
    }
  }

  for (let i = array.length - 1; i >= middleIndex; i--){
    array[i] = array[i - 1]; 
  }; 
  
  array[middleIndex] = number; 

  return array;
};


describe('Testing challenge', () => {
  test('It should add a new value at the middle index', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([2,4,6,8], 5).length).toStrictEqual(5);
  });
  test('It should add a new value at the middle index', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
    expect(insertShiftArray([4,8,15,23,42], 16).length).toStrictEqual(6);
  });
});
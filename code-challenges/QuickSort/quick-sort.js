'use strict';



function quickSort(array, left, right) {
  // left - the index of the first element 
  // right - the index of the last element which would be
  left = left || 0;
  right = right || array.length - 1;

  let position = partition(array, left, right);

  if (left < position - 1) {
    quickSort(array, left, position - 1);
  }

  if (right > position) {
    quickSort(array, position, right);
  }

  return array;

}

function partition (array, left, right) {
  let pivot = Math.floor((left + right) / 2);
  console.log(pivot)

  // keep moving all the items smaller than the pivot value to the left and larger than pivot value to the right.

  while (left < right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

// helper function to swap values of the array
function swap(array, i, low) {
  var temp = array[i];
  array[i] = array[low];
  array[low] = temp;
}

module.exports = quickSort;
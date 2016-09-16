/*
  Prompts: Given a sorted array of integers, find the index of a target value using a binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array.

0: Index of target or -1
I: Array , target value
C: O(log n)
E:

// [5], 4 => -1
// [ 11, 12, 13, 14, 15 ], 11 => 0
// [ 11, 12, 13, 14, 15 ], 12 => 1
// [ 11, 12, 13, 14, 15 ], 16 => -1

*/

const binarySearchArray = ((array, target) => {
  let start = 0;
  let end = array.length-1;
  let mid;

  while (end >= start) {
    mid = Math.floor((start + end) / 2);
    if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
});

module.exports = { binarySearchArray };

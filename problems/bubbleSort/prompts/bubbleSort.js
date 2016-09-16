/*
  Prompt: Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

O: Array => ordered
I: Array => unordered
C: Linear O(n)
E:
// [20, -10, -10, 2, 4, 299]
// [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36]

*/

const bubbleSort = (arr) => {
  let sorted = true;
  let temp;

  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      sorted = false;
    }
  }
  return sorted ? arr : bubbleSort(arr);
};

module.exports = { bubbleSort };

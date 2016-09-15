/*
  Prompt: Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

  O: Number of array levels that is non empty
  I: Nested arrays
  C: None
  E:
  // [ [ 5 ], [ [ ] ] ] => 2
  // [ 10, 20, 30, 40 ] => 1
  // [[10,20], [[30,[40]]]] => 4
  // [] => 0
  // [[[]]] => 0
*/

const arrayception = (array) => {
  let levels = 0;

  var subroutine = ((arr, depth) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && arr[i].length) {
        subroutine(arr[i], depth + 1);
      } else if (!Array.isArray(arr[i])) {
        levels = Math.max(levels, depth + 1);
      }
    }
  });
  subroutine(array, 0);
  return levels;
};

module.exports = { arrayception };

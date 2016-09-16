/*
  Prompt: Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

  O: First item that occurs even number of times
  I: array
  C: none
  E:
*/

const evenOccurrence = (arr) => {
  let occurrences = arr.reduce((accum, curr) => {
    accum[curr] = accum[curr] + 1 || 1;
    return accum;
  }, {});

  for (var i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
};

module.exports = { evenOccurrence };

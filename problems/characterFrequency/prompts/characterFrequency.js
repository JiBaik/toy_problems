/*
  Prompt:
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

O: Nested Array => listed alphabetically and by occurrence
I: String
C: none
E:
//
//
//
*/

const characterFrequency = (str) => {
  let res = [];
  let occurrences = str.split('').reduce((accum, curr) =>  {
    accum[curr] = accum[curr] + 1 || 1;
    return accum;
  }, {});

  for (let key in occurrences) {
    res.push([key, occurrences[key]]);
  }

  return res.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
    return b[1] - a[1];
  })
};

module.exports = { characterFrequency };

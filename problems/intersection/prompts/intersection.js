/*
  Prompt: Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

O: String => all intersecting characters
I: 2 Strings
C: none
E:
//
//
*/

const intersection = (str1, str2) => {
  let res = '';
  let refStr2 = str2.split('').reduce((accum, curr) => {
    if (curr !== " ") {
      accum[curr] = true;
    }
    return accum;
  }, {});

  for (var i = 0; i < str1.length; i++) {
    if (refStr2[str1[i]]) {
      res += str1[i];
      refStr2[str1[i]] = false;
    }
  }
  return res;
};

module.exports = { intersection };

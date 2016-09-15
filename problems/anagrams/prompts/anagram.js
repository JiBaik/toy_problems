/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.

O: An array of anagrams
I: String
C: Linear O(n)
E:
// "abc" => [ "abc", "acb", "bac", "bca", "cab", "cba" ];
*/

const allAnagrams = (str) => {
  let res = [];

  var subroutine = ((curr, remain) => {
    if (remain === '') {
      if (res.indexOf(curr) < 0) {
        res.push(curr);
      }
      return;
    }

    for (var i = 0; i < remain.length; i++) {
      subroutine(curr + remain[i], remain.slice(0,i) + remain.slice(i+1));
    }
  });
  subroutine('', str);
  return res;
}

module.exports = { allAnagrams };

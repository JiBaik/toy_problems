'use strict';

[
  './fibonacci/tests/iFib.test.js',
  './fibonacci/tests/rFib.test.js',
  './anagrams/tests/anagram.test.js'
].forEach(function(test) {
  require(test);
});
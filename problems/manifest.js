'use strict';

[
  './fibonacci/tests/iFib.test.js',
  './fibonacci/tests/rFib.test.js',
  './anagrams/tests/anagram.test.js',
  './arrayception/tests/arrayception.test.js',
  './asyncMap/tests/asyncMap.test.js',
  './balancedBrackets/tests/balancedBrackets.test.js',
  './bubbleSort/tests/bubbleSort.test.js'
].forEach(function(test) {
  require(test);
});
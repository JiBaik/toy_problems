'use strict';

const solution = require('../prompts/anagram.js');
const expect = require('chai').expect;

describe('All Anagrams Algorithm', () => {
  describe('allAnagrams', () => {
    it('should exist and be a function', () => {
      expect(solution.allAnagrams).to.exist;
      expect(solution.allAnagrams).to.be.a('function');
    });

    it('should return an array', () => {
      const res = solution.allAnagrams('hi');
      expect(res).to.be.an('array');
    });

    it('should return all the combinations of anagrams', () => {
      const res = solution.allAnagrams('abc');
      expect(res).eql([ "abc", "acb", "bac", "bca", "cab", "cba" ]);
    });
  });
});

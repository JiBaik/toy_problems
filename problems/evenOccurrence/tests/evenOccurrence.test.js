'use strict';

const solution = require('../prompts/evenOccurrence.js');
const expect = require('chai').expect;

describe('EvenOccurrence Toy Problem', () => {
  describe('evenOccurrence', () => {
    it('should exist and be a function', () => {
      expect(solution.evenOccurrence).to.exist;
      expect(solution.evenOccurrence).to.be.a('function');
    });

    it('should return first value that occurs even number of times', () => {
      expect(solution.evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ])).to.be.equal(2);
      expect(solution.evenOccurrence([ "cat", "dog", "dig", "cat" ])).to.be.equal("cat");
    });

    it('should return null if nothing occurs even number of times', () => {
      expect(solution.evenOccurrence([ 1, 3, 2, 4, 5 ])).to.be.equal(null);
      expect(solution.evenOccurrence([ "cat", "dog", "dig" ])).to.be.equal(null);
    });
  })
})

'use strict';

const solution = require('../prompts/insertionSort.js');
const expect = require('chai').expect;

describe('InsertionSort Toy Problem', () => {
  describe('insertionSort', () => {
    it('should exist and be a function', () => {
      expect(solution.insertionSort).to.exist;
      expect(solution.insertionSort).to.be.a('function');
    });

    it('should return an ordered array', () => {
      expect(solution.insertionSort([20, -10, 2, 4])).eql([-10, 2, 4, 20]);
      expect(solution.insertionSort([18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29])).eql([18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36]);
    });
  })
})

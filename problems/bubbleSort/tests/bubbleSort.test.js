'use strict';

const solution = require('../prompts/bubbleSort.js');
const expect = require('chai').expect;

describe('BubbleSort Toy Problem', () => {
  describe('bubbleSort', () => {
    it('should exist and be a function', () => {
      expect(solution.bubbleSort).to.exist;
      expect(solution.bubbleSort).to.be.a('function');
    });

    it('should return an ordered array', () => {
      expect(solution.bubbleSort([20, -10, -10, 2, 4, 299])).eql([-10, -10, 2, 4, 20, 299]);
      expect(solution.bubbleSort([18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36])).eql([18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40]);
    });
  })
})

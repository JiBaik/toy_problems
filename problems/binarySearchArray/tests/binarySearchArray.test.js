'use strict';

const solution = require('../prompts/binarySearchArray.js');
const expect = require('chai').expect;

describe('BinarySearchArray Toy Problem', () => {
  describe('binarySearchArray', () => {
    it('should exist and be a function', () => {
      expect(solution.binarySearchArray).to.exist;
      expect(solution.binarySearchArray).to.be.a('function');
    });

    it('should return the index', () => {
      expect(solution.binarySearchArray([ 11, 12, 13, 14, 15 ], 12)).to.be.equal(1);
      expect(solution.binarySearchArray([ 11, 12, 13, 14, 15 ], 13)).to.be.equal(2);
      expect(solution.binarySearchArray([ 11, 12, 13, 14, 15 ], 14)).to.be.equal(3);
    });

    it('should return -1 if target doesn\'t exist', () => {
      expect(solution.binarySearchArray([ 11, 12, 13, 14, 15 ], 9)).to.be.equal(-1);
      expect(solution.binarySearchArray([ 11, 12, 13, 14, 15 ], 44)).to.be.equal(-1);
    });
  })
})

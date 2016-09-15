'use strict';

const solution = require('../prompts/rFib.js')
const should = require('chai').should();
const expect = require('chai').expect;
const assert = require ('chai').assert;

describe('Recursive Fibonacci Sequence', () => {
  describe('rFib', () => {
    it('should exist', () => {
      expect(solution.rFib).to.exist;
    });

    it('should be a function', () => {
      expect(solution.rFib).to.be.a('function');
    });

    it('should return integers', () => {
      const result = solution.rFib(0);
      expect(result).to.exist;
      expect(result).to.be.a('number');
    });

    it('should handle the base cases with ease', () => {
      expect(solution.rFib(0)).to.be.equal(0);
      expect(solution.rFib(1)).to.be.equal(1);
    });

    it('should return the nth Fibonacci number for a given n', () => {
      expect(solution.rFib(5)).to.be.equal(5);
      expect(solution.rFib(10)).to.be.equal(55);
      expect(solution.rFib(20)).to.be.equal(6765);
    });
  });
});
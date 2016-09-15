'use strict';

const solution = require('../prompts/iFib.js')
const should = require('chai').should();
const expect = require('chai').expect;
const assert = require ('chai').assert;

describe('Iterative Fibonacci Sequence', () => {
  describe('iFib', () => {
    it('should exist', () => {
      expect(solution.iFib).to.exist;
    });

    it('should be a function', () => {
      expect(solution.iFib).to.be.a('function');
    });

    it('should return integers', () => {
      const result = solution.iFib(0);
      expect(result).to.exist;
      expect(result).to.be.a('number');
    });

    it('should handle the base cases with ease', () => {
      expect(solution.iFib(0)).to.be.equal(0);
      expect(solution.iFib(1)).to.be.equal(1);
    });

    it('should return the nth Fibonacci number for a given n', () => {
      expect(solution.iFib(5)).to.be.equal(5);
      expect(solution.iFib(10)).to.be.equal(55);
      expect(solution.iFib(20)).to.be.equal(6765);
    });

    it('should produce values in linear time', () => {
      // all this crazyness does it check if your solution is better than
      // the naive, exponential solution.
      let diffs = [],
        start = 0,
        end = 0,
        i = 0,
        max_diff = 100,
        max_dur = 1000,
        init = new Date;

      while( end - start < max_diff && end - init < max_dur){
        start = new Date();
        solution.iFib(i++);
        end = new Date();
        diffs.push(end - start);
      }
      const avg = (array) => {
        let n = 0, sum = 0;
        for(let i = 0; i < array.length; i++){
          sum += array[i];
        }
        return sum / array.length;
      }
      const expected_dur_ratio = i / (end - init);
      const actual_dur_ratio = diffs[diffs.length - 1] / (end - init);
      // if the computational duration is increasing linearly, the last computation
      // should make up less than 10% of the total computation.
      actual_dur_ratio.should.be.below(0.1);
    });

    it('should not use recursion', () => {
    // Note: this test may produce a false positive if you have a comment
    // in your `iFib` function that contains the string literal
    // "iFib" somewhere within it.
    should.not.exist(solution.iFib.toString().match(/iFib/));
    });
  });
});
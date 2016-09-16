'use strict';

const solution = require('../prompts/balancedBrackets.js');
const expect = require('chai').expect;

describe('BalancedBrackets Toy Problem', () => {
  describe('balancedBrackets', () => {
    it('should exist and be a function', () => {
      expect(solution.balancedBrackets).to.exist;
      expect(solution.balancedBrackets).to.be.a('function');
    });

    it('should return a boolean', () => {
      const res = solution.balancedBrackets("(x + y) - (4)");
      expect(res).to.be.a('boolean');
    });

    it('should return whether string is balanced or not', () => {
      const res = solution.balancedBrackets("(x + y) - (4)");
      expect(res).to.be.equal(true);

      const res1 = solution.balancedBrackets("(x + y) - (4)");
      expect(res1).to.be.equal(true);

      const res2 = solution.balancedBrackets("(((10 ) ()) ((?)(:)))");
      expect(res2).to.be.equal(true);

      const res3 = solution.balancedBrackets("(50)(");
      expect(res3).to.be.equal(false);

    });
  })
})

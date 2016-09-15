'use strict';

const solution = require('../prompts/arrayception.js');
const expect = require('chai').expect;

describe('Arrayception Toy Problem', () => {
  describe('arrayception', () => {
    it('should exist and be a function', () => {
      expect(solution.arrayception).to.exist;
      expect(solution.arrayception).to.be.a('function');
    });

    it('should return an array', () => {
      const res = solution.arrayception([]);
      expect(res).to.be.an('number');
    });

    it('should return all the combinations of anagrams', () => {
      const res = solution.arrayception([[5], [[]]]);
      expect(res).to.be.equal(2);

      const res1 = solution.arrayception([ 10, 20, 30, 40 ]);
      expect(res1).to.be.equal(1);

      const res2 = solution.arrayception([[10,20], [[30,[40]]]]);
      expect(res2).to.be.equal(4);

      const res3 = solution.arrayception([[[]]]);
      expect(res3).to.be.equal(0);

    });
  })
})

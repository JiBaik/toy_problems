'use strict';

const solution = require('../prompts/intersection.js');
const expect = require('chai').expect;

describe('Intersection Toy Problem', () => {
  describe('intersection', () => {
    it('should exist and be a function', () => {
      expect(solution.intersection).to.exist;
      expect(solution.intersection).to.be.a('function');
    });

    it('should return a string of only characters that occurr in both strings', () => {
      expect(solution.intersection('acexivou', 'aegihobu')).to.be.equal('aeiou');
      expect(solution.intersection("What is love?", "Baby don't hurt me")).to.be.equal('hatoe');
      expect(solution.intersection("Riding on a buffalo makes me more approachable", "so what")).to.be.equal('oash');
    });
  })
})

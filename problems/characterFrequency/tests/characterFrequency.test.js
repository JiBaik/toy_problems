'use strict';

const solution = require('../prompts/characterFrequency.js');
const expect = require('chai').expect;

describe('CharacterFrequency Toy Problem', () => {
  describe('characterFrequency', () => {
    it('should exist and be a function', () => {
      expect(solution.characterFrequency).to.exist;
      expect(solution.characterFrequency).to.be.a('function');
    });

    it('should return an ordered array', () => {
      expect(solution.characterFrequency("aaabbc")).eql([ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]);
      expect(solution.characterFrequency("mississippi"  )).eql([ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]);
      expect(solution.characterFrequency("")).eql([]);
    });
  })
})

'use strict';

const solution = require('../prompts/deepEquality.js');
const expect = require('chai').expect;
const should = require('chai').should();

describe('solution.deepEquality()', function(){

  it('should exist', function(){
    should.exist(solution.deepEquality);
  });
  it('should be a function', function(){
    solution.deepEquality.should.be.a.Function;
  });
  it('should take at least two arguments', function(){
    solution.deepEquality.length.should.be.above(1);
  });
  it('should return a result', function(){
    var result = solution.deepEquality({}, {});
    should.exist(result);
  });
  it('should return a boolean', function(){
    solution.deepEquality({}, {}).should.be.a.Boolean;
  });
  it('should return true for two empty objects', function(){
    solution.deepEquality({}, {}).should.be.true;
  });
  it('distinguishes between objects and arrays', function() {
    var a = { foo: [2, { bar: {}}]}
    var b = { foo: [2, { bar: []}]}
    solution.deepEquality(a,b).should.be.false;
  });
  it('should use deep equality', function(){
    var a = { foo: 1 };
    var b = { foo: '1' };
    solution.deepEquality(a,b).should.be.false;
  });
  it('should return true for two objects with the same keys and values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar' };
    solution.deepEquality(a, b).should.be.true;
  });
  it('should return false for two objects with the same keys and but different values', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'pow' };
    solution.deepEquality(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar' };
    var b = { foo: 'bar', biz: 'baz' };
    solution.deepEquality(a, b).should.be.false;
  });
  it('should return false for two objects with different number of keys', function(){
    var a = { foo: 'bar', biz: 'baz' };
    var b = { foo:'bar' };
    solution.deepEquality(a, b).should.be.false;
  });
  it('should return true for similar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c: 3 } };
    solution.deepEquality(a,b).should.be.true;
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 3 } };
    var b = { foo: 1, b: { c:'potato' } };
    solution.deepEquality(a,b).should.be.false;
  });
  it('should return false for dissimilar nested object properties', function(){
    var a = { foo: 1, b: { c: 'potato'} };
    var b = { foo: 1, b: { c: 3 } };
    solution.deepEquality(a,b).should.be.false;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    solution.deepEquality(a,b).should.be.true;
  });
  it('should return true for similar excessively nested object properties', function(){
    var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
    var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
    solution.deepEquality(a,b).should.be.true;
  });
});

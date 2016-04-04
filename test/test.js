var chai = require('chai');
var expect = require('chai').expect;
var code = require('../main.js');
var chaiDeepMatch = require('chai-deep-match');
chai.use( chaiDeepMatch );

describe('This awesome test suite', function(){
  it('tests funciton number one', function(){
    expect(true).to.equal(true);
  })
  var foo = {
    1: 'a',
    2: 'b'
  }
  var bar = {
    1: 'a',
    2: 'b'
  }
  it('deeps tests objects', function(){
    expect(foo).to.deep.match(bar)
  })
})

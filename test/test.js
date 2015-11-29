describe('util.js', function() {
  describe('takeOne()', function() {

    it('returns the single element of a one-element array', function() {
      var names = ['Lisa'];
      expect( util.takeOne(names) ).to.be('Lisa');
    });

    it('returns null if the array is empty', function() {
      var names = [];
      expect( util.takeOne(names) ).to.be(null);
    });

    xit('deletes the last element of a one-element array', function() {
      var names = ['Lisa'];
      util.takeOne(names);
      expect( names.length ).to.be(0);
    });

  });
});


//
// Configuration
///
var expect = require('expect.js');
var util   = require('../util.js')._test;

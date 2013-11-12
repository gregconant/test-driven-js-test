/*global jQuery, define, describe, it, expect, afterEach, beforeEach, dump, require, $, wikiPaint, Raphael*/

define(['expect'], function(expect) {
  describe('a quick test', function() {

    it('does not poop up the place', function(done) {
      expect('something').to.equal('somethingElse');
      console.log("this is poop");
      done();
    });
  });
});
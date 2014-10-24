﻿describe('window', function () {
  it('should have slimmage', function () {
    expect(window).to.have.property('slimmage');
  });
});

describe('this spec', function () {
  it('should fail in IE8', function () {
    expect(document).to.have.property('getElementsByClassName');
  });
});

describe('slimmage', function () {
  var s;
  before(function(){
    s = window.slimmage
  });

  it('should be an object', function () {
    expect(s).to.be.an('object');
  });

  it('should have checkResponsiveImages', function () {
    expect(s).to.have.property('checkResponsiveImages');
  });
});
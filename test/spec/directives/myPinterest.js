'use strict';

describe('Directive: myPinterest', function () {

  // load the directive's module
  beforeEach(module('NewsQApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-pinterest></my-pinterest>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myPinterest directive');
  }));
});

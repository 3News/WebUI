'use strict';

angular.module('NewsQApp')
  .directive('myPinterest', function () {
    return {
      restrict: 'A',
      link : function(scope, element, attrs) { 
    	  console.log( "jQuery blocksIt call..1." );
    	  console.log(attrs);
    	  $(element).BlocksIt(scope.$eval(attrs.myPinterest));
    	  //$(element).BlocksIt();
    	  console.log( "jQuery blocksIt call..3." );
      }
    };
  });

angular.module('NewsQApp')
 .directive('cycle', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
       $(element).cycle(scope.$eval(attrs.cycle));
       //$(element).cycle({
       //    fx: 'fade',
       //   timeout: 10
       //});
    }
  };
});
'use strict';

angular.module('NewsQApp', ['ngResource', 'infinite-scroll'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/intro.html',
        controller: 'LoginCtrl'
      })
      .when('/home/:slug', {
        templateUrl: 'views/page.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: 'http://www.daum.net'
      });
})
 
.factory("User", function($resource) {
    return $resource("resources/:userId.json", {}, {
        query: {method: "GET", params: {userId: "users"}, isArray: true}
    })
})

.factory("Article", function($resource) {
    return $resource("resources/:articleId.json", {}, {
        query: {method: "GET", params: {articleId: "articles"}, isArray: true}
    })
})

.run(function($rootScope, $window){
	$rootScope.windowWidth = $window.outerWidth;
	angular.element($window).bind('resize',function(){
  		$rootScope.windowWidth = $window.outerWidth;
  		$rootScope.$apply('windowWidth');
  		console.log( "[.run]bind" );
 	});
});



var $injector = angular.injector(['NewsQApp']);
var User = $injector.get('User');
var Article = $injector.get('Article');

function AppController ($scope, $rootScope, $http) {
  	// Load pages on startup
  	$rootScope.loggedin = false;
  	$scope.users = User.query();
  	$scope.articles = Article.query();

  	$scope.loadMore = function() {
		for(var i = 1; i <= 8; i++) {
		  	$scope.articles.push(
				{
					"articleId": 99,
					"image_url": "http://www.inwebson.com/demo/blocksit-js/demo2/images/img26.jpg",
					"title": "Bridge to Heaven - added",
					"content": "Where is the bridge lead to?",
					"writer": "by SigitEko"
				}
		  	);
		}
  	};
  	
  	$http.get('resources/pages.json').success(function (data) {
    	$rootScope.pages = data;
  	});

  	// Set the slug for menu active class
  	$scope.$on('routeLoaded', function (event, args) {
    	$scope.slug = args.slug;
  	});
  
  	$rootScope.$watch('windowWidth',function(newVal, oldVal){
  		var conWidth;
  		var col = 6;
		if(newVal < 660) {
			conWidth = 440;
			col = 2
		} else if(newVal < 880) {
			conWidth = 660;
			col = 3
		} else if(newVal < 1100) {
			conWidth = 880;
			col = 4;
		} else {
			conWidth = 1100;
			col = 5;
		}

		$('#pinterest').BlocksIt({
			numOfCol: col,
			offsetX: 8,
			offsetY: 8
			});
		
  		console.log( "[AppController]$rootScope.$watch" + newVal );
	});
}

AppController.$inject = ['$scope', '$rootScope', '$http'];

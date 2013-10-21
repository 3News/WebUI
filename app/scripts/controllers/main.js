function MainCtrl($scope, $rootScope, $http, $route, $routeParams, $location, User) {
  // Getting the slug from $routeParams
  
  var slug = $routeParams.slug;
  
  $scope.$emit('routeLoaded', {slug: slug});
  $scope.page = $rootScope.pages[slug];
}

MainCtrl.$inject = ['$scope', '$rootScope', '$http', '$route', '$routeParams', '$location', 'User'];
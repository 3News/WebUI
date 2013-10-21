function LoginCtrl($scope, $rootScope, $route, $routeParams, $location, User) {
    $scope.users = User.query();
    $scope.loginUser = function() {
        var loggedin = false;
        var totalUsers = $scope.users.length;
        var usernameTyped = $scope.user.Username;
        var userpasswordTyped = $scope.user.Password;

        for( var i=0; i < totalUsers; i++ ) {
            if( $scope.users[i].name === usernameTyped ) {
            	if($scope.users[i].password == userpasswordTyped) {
                	loggedin = true;
                	break;
                }
            }
        }

        if( loggedin === true ) {
        	$rootScope.loggedin = true;
            $location.path("/home/home");
        } else {
            alert("invalid username or password")
        }
    }
}

LoginCtrl.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location', 'User'];

function UserCtrl($scope, $route, $routeParams, $location) {
    $scope.logoutUser = function() {
        $location.path("/login");
    }
}
UserCtrl.$inject = ['$scope', '$rootScope', '$route', '$routeParams', '$location'];
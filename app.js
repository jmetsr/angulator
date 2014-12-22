var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.val = ""
	$scope.even = false

	$scope.inc = function(num) {
		return $scope.val += num
	}
	$scope.plus = function() {
		$scope.temp = $scope.val
		$scope.val = ""
	}
	$scope.equals = function() {
		$scope.val = Number($scope.temp) + Number($scope.val) + ""
	}

})

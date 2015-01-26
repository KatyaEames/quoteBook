var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteInfo) {
	$scope.quotesArray = quoteInfo.getData();
	//console.log($scope.quotesArray);

});


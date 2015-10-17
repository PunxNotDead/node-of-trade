app.controller('IndexController', function ($scope, DataFactory) {
	$scope.fileData = {
		hosts: [],
		files: []
	};
	
	$scope.rssData = [];
	$scope.jsonData = [];
	
	$scope.selectedTab = 0;
	$scope.fileError = '';
	$scope.rssError = '';
	$scope.jsonError = '';
	
	$scope.selectTab = function (index) {
		$scope.selectedTab = index;
	};
	
	$scope.isSelected = function (index) {
		return $scope.selectedTab === index;
	};
});

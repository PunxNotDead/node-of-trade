app.factory('DataFactory', function ($http) {
	var url = '/api/'
	
	function readFileData() {
		return $http.get(url + 'file-content');
	}
	
	function readRssData() {
		return $http.get(url + 'rss');
	}
	
	function readJsonData() {
		return $http.get(url + 'json');
	}
	
	return {
		readFileData: readFileData,
		readRssData: readRssData,
		readJsonData: readJsonData
	}
});

/*
app.controller('MainController', ['$scope', function($scope) {
	$scope.data = [
		{
			"name":"Willow Falls",
			"address":"x"
		},
		{
			"name":"Cyprus Run"
		}
	];
}]);
*/

/*
function MainCtrl($scope, $filter) {
	this.properties = [
		{
			"name":"ASHLAND VILLAGE",
			"address":"1517 COTTAGE STREET, ASHLAND, OH 44805"
		},
		{
			"name":"OAKLEAF VILLAGE OF COLUMBUS",
			"address":"5500 KARL ROAD, COLUMBUS, OH 43229"
		},
		{
			"name":"OAKLEAF VILLAGE OF TOLEDO",
			"address":"4220 N. HOLLAND SYLVANIA RD, TOLEDO, OH 43623"
		}
	]

	$scope.filterTerm = "";

};

app.controller('MainController', MainCtrl);
*/

app.controller('MainController', function($scope, $filter, ngTableParams) {
	var data = [
		{
			"name":"BUCKEYE WAREHOUSE",
			"address":"1517 COTTAGE STREET, POWELL, OH 43065",
			"founded": 2015,
			"state":"OH",
			"propManagerName":"LOU"
		},
		{
			"name":"OAKLEAF WAREHOUSE OF TOLEDO",
			"address":"5500 KARL ROAD, TOLEDO, OH 44079",
			"founded": 2002,
			"state":"OH",
			"propManagerName":"MIKE"
		},
		{
			"name":"SANDUSKY STABLES WAREHOUSE",
			"address":"4220 N. HOLLAND RD, SANDUSKY, OH 43623",
			"founded": 2014,
			"state":"OH",
			"propManagerName":"BOB"
		}
	]

	$scope.filterTerm = '';

	// table stuff
	$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data, params.orderBy()) :
                                data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
	

})
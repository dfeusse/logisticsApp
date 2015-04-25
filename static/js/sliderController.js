app.controller('sliderController',
        	function sliderController($scope) {

        		// just some values for the sliders
        		$scope.demo1 = {
        			range: {
						min: 0,
						max: 180
					},
        			min: 30,
        			max: 60
        		};

        		$scope.demo2 = {
					range: {
						min: 0,
						max: 10050
					},
					minPrice: 1000,
					maxPrice: 4000
				};

				$scope.demo3 = {
				    rangeMin: 10,
				    rangeMax: 1500,
				    min: 1500,
				    max: 1500,
				    disabled: false
				};

				// function for the button to disable / enable slider 3
				$scope.toggleDemo3 = function () {
					// toggle true / false
					$scope.demo3.disabled = !$scope.demo3.disabled;
				}

				$scope.demo4 = {
				    min: 300,
				    max: 800
				};

				$scope.demo5 = {
				    min: 2000,
				    max: 8000
				};

				$scope.demo6 = {
				    valueA: 5000,
				    valueB: 3000
				};

        		$scope.demo7 = {
					range: {
						min: 0,
						max: 10050
					},
					minPrice: 1000,
					maxPrice: 4000
				};

        	}
        );
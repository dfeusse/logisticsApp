var DatepickerDemoCtrl = function ($scope, $rootScope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    //$scope.today();

    $scope.showWeeks = true;
    $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
    };

    $scope.clear = function () {
        $scope.dt = null;
    };

    //watch scope to change format
    $scope.$watch('dt', function(v) {
        //$scope.dt = $scope.dt.toLowerCase().replace(/\s+/g,'');
        if($scope.dt) {
            var d = new Date(v);
            var curr_date = ('0' + d.getDate()).slice(-2);
            var curr_month = ('0' + (d.getMonth() + 1)).slice(-2); //Months are zero based
            var curr_year = d.getFullYear();
            //$rootScope.modDateEnd = curr_year + "-" + curr_date + "-" + curr_month  ;
            $rootScope.modDateEnd = curr_year + "-" + curr_month + "-" + curr_date;
            console.log('%%%%%%%%%%%%%%%%%%%')
            console.log($rootScope.modDateEnd)
        }
    });

    // Disable weekend selection
    //$scope.disabled = function(date, mode) {
    //    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    //};

    /*
    $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
    };
    $scope.toggleMin();
    */

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

    $scope.opened = true;
    };

    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
    };

    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy-MM-dd', 'shortDate'];
    $scope.formats = ['MMMM dd yyyy'];
    $scope.format = $scope.formats[0];
};
angular.module("testAppModule").directive('userList', function () {
    return {
        restrict: 'E',
        scope: true,
        link:function($scope,el,attrs){
            $scope.titles = ["N","name","email","telephone","address","street","city","state","zip","remove","edit"];
            $scope.propertyName = null;
            $scope.reverse = false;

            $scope.sortBy = function(propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };
            $scope.resetSorting = function(){
                $scope.propertyName = null;
                $scope.reverse = false
            }

        },
        templateUrl: '/assets/js/user-list/user-list.html'
    }
});
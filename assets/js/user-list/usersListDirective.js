angular.module("testAppModule").directive('userList', function () {
    return {
        restrict: 'E',
        scope: true,
        link:function($scope,el,attrs){
            $scope.titles = ["N","name","email","telephone","address","street","city","state","zip","remove","edit"];
            $scope.propertyName = null;
            $scope.reverse = false;

            $scope.sortBy = function(propertyName) {
                if(propertyName !='N' && propertyName !='remove' && propertyName !='edit') {
                    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                    $scope.propertyName = propertyName;
                }
                else{
                    return false;
                }
            };
            $scope.resetSorting = function(){
                $scope.propertyName = null;
                $scope.reverse = false
            }

        },
        templateUrl: '/assets/js/user-list/user-list.html'
    }
});
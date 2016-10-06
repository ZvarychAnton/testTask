angular.module("testAppModule").directive('userList', function () {
        return {
            restrict: 'E',
            scope: true,
            link:function($scope,el,attrs){
                $scope.titles = ["N","Name","Email","Phone","Address","Street","City","State","Zip","Remove","Edit"];
            },
          templateUrl: '/assets/js/user-list/user-list.html'
        }
    });

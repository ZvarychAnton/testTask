/**
 * Created by anton on 12.10.16.
 */
angular.module("testAppModule").directive('userForm', function () {
    return {
        restrict: 'E',
        scope: true,
        link:function($scope,el,attrs){
            $scope.formFields = [
                {
                    'name': 'name',
                    'type': 'text',
                    'minlength': '3',
                    'maxlength': '15',
                    'required': true
                },
                {
                    'name': 'email',
                    'type': 'email',
                    'minlength': '7',
                    'maxlength': '30',
                    'required': true
                },
                {
                    'name': 'telephone',
                    'type': 'number',
                    'minlength': '5',
                    'maxlength': '15',
                    'required': true
                },
                {
                    'name': 'address',
                    'type': 'number',
                    'minlength': '1',
                    'maxlength': '5',
                    'required': false
                },
                {
                    'name': 'street',
                    'type': 'text',
                    'minlength': '5',
                    'maxlength': '30',
                    'required': false
                },
                {
                    'name': 'city',
                    'type': 'text',
                    'minlength': '5',
                    'maxlength': '30',
                    'required': true
                },
                {
                    'name': 'state',
                    'type': 'text',
                    'minlength': '5',
                    'maxlength': '30',
                    'required': false
                },
                {
                    'name': 'zip',
                    'type': 'number',
                    'minlength': '3',
                    'maxlength': '10',
                    'required': false
                }
            ];
        },
        templateUrl: '/assets/js/user-form/user-form.html'
    }
});
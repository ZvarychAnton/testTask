angular.module("testAppModule").controller("testAppCtrl",[ "$scope","userService" , function($scope,userService){
  $scope.formData = {};
  $scope.editMode = false;

  // load user list
  userService.getUsersList().then(function(result){
    $scope.list = result;
    $scope.idCounter = $scope.list[$scope.list.length - 1].id + 1; // assign id
  });

  $scope.addNewCustomer = function(formData){
    formData.id = $scope.idCounter;
    $scope.idCounter++;
    $scope.list.push(formData);
    $scope.formData = {};
    userService.postUsersData($scope.list);
  }

  $scope.setEditCustomer = function(user){
    $scope.formData = angular.copy(user);
    $scope.editMode = true;
  }

  $scope.updateCustomer = function(formData){
    for(var i = 0; i < $scope.list.length; i++) {
      if ($scope.list[i].id == formData.id) {
        $scope.list[i] = formData;
      }
    }
    userService.postUsersData($scope.list);
    $scope.formData = {};
    $scope.editMode = false;
  }

  $scope.removeCustomer = function(user){
    for(var i = 0; i < $scope.list.length; i++) {
      if ($scope.list[i].id == user.id) {
        $scope.list.splice(i,1);
      }
    }
  userService.postUsersData($scope.list);
 }

 $scope.clearFields = function(){
  $scope.formData = {};
  $scope.editMode = false;
 }
}]);

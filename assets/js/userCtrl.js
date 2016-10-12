angular.module("testAppModule").controller("testAppCtrl",[
  "$scope",
  "userService", 
  "$injector", 
  function($scope,
           userService,
           $injector){
    
  $scope.formData = {};
  $scope.defaultFormData = {    // for resetting form
    name:"",
    email:"",
    telephone:"",
    address:"",
    street:"",
    city:"",
    state:"",
    zip:""
  };
  $scope.editMode = false;
  $scope.flag = false; // for timeout on remove button
  $scope.idCounter =  function(){
    return $injector.get("generateID").getUUID();
  };
    
  // load user list
  userService.getUsersList().then(function(result){
    $scope.list = result;
  });

  $scope.addNewCustomer = function(formData,form){
    formData.id = $scope.idCounter();
    $scope.list.push(formData);
    userService.postUsersData($scope.list);
    $scope.clearFields(form);
  };

  $scope.setEditCustomer = function(user){
    $scope.formData = angular.copy(user);
    $scope.editMode = true;
    $scope.flag = true;
  };

  $scope.updateCustomer = function(formData,form){
    for(var i = 0; i < $scope.list.length; i++) {
      if ($scope.list[i].id == formData.id) {
        $scope.list[i] = formData;
      }
    }
    userService.postUsersData($scope.list);
    $scope.clearFields(form);
  };

  $scope.removeCustomer = function(user){
    $scope.flag = true;
    var index = $scope.list.indexOf(user);
    $scope.list.splice(index, 1);
    userService.postUsersData($scope.list);
    $timeout = $injector.get("$timeout");
    $timeout(function(){
      $scope.flag = false;
    }, 1000);
 };

 $scope.clearFields = function(form){
   $scope.formData = angular.copy($scope.defaultFormData);
   $scope.editMode = false;
   $scope.flag = false;
   form.$setPristine();
   form.$setUntouched();
 };
}]);

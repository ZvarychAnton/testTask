angular.module("testAppModule").service("userService",["$http", function($http){

    var model = this,
        getUrl = "/getUsers",
        postUrl = "/getUsers",
        users;

        function extract(result){
          return JSON.parse(result.data);
        }
        function cacheCategories(result){
          users = extract(result)
          return users;
        }
        model.getUsersList = function(){
          return $http.get(getUrl).then(cacheCategories)
        }
        model.postUsersData = function(dataJson){
          var dataJson = JSON.stringify(dataJson);
          $http.post('/postUsers', dataJson).then(function(respond){
              console.log("info was updated");
          }, function(error){
              console.error(error);
          });
        }
}]);

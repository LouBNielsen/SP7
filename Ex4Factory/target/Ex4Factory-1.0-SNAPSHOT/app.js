var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope, userService) {
    userService.getContries().success(function(data){
       $scope.contry = data; 
    }),
    userService.getContriesInA().success(function(data){
       $scope.contry2 = data; 
    }),
    userService.getContriesFromCode().success(function(data){
       $scope.contry3 = data; 
    });
    
});


app.factory('userService', function($http) {
	return {
		getContries: function(){
			return $http.get("https://restcountries.eu/rest/v1/all");
		},
                getContriesInA: function(){
			return $http.get("https://restcountries.eu/rest/v1/region/africa");
		}
                ,
                getContriesFromCode: function(){
			return $http.get("https://restcountries.eu/rest/v1/alpha?codes=gb");
		}
	};
});
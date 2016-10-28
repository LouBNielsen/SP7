var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', 'userService', function ($scope, userService) {

    $scope.getRandomNumber = function (n) {
        return userService.getRandomNumber(n);
    };
        $scope.getRandomString = function (n) {
        return userService.getRandomString(n);
    };
}]);


app.factory('userService', function () {
    return {
        getRandomNumber: function (n) {
            return Math.floor((Math.random() * n) + 1);
        },
        getRandomString: function (N) {
            return new Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N);
        }
    };
});

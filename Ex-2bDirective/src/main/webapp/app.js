var app = angular.module("app", []);

app.controller("myController", function ($scope) {
    $scope.picture1 = ['kat.jpeg'];
    $scope.images = ["pictures/kat.jpeg", "pictures/cat.jpeg"];
});

app.directive("myDirective", [function () {
        return {
            restrict: 'E',
            template: '<div ng-repeat="image in images"><img ng-src="{{image}}"/></div>'
        };
}]);

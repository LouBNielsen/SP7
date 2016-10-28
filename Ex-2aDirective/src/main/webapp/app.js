var app = angular.module("app", []);

app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()
        };
    }]);

app.directive("formatCompany", function(){
    return {
      template: 'Company: {{user.companyName}} <br> URL: {{user.companyUrl}} <br> Created: {{user.created}}'  
    };
});
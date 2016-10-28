var app = angular.module('examApp', []);

app.controller('ExamController', ['$scope', function ($scope) {
        $scope.studentsInfo = {};
        $scope.studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        $scope.studentsInfo.students = [];
        $scope.studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        $scope.studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        $scope.studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        $scope.studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
    }]);

app.filter('averageFilter', function () {
    return function (average) {
        var sum = 0;
        for (var i = 0; i < average.length; i++) {
            sum += average[i];
            var avg = sum / average.length;
            return avg;
        }
        ;
    };
});

app.directive("myDirective", [function () {
        return {
            restrict: 'E',
            template: '<table>' +
                    '<tr ng-repeat="courses in studentsInfo.allCourses">' +
                    '<td>CourseName: {{courses.courseName}}</td>' +
                    '</tr>' +
                    '<tr ng-repeat="student in studentsInfo.students">' +
                    '<td>StudentName: {{student.name}}</td>' +
                    '</tr>' +
                    '</table>' +
                    '<div ng-repeat="grade in studentsInfo.students">{{grade}}</div> <!--p>{{grade | averageFilter}}</p-->'
        };
    }]);

var app = angular.module("app", []);

app.controller('ChessCtrl', function ($scope) {
    $scope.board = ["wr", "wkn", "wb", "wq", "wk", "wb", "wkn", "wr"];
});

app.filter('Chess', function () {
    return function (input) {
        var unicode = [
            {name: 'wr', code: '\u265c'}, {name: 'wkn', code: '\u265e'},
            {name: 'wb', code: '\u265d'}, {name: 'wq', code: '\u265a'},
            {name: 'wk', code: '\u265b'}
        ];
        for (var i = 0; i < unicode.length; i++) {
            if (unicode[i].name === input) {
                return unicode[i].code;
            }
        }
    };
});
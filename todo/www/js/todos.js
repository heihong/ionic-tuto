
angular.module('starter-controller',[]).controller('TodosCtrl', function($scope) {
    $scope.todos = [
        {title: "Take out the trash", done: true},
        {title: "Do laundry", done: false},
        {title: "Start cooking dinner", done: false}
    ]
})
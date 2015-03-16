angular.module('starter-controller',[]).controller('TodosCtrl', function($scope, TodosService) {
    $scope.todos = TodosService.todos
})

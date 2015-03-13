// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter-controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

        $ionicConfigProvider.tabs.position("bottom");
        $stateProvider.state('todos', {
            url: '/todos',
            views: {
                todos: {
                    templateUrl: 'templates/todos.html',
                    controller: 'TodosCtrl'
                }
            }
        })

        $stateProvider.state('help', {
            url: '/help',
            views: {
                help: {
                    templateUrl: 'templates/help.html'
                }
            }
        })

    $urlRouterProvider.otherwise('/');
})

//.controller('HomeCtrl', function($scope) {
//    $scope.todos = [
//        {title: "Take out the trash", done: true},
//        {title: "Do laundry", done: false},
//        {title: "Start cooking dinner", done: false}
//    ]
//})
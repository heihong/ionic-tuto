// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter-controller','starter-services'])

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
    
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $urlRouterProvider.otherwise('/todos')

    $ionicConfigProvider.tabs.position("bottom");

    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'templates/main.html'
    })

    $stateProvider.state('app.todos', {
        abstract: true,
        url: '/todos',
        views: {
            todos: {
                template: '<ion-nav-view></ion-nav-view>'
            }
        }
    })

    $stateProvider.state('app.todos.index', {
        url: '',
        templateUrl: 'templates/todos.html',
        controller: 'TodosCtrl'
    })

    $stateProvider.state('app.todos.detail', {
        url: '/:todo',
        templateUrl: 'templates/todo.html',
        controller: 'TodoCtrl',
        resolve: {
            todo: function($stateParams, TodosService) {
                return TodosService.getTodo($stateParams.todo)
            }
        }
    })


    $stateProvider.state('app.help', {
        url: '/help',
        views: {
            help: {
                templateUrl: 'templates/help.html'
            }
        }
    })
})


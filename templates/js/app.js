var myApp = angular.module('myApp', ['ngRoute','myControllers']);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'listController'
  }).
  
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'detailsController'
  }).

  otherwise({
    redirectTo: '/list'
  });
}]);

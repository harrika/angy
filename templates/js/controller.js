var myControllers = angular.module('myControllers', []);
var stds =  [
{
    'name': 'henry mukomba',
    'title': 'hod',
    'company': 'umutara'
   },   
   {
    'name': 'pike hilton',
    'title': 'qss',
    'company': 'london'
   },   
   {
    'name': 'mike peterson',
    'title': 'zfs',
    'company': 'hilton'
   }   
];

myControllers.controller('listController', function($scope) {
      $scope.students = stds;
});

myControllers.controller('detailsController', function($scope, $routeParams) {
      $scope.students = stds;
      $scope.which = $routeParams.itemId;
      
      if ($routeParams.itemId > 0) {
        $scope.prev = Number($routeParams.itemId)-1;
      } else {
        $scope.prev = $scope.students.length-1;
      }           
      if ($routeParams.itemId < $scope.students.length-1) {
        $scope.next = Number($routeParams.itemId)+1;
      } else {
        $scope.next = 0;
      }            
});


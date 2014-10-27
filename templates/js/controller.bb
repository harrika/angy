var myControllers = angular.module('myControllers', []);

myControllers.controller('listController', function($scope) {
      $scope.students = [
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

myControllers.controller('detailsController', function($scope, $routeParams) {
      $scope.students = [
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
$scope.which = $routeParams.itemId;         
});


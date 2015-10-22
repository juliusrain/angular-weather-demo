/*
var weatherControllers = angular.module('weatherControllers', []);

weatherControllers.controller('CityListCtrl', function($scope) {
  $scope.cities = [
    {'name': 'Vancouver',
     'id': 12345},
    {'name': 'London',
     'id': 23455},
    {'name': 'New York',
     'id': 74656}
  ];
})
*/

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('CityListCtrl', function($scope){
    $scope.cities = [
    {'name': 'Vancouver',
     'id': 123},
    {'name': 'New York',
     'id': 234},
    {'name': 'London',
     'id': 345}
  ];
});
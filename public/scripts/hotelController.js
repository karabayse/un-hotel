/*---- Hotel Controller ----*/

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'HomeController as hoc'
  }).when('/history', {
    templateUrl: 'views/history.html',
    controller: 'HistoryController',
    controllerAs: 'HistoryController as hic'
  }).when('/restaurant', {
    templateUrl: 'views/restaurant.html',
    controller: 'RestaurantController',
    controllerAs: 'RestaurantController as rec'
  }).when('/rooms', {
    templateUrl: 'views/rooms.html',
    controller: 'RoomsController',
    controllerAs: 'RoomsController as roc'
  }).otherwise('/');
});

var app = angular.module('FeedReader', ['ngResource', 'ngRoute', 'ngSanitize']);

app.config( function($routeProvider) {
  $routeProvider
  .when('/feeds', {
    templateUrl: 'feeds.html',
    controller: 'FeedController'
  })
  .when('/settings', {
    templateUrl: 'settings.html',
    controller: 'SettingsController'
  })
  .when('/', {
    templateUrl: 'feeds.html',
    controller: "FeedController"
  })
});

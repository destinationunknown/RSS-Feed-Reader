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

app.controller('FeedController', function($scope, $q, $http) {
    $scope.url = "http://feeds.feedburner.com/TechCrunch/";
    var feed_container = document.getElementById('feed-item');

    $scope.loadFeed = function() {
        console.log("loading feed");
        var feed = new google.feeds.Feed($scope.url);

        feed.load(function(result) {
            if (!result.error) {
                console.log("Successfully got feed");
                $scope.result_raw = result;
                $scope.result = $scope.result_raw;
                $scope.filterResult();
                console.log(result);
                $scope.$apply();
            }
            else {
              console.error("Loading feeds failed. Error: " + result.error);
            }
        });
    }

    $scope.filterResult = function() {
      for (var i = 0; i < $scope.result.feed.entries.length; i++) {
        // Get the current feed item in all the feed items.
        var current_feed = document.getElementById(i);
        console.log(current_feed);
        // Get the images and put them in the entries array
        // $scope.result.feed.entries[0].images = current_feed.getElementsByTagName('img')

        // Strip the images from the content
        var text = $scope.result.feed.entries[i].content.replace(/<img[^>"']*((("[^"]*")|('[^']*'))[^"'>]*)*>/g,"");
        $scope.result.feed.entries[i].content = text;
      }

    };
});

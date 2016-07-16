var app = angular.module('FeedReader', ['ngResource', 'ngRoute']);

app.controller('FeedController', function($scope, $q, $http) {

    $scope.loadFeed = function() {
        console.log("loading feed");
        var feed = new google.feeds.Feed("http://fastpshb.appspot.com/feed/1/fastpshb");
        feed.load(function(result) {
            if (!result.error) {
                console.log("Successfully got feed");
                $scope.result = result;
                console.log(result);
                $scope.$apply();
            }
        });
    }


});

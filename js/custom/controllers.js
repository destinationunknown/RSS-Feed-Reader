app.controller('NavController', function($scope) {
  $scope.home = "active";
  $scope.settings = "";

  $scope.homeClicked = function() {
    $scope.home = "active";
    $scope.settings = "";
  }

  $scope.settingsClicked = function() {
    $scope.home = "";
    $scope.settings = "active";
  }
});

app.controller('FeedController', function($scope, $q, $http) {
    $scope.url = "http://feeds.feedburner.com/TechCrunch/";
    var feed_container = document.getElementById('feed-item');

    $scope.loadFeed = function() {
        console.log("loading feed");
        var feed = new google.feeds.Feed($scope.url);
        feed.setNumEntries(10);

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
              alert("Failed to load feeds. You may have entered an incorrect RSS URL")
              console.error("Loading feeds failed. Error: " + result.error);
            }
        });
    }

    $scope.filterResult = function() {
      for (var i = 0; i < $scope.result.feed.entries.length; i++) {
        // Get the current feed item in all the feed items.

        // Get the images and put them in the entries array
        // $scope.result.feed.entries[i].images = current_feed.getElementsByTagName('img')

        // Strip the images from the content
        var text = $scope.result.feed.entries[i].content.replace(/<img[^>"']*((("[^"]*")|('[^']*'))[^"'>]*)*>/g,"");
        $scope.result.feed.entries[i].content = text;
      }

    };
});

app.controller('SettingsController', function($scope) {

});

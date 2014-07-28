
// $("body").append("<form>input type='text' placeholder='search'><input type='submit'>")

// $(document).ready(function () {

var app = angular.module( "hashtag", [] );

app.controller(
    "AppController",
    function( $scope, $interval ) {

        $interval(function(){
          $scope.tweets = window.searchArray
          console.log(window.searchArray)}, 5000);

        $scope.rebuildTweets = function() {
            $scope.tweets = getTweets();
        };

        function getTweets() {

            return([
                {
                    id: 1,
                    name: " Tweet 1 "
                },
                {
                    id: 2,
                    name: "Tweets 2 "
                },
                {
                    id: 3,
                    name: "Tweets 3 "
                },
                                {
                    id: 4,
                    name: "Tweets 4 "
                },
                                                {
                    id: 5,
                    name: "Tweets 4 "
                }
            ]);
        }
    }
);

app.tweetSearch('getByUsername', function() {
  tweetResults = []
  return function(tweetArray, userName) {
    tweetArray.forEach(function(tweet){
      if (tweet.username === userName) tweetResults.push(tweet);
    if (tweetResults.length > 0) return tweetResults;
    })
    return null;
  }
})

app.controller('tweetSearch', ['$scope', '$filter', function($scope, $filter) {

     $scope.showdetails = function(userName){
        results = [];
        var found = $filter('getByUsername')($scope.tweets, userName);
        $scope.searchResults= JSON.stringify(found);
     }
}]);


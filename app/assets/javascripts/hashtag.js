
// $("body").append("<form>input type='text' placeholder='search'><input type='submit'>")

// $(document).ready(function () {

var app = angular.module( "hashtag", [] );

app.controller(
    "AppController",
    function( $scope ) {

        $scope.tweets = getTweets();
        $scope.rebuildTweets = function() {
            $scope.tweets = getTweets();
        };

        function getTweets() {

            return([
                {
                    id: 1,
                    name: "Sup Tweet 1 Bitches"
                },
                {
                    id: 2,
                    name: "Tweets 2 Bitches"
                },
                {
                    id: 3,
                    name: "Tweets 3 Bitches"
                },
                                {
                    id: 4,
                    name: "Tweets 4 Bitches"
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
    }
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


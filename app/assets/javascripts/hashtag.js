
// $("body").append("<form>input type='text' placeholder='search'><input type='submit'>")

// $(document).ready(function () {

var app = angular.module( "hashtag", [] );

app.controller(
    "AppController",
    function( $scope, $interval ) {

        $interval(function(){
          $scope.tweets = window.searchArray}, 5000);


    }
);

// app.tweetSearch('getByUsername', function() {
//   tweetResults = []
//   return function(tweetArray, userName) {
//     tweetArray.forEach(function(tweet){
//       if (tweet.username === userName) tweetResults.push(tweet);
//     if (tweetResults.length > 0) return tweetResults;
//     })
//     return null;
//   }
// })

// app.controller('tweetSearch', ['$scope', '$filter', function($scope, $filter) {

//      $scope.showdetails = function(userName){
//         results = [];
//         var found = $filter('getByUsername')($scope.tweets, userName);
//         $scope.searchResults= JSON.stringify(found);
//      }
// }]);


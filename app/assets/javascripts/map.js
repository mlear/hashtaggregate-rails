var MAP_IMAGE_LAYER_PATTERN = 'http://{s}.tiles.mapbox.com/v3/zpfled.inakeg99/{z}/{x}/{y}.png';
// var ArrayForEach = [].forEach;
var ArrayMap = [].map;
// var tweetObjects = [];

function Tweet(content, username, latitude, longitude, id) {
    this.id = id;
    this.username = username;
    this.content = content;
    this.latitude = latitude;
    this.longitude = longitude;
}

window.tweetArray = [];
window.searchArray = []
var lastTweet;

$(document).ready(function () {

    getTweetsFromServer();
    var load = setInterval(getTweetsFromServer, 250);

    function getTweetsFromServer(){
        console.log('number of tweets:' + window.tweetArray.length)
        $.ajax({
            type: 'get',
            url: '/tweets',
            dataType: 'json',
            data: {
                count: (window.tweetArray.length += 100)
            },
            success: function(data){
                console.log(data['length']);
                killIfNoNewTweets(data);
                cycleTweets(data);
            }
        })
    }

    function killIfNoNewTweets(data) {
        if (data['length'] === 0) {
            clearInterval(load);
        }
    }

    var counter;
    var map = L.map('map', {
        center: [41.84, -87.65],
        zoom: 5,
        scrollWheelZoom: true
        // zoomControl: false
    });

    L.tileLayer(MAP_IMAGE_LAYER_PATTERN, {
        maxZoom: 18,
    }).addTo(map);

    function errorMessage(data) {
        console.log('error');
    }

    // $('.problems').on('click', function(event) {
    //     event.preventDefault();
    //     getTweetsFromServer();
    // });

    function cycleTweets(tweets) {
        console.log('cycleTweets ' + tweets);
        console.log('cycling them tweets...starting at #' + tweets.length);
        for (key in tweets) {
            createTweetObject(tweets[key], key);
        }
    }

// {}

    function createTweetObject(tweet, index) {
        console.log('createTweetObject ' + tweet);
        aTweet = new Tweet(tweet.content, tweet.username, tweet.latitude , tweet.longitude, index);
        window.searchArray.push({id: index, username: tweet.username, content: tweet.content, latitude: tweet.latitude, longitude: tweet.longitude})
        display(aTweet);
        window.tweetArray.push(aTweet);
            // you can create anything you want with each tweet here
    }


    function display(tweet) {
        console.log('display ' + tweet);
        var marker = L.circle([tweet.latitude, tweet.longitude], 10000, {
            color: '#484',
            fillColor: '#7b7',
            fillOpacity: 0.5,
            id: tweet.id
        }).addTo(map)
            .bindPopup(tweet.username + " said:" + tweet.content);
        // console.log(marker);
    }

    $(".searchable").on("click", "a", function(event) {
        event.preventDefault()
        var params = {};
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            params[key] = value;
        });
        map.setView(params)
    })

});



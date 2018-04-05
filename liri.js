//starting code 
var dotenv = require("dotenv").config();
//import keys.js and stored it in a variable
var keys = require("./keys.js");
//access keys information
var spotify = new Spotify(keys.spotify);
var client = new twitter(keys.twitter);

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var thang = process.argv,
    thing2 = thang[2],
    thing3 = thang[3]
    thing4 = thang[4];

//node liri.js my-tweets allows you to show last 20 tweets when they are created at in your terminal/bash window

// var params = {screen_name: 'nodejs'};
//switch statement
switch (thang2) {
    case "my-tweets":
    //from Twitter NPM
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (err) return (err);
            console.log(tweets);
        })
}


//node liri.js spotify-this-song '<song name here>' will show the follwoing info about the song in my terminal: artist, songs name, a preview link of the song from spotify, the album the song is from. //If no song is provided, program will default to "the sign" by Ace of Base 

//node liri.js movie-this '<movie name here>' this will output: title of movie, year it cam out, imdb rating of the movie, rotten tomatoes rating, country produced, lang of movie, plot, actors //if user doesn't type move in the program will output data for the movie 'Mr.Nobody'

//node liri.js do-what-it-says ... using the fs Node package, LIFI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for 'I want it that way' as follows in random.txt
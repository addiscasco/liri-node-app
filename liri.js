//reads and sets any environment variables
var dotenv = require("dotenv").config();
//import keys.js and stored it in a variable
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

//access keys information - contructor must be placed after variable has been created for Spotify and Twitter
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//File system module allows you to work with the file system on my computer. To include the FS module, use the require() method:
var fs = require("fs");

var request = require("request");

var thang = process.argv;
var t2 = thang[2];
var t3 = thang[3];
var t4 = thang[4];

switch (t2) {
    // node liri.js my-tweets allows you to show last 20 tweets when they are created at in your terminal/bash window
    case "my-tweets":
        var params = { screen_name: 'baddistxcodes', count: 20 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {

            if (error) console.log(error);
            console.log("tweet");
            for (i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        });
        break;

    //node liri.js spotify-this-song '<song name here>' will show the follwoing info about the song in my terminal: artist, songs name, a preview link of the song from spotify, the album the song is from. //If no song is provided, program will default to "the sign" by Ace of Base
    case "spotify-this-song":
        //spotify 
        spotify.search({ type: 'track', query: t3, limit: 1 }, function (error, data) {
            if (error) console.log(error);
            // console.log(JSON.stringify(data, null, 2));
            console.log(data.tracks.items);
        });
        break;

    //node liri.js movie-this '<movie name here>' this will output: title of movie, year it cam out, imdb rating of the movie, rotten tomatoes rating, country produced, lang of movie, plot, actors //if user doesn't type move in the program will output data for the movie 'Mr.Nobody'

    case "movie-this":
        var queryURL = "http://www.omdbapi.com/?t=" + t4 + "&y=&plot=short&apikey=trilogy";

        request(queryURL, function (error, response, body) {
            if (error) console.log(error);

            console.log("statusCode: ", response && response.statusCode); // Print the response status code if a response was received
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Lang: " + JSON.parse(body).Language);
            console.log("plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        });
        break;
    //node liri.js do-what-it-says ... using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It should run spotify-this-song for 'I want it that way' as follows in random.txt
    case "do-what-it-says":
        fs.readFile("./random.txt", "utf8", function (error, data) {
            if (error) console.log(error);
            console.log(data);
        });
        break;
}
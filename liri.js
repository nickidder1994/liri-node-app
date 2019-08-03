require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var Spotify = require('node-spotify-api');

var userInput = process.argv.slice(3).join(" ")
 var selection = process.argv[2]

var spotify = new Spotify(keys.spotify)
if(selection === 'spotify-this-song')
{
spotify.search({
    type: 'track',
    query: userInput
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks.items[0].album.artists[0].name);
});
}




//   var queryURL = "http://www.ombd.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
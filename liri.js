require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var Spotify = require('node-spotify-api');

var userInput = process.argv.slice(2).join(" ")
//  var selection = process.argv[2]

var spotify = new Spotify(keys.spotify)


spotify.search({
    type: 'track',
    query: userInput
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});





//   var queryURL = "http://www.ombd.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
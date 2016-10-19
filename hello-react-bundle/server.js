/**
 * Created by r626884 on 10/17/2016.
 */
var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});

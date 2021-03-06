//Load Express module
const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

//Middlewar
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = now + ' : ' + req.method + ', ' + req.url;
    fs.appendFile('server.log', log + '\n');
    next();
});

app.use(function (req, res, next) {
    res.send('Sorry.We\'ll be right back');
});

app.get('/home', function (req, res) {
    res.send("Hello world!!");

});

app.listen(port, function () {
    console.log('Server listening on', port);
});

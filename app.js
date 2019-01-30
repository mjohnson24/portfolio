const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/project1', function (req, res) {
    res.sendFile(__dirname + '/public/project1.html');
});

app.get('/project2', function (req, res) {
    res.sendFile(__dirname + '/public/project2.html');
});

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
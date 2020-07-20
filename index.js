require('dotenv').config();
var socket = require('socket.io');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var https = require('https');
var httpPort = 80;
var httpsPort = 443;

var httpServer = app.listen(httpPort, '0.0.0.0', function(){
	console.log('listenting to port: ' + httpPort);
});

var io = require('socket.io')(httpServer);

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes.js');
routes(app);

var socketControls = require('./socketControls.js');
socketControls(io);

/*
var options = {
	key: fs.readFileSync('./certs/privkey.pem', 'utf8'),
	cert: fs.readFileSync('./certs/cert.pem', 'utf8'),
	ca: fs.readFileSync('./certs/chain.pem', 'utf8'),
	requestCert: false,
	rejectUnauthorized: false
}

var httpsServer = https.createServer(options, app);
httpsServer.listen(httpsPort, function(){
	console.log('listenting to port: ' + httpsPort);
});
*/

var Entry = require('./classes/Entry.js');
var generateID = require('.functions/generateID');
var entries = [];

var socketControls = function(io){
  io.on('connection', function(socket){
  	console.log(socket.id);

    socket.on('newEntry', function(data){
      let id = generateID();
      let entry = new Entry(id, data.text, data.x, data.y);
    });
  });
}

module.exports = socketControls;

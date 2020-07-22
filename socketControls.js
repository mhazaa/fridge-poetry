var Entry = require('./classes/Entry.js');
var generateID = require('./functions/generateID');
var entries = {};

var socketControls = function(io){
  io.on('connection', function(socket){
  	console.log(socket.id);

    socket.on('newEntry', function(data){
      let id = generateID(entries); //will loop through the id proerty of each entry
      let entry = new Entry(id, data.text, data.x, data.y);
      entries[id] = entry;
      io.sockets.emit(entry);
    });

    socket.on('moveEntry', function(data){
      var entry = entries[data.id];
      entry.x = data.x;
      entry.y = data.y;
      io.sockets.emit(entry);
    });
  });
}

module.exports = socketControls;

var socketControls = function(io){
  io.on('connection', function(socket){
  	console.log(socket.id);
  });
}

module.exports = socketControls;

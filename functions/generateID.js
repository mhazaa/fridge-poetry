function generateRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

var generateID = function(entries){
  var id = generateRandomInt(1, 100000);

  for(var key in entries){
    if(id == key) generateID(entries);
  }

  return id;
}

module.exports = generateID;

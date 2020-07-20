function generateRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

var generateID = function(entries){
  var id = generateRandomInt(1, 100000);

  entries.forEach(function(entry){
    if(id == entry.id) generateID(entries);
  });

  return id;
}

module.exports = generateID;

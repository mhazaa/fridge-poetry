class Entry {
  constructor(id, text, x, y){
    this.id = id;
    this.text = text;
    this.x = x || 0;
    this.y = y || 0;
  }
}

module.exports = Entry;

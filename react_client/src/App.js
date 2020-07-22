import React from 'react';
import './App.css';
import socket from './socket.js';

class Entry {
  constructor(id, text, x, y){
    this.id = id;
    this.text = text;
    this.x = x || 0;
    this.y = y || 0;
  }

  move(x, y){
    this.x = x;
    this.y = y;
    socket.emit('moveEntry', {
      id: this.id,
      x: this.x,
      y: this.y
    })
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      entries: {}
    }
  }

  serverEvents(){
    var that = this;

    socket.emit('fetchAllEntries');

    socket.on('fetchAllEntries', function(data){
      that.setState({entries: data});
    });

    socket.on('newEntry', function(data){

    });

    socket.on('moveEntry', function(data){
      //that.setState(...this.state.entries, {
      //  data.id:
      //});
    });
  }

  componentDidMount(){
    this.serverEvents();
  }

  render(){
    var that = this;
    return (
      <div>

        {Object.keys(this.state.entries).map(function(key){
          var entry = that.state.entries[key];
          var translate = 'translate(' + entry.x + 'px, ' + entry.y + 'px)';
          return (
            <div key={entry.id} id={entry.id} style={{ transform: translate }}>
              <p>{entry.text}</p>
            </div>
          )
        })}

      </div>
    )
  }
}

export default App;

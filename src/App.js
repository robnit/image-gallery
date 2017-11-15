import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bunnyweb.tk</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

class Display extends Component {
  constructor() {
    super();
    this.state = {
      imageData = 
      [{ 
          title: 'Cute Bunny',
          description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
        },
        { 
          title: 'Bunny2',
          description: 'This isn\'t placeholder text',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg'
        },
        { 
          title: 'Final Boss',
          description: 'Very Good',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg'
        }]
    }
  }

}


class List extends Component {
  render() {


  }
}

export default App;

import React, { Component } from 'react';
import List from './List';
import Thumbnail from './Thumbnail';

export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      imageData : 
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
    };
  }

  render() {
    const { imageData } = this.state;
    return (
      // <List imageData={imageData}/>
      <Thumbnail imageData={imageData}/> 
    );
  }
}
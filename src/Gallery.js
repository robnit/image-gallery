import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state= {
      imageIndex : 0
    };
  }

  render() {
    const { imageData } = this.props;
    const { imageIndex } = this.state;
    return(

      <img alt={imageData[imageIndex].description} src={imageData[imageIndex].url}/>

    );
  }
}
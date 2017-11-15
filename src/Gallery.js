import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state= {
      imageIndex : 0
    };
  }

  changeImage(change) {
    if (change === 1 && this.state.imageIndex === this.props.imageData.length - 1) return;
    if (change === -1 && this.state.imageIndex === 0) return;
    this.setState({ imageIndex : this.state.imageIndex + change });
  }

  render() {
    const { imageData } = this.props;
    const { imageIndex } = this.state;
    return(
      <div>
        <button onClick={() => {this.changeImage(-1);}}>Previous</button>
        <button onClick={() => {this.changeImage(1);}}>Next</button>
        <h3>{imageData[imageIndex].title}</h3>
        <img className="galleryImage" alt={imageData[imageIndex].description} src={imageData[imageIndex].url}/>
        <p>{imageData[imageIndex].description}</p>
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { imageData } = this.props;
    return(
      <table>
        {imageData.map(image => {
          return (
            <tr>
              <td><a href={image.url}>{image.title}</a></td>
              <td>{image.description}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
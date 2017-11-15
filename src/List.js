import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { imageData } = this.props;
    return(
      <table>
        <tbody>
          {imageData.map((image, i) => {
            return (
              <tr key={i} >
                <td><a href={image.url}>{image.title}</a></td>
                <td>{image.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
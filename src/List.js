import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { imageData, remove } = this.props;
    return(
      <table>
        <tbody>
          {imageData.map((image, i) => {
            const imageId = image._id;
            return (
              <tr key={i} >
                <td><a href={image.url}>{image.title}</a></td>
                <td>{image.description}</td>
                <td><button onClick={() => remove(imageId)}> Remove </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
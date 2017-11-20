import React, { Component } from 'react';
import AddImage from './AddImage';
import AddAlbum from './AddAlbum';

export default class List extends Component {
  render() {
    const { imageData, remove, addImage, addAlbum } = this.props;
    return(
      <div className="center">
        <table>
          <tbody>
            {imageData.map((image, i) => {
              const imageId = image._id;
              return (
                <tr key={i}>
                  <td><a href={image.url}>{image.title}</a></td>
                  <td>{image.description}</td>
                  <td><button onClick={() => remove(imageId)}> Remove </button></td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td><AddImage add={newImage => addImage(newImage)}/></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td><AddAlbum add={newImage => addAlbum(newImage)}/></td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}
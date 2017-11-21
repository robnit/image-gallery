import React, { Component } from 'react';


export default class Albums extends Component {
  render() {
    const { albums } = this.props;
    return(
      <div className="center">
        <table>
          <tbody>
            {albums.map((album, i) => {
              const albumId = album._id;
              return (
                <tr key={albumId}>
                  <td>{album.name}</td>
                  {/* <td><button onClick={() => removeImage(imageId)}> Remove </button></td> */}
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class AddImage extends Component {

  render() {

    return(
      <div>
        
        <form>
          <input name="title" placeholder="Title" />
          <input name="description" placeholder="Description" />
          <input name="url" placeholder="Url" /> 
          <button type="submit">Add Image</button>
        </form>
        
      </div>
    );

  }
}
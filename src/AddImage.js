import React, { Component } from 'react';

export default class AddImage extends Component {

  render() {

    return(
      <div>
        
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          console.log(elements.title.value);
          console.log(elements.description.value);
          console.log(elements.url.value);
        }}>
          <input name="title" placeholder="Title" />
          <input name="description" placeholder="Description" />
          <input name="url" placeholder="Url" /> 
          <button type="submit">Add Image</button>
        </form>
        
      </div>
    );

  }
}
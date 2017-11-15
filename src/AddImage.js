import React, { Component } from 'react';

export default class AddImage extends Component {

  render() {

    return(
      <div>
        
        <form onSubmit={event => {
          event.preventDefault();
          const { elements } = event.target;
          const newImg = {
            title: elements.title.value,
            description: elements.description.value,
            url: elements.url.value
          };
          console.log(newImg);
          elements.title.value = elements.description.value = elements.url.value = '';
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
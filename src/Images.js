import React, { PureComponent } from 'react';
import albumApi from './services/album-api';
import imageApi from './services/image-api';
import { addImage, removeImage } from './images/images.actions';


export default class Images extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    const { images }  = await albumApi.get(this.props.match.params.id);
    this.setState({ images });  }

  handleAdd = async ({ title, url, description }) => {
    const image = await imageApi.add({ 
      album: this.props.match.params.id,
      description,
      title,
      url 
    });
    const newState = addImage(this.state, image);
    this.setState(newState);
  }

  handleRemove = async image => {
    await imageApi.remove(image.list, image._id);
    const newState = removeImage(this.state, image._id);
    this.setState(newState);
  }

  // handleComplete = async (id, completed) => {
  //   const task = this.state.tasks.find(t => t._id === id);
  //   const updated = await taskApi.update(this.getListId(), { ...task, completed });
  //   const newState = updateTask(this.state, updated);
  //   this.setState(newState);
  // }

  render() {
    const { images } = this.state;

    return (
      // <section>
      //   <h3>Hey you have {tasks.length} tasks</h3>
      //   <ul className="items">
      //     {tasks.map(task => (
      //       <Task key={task._id} task={task} 
      //         onRemove={this.handleRemove}
      //         onComplete={this.handleComplete}
      //       />
      //     ))}
      //   </ul>
      //   <AddItem onAdd={this.handleAdd}>
      //     <input name="title"/>
      //   </AddItem>
      // </section>

      <div>
        <table>
          <tbody>
            {images.map((image, i) => {
              const imageId = image._id;
              return (
                <tr key={i}>
                  <td><a href={image.url}>{image.title}</a></td>
                  <td>{image.description}</td>
                  <td><button onClick={() => this.handleRemove(imageId)}> Remove </button></td>
                </tr>
              );
            })}
            {/* <tr>
              <td></td>
              <td><AddImage add={newImage => addImage(newImage)}/></td>
              <td></td>
            </tr> */}

          </tbody>
        </table>
      </div>
    );
  }
}
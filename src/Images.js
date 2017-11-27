import React, { PureComponent } from 'react';
import albumApi from './services/album-api';

export default class Images extends PureComponent {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    console.log('in images component');
    const { images }  = await albumApi.get(this.props.match.params.id);
    console.log('images is', images);
    this.setState({ images });  }

  // handleAdd = async ({ title }) => {
  //   const task = await taskApi.add({ 
  //     list: this.getListId(),
  //     title, 
  //     completed: false 
  //   });

  //   const newState = addTask(this.state, task);
  //   this.setState(newState);
  // }

  // handleRemove = async task => {
  //   await taskApi.remove(task.list, task._id);
  //   const newState = removeTask(this.state, task._id);
  //   this.setState(newState);
  // }

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
                  {/* <td><button onClick={() => removeImage(imageId)}> Remove </button></td> */}
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
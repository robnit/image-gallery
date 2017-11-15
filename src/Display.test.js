import { addImg } from './Display';


it('adds a new image', () => {
  const newImg = {
    title: 'test',
    description: 'test',
    url: 'test'
  } ;

  console.log('=========', newImg);
  console.log('=========', this.state);
  const newState = addImg(newImg);
  expect(newState.imageData).toEqual({
    ...newImg,
    _id : newState.imageData._id
  });

});
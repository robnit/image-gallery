export function loadImages(state, images) {
  return {
    ...state,
    imageData: images
  };
}

export function addImage(state, newImage) {
  const newState = {
    ...state,
    imageData: [
      ...state.imageData,
      newImage
    ]
  };
  return newState;
}

export function removeImage(state, unwantedImage) {
  const index = state.imageData.findIndex(image => image._id === unwantedImage._id);
  if (index === -1) return;

  const images = state.imageData.slice();
  images.splice(index, 1);

  return {
    ...state,
    imageData : images
  };
}
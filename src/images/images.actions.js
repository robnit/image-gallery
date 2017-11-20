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
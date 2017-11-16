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
export function loadAlbums(state, albums) {
  return {
    ...state,
    albums
  };
}

export function addAlbum(state, newAlbum) {
  const newState = {
    ...state,
    albums: [
      ...state.albums,
      newAlbum
    ]
  };
  return newState;
}
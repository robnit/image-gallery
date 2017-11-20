import api from './api';

export default {
  get() {
    return api.get('/albums');
  },

  add(image) {
    return api.post('/albums', image);
  },

  remove(id) {
    return api.delete(`/albums/${id}`);
  }
};
import api from './api';

export default {
  get() {
    return api.get('/images');
  },

  add(image) {
    return api.post('/images', image);
  }
};
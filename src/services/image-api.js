import api from './api';

export default {
  get() {
    console.log('in images.api');
    return api.get('/images');
  },
};
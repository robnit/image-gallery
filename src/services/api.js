// import superagent from 'superagent';
const url = '/api';

const wrap = promise => {
  return promise.then(response => response.json());
};

export default {
  get(path) {
    console.log('in api.get, url path is', `${url}${path}`);
    return wrap(
      fetch(`${url}${path}`)
    )        
      .then(response => {
        console.log('after fetch, response is', response);
        return response;
      });
  },

  // get(path) {
  //   console.log('in api.get, url path is', `${url}${path}`);
  //   return superagent.get(`${url}${path}`)
  //     .then(res=> {
  //       console.log('in res.body', res);
  //       return res.body.results;
  //     });
  // },

  post(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    );
  },

  delete(path) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'delete'
      })
    );
  },
  
  put(path, data) {
    return wrap(
      fetch(`${url}${path}`, {
        method: 'put',
        body: JSON.stringify(data)
      })
    );
  }

};
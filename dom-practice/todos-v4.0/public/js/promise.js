const ajax = (() => {
  const pxhr = (method, url, payload) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) resolve(JSON.parse(xhr.response));
      else reject(xhr.status);
    };
  });

  return {
    get(url) {
      return pxhr('GET', url);
    },

    post(url, payload) {
      return pxhr('POST', url, payload);
    },

    patch(url, payload) {
      return pxhr('PATCH', url, payload);
    },

    delete(url) {
      return pxhr('DELETE', url);
    }
  };
})();


export default ajax;

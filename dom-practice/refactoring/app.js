// 리팩토링 하기 전 코드

// const ajax = {
//   createXHR(method, url, payload) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     if (payload) {
//       xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send(JSON.stringify(payload));
//     } else xhr.send();

//     const get = url => {
//       const xhr = new XMLHttpRequest();
    
//       xhr.open('GET', url);
//       // xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send();
    
//       xhr.onload = () => {
//         if (xhr.status === 200 || xhr.status === 201) {
//           console.log(JSON.parse(xhr.response));
//         } else {
//           console.error(xhr.status);
//         }
//       };
//     };
    
//     const post = (url, payload) => {
//       const xhr = new XMLHttpRequest();
    
//       xhr.open('POST', url);
//       xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send(JSON.stringify(payload));
    
//       xhr.onload = () => {
//         if (xhr.status === 200 || xhr.status === 201) {
//           console.log(JSON.parse(xhr.response));
//         } else {
//           console.error(xhr.status);
//         }
//       };
//     };
    
//     const patch = (url, payload) => {
//       const xhr = new XMLHttpRequest();
    
//       xhr.open('PATCH', url);
//       xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send(JSON.stringify(payload));
    
//       xhr.onload = () => {
//         if (xhr.status === 200 || xhr.status === 201) {
//           console.log(JSON.parse(xhr.response));
//         } else {
//           console.error(xhr.status);
//         }
//       };
//     };
    
//     const remove = (url, payload) => {
//       const xhr = new XMLHttpRequest();
    
//       xhr.open('DELETE', url);
//       // xhr.setRequestHeader('content-type', 'application/json');
//       xhr.send();
    
//       xhr.onload = () => {
//         if (xhr.status === 200 || xhr.status === 201) {
//           console.log(JSON.parse(xhr.response));
//         } else {
//           console.error(xhr.status);
//         }
//       };
//     };


// 리팩토링 코드

const ajax = {
  // 중복 코드 하나의 메소드로 처리
  createXHR(method, url, payload) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (payload) {
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));
    } else xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log(JSON.parse(xhr.response));
      } else {
        console.error(xhr.status);
      }
    }
  },

  // 행위 메소드
  get(url) {
    this.createXHR('GET', url); 
  }, 

  post(url, payload) {
    this.createXHR('POST', url, payload);
  },

  patch(url, payload) {
    this.createXHR('PATCH', url, payload);
  },

  delete(url) {
    this.createXHR('DELETE', url);
  }
}

ajax.get('/todos');
// ajax.post('/todos', { id: 3, content: 'Angular', completed: false });
// ajax.patch('/todos/3', { completed: true });
// ajax.delete('/todos/3')
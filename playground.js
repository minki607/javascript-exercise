
// const fruits = [
// {
//   _id: 1,
//   name: 'apple',
//   avatar: 'www.com',
//   createdAt: '1995'
// },
// {
//   _id: 2,
//   name: 'mango',
//   avatar: 'www.com',
//   createdAt: '1995'
// },
// {
//   _id: 3,
//   name: 'juice',
//   avatar: 'www.com',
//   createdAt: '1995'
// },
// ]

// // function mapFruits(arr) {
// //   const html = fruits.map((fruit, index) => `<li><figure><img src='${fruit.avatar}' /><figurecaption>${fruit.name}</figurecaption></figure></li>`);
// //   return html.join('');
// // }

// // console.log(mapFruits(fruits));


function countEachElement(array) {
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++ ) {
    ++newArray[array[i]];
  }
}
const target = [3, 1, 3, 6, 6, 1, 1];
console.log(countEachElement(target));

function foo(arr) {
  const newArray = [];
  arr.forEach((value, index, arr) => {
    if(arr[index] !== 0) {
      for (let i = 0; i < arr[index]; i++) {
        newArray.push(index);
      }
    }
  });
  return newArray;
}

// const target = [0, 3, 0, 2, 0, 0, 2];

// console.log(foo(target)); 


// 주어진 배열을 순회하면서, 해당 인덱스의 값을 해당 인덱스만큼 반복하는 순열을 배열로 반환하는 함수를 작성하세요.


// function checkNull(arr) {
//   return arr.every(value => value !== null);
// }

if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (typeof callback !== 'function') throw new TypeError(callback + 'is not a function');
  }
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback.call(this[i], i, this))
  }
  };
}
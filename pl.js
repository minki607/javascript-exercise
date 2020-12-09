function ListLike(string) {
  if(!new.target) return new Error('Call me as a constructor');
  if(!string) return new Error('plz initialize me with a head value');

  this.length = 1;
  this[this.length] = string;

  this.add = function () {
    this.length += 1;
    this[this.length] = string;
  };
}

const listLike = new ListLike('domuk');

console.log(listLike);
console.log(listLike.add('yubi'));
console.log(listLike);
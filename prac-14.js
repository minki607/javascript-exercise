var line = 5;
var output = '';

for (var i = 1; i <= line; i++) {
  for (var j = 5; j >= i - 1; j--) {
    output += ' ';
  }
  for (var k = 1; k <= i; k++) {
    output += '*';
  }
  output += '\n';
}
console.log(output);

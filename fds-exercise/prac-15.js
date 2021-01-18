var line = 5;
var output = '';

for (var i = 1; i <= line; i++) {
  for (var j = 5; j >= i; j--) {
    output += ' ';
  }
  for (var k = 1; k <= (i * 2) - 1; k++) {
    output += '*';
  }
  output += '\n';
}
console.log(output);

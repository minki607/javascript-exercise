var line = 5;
var output = '';

for (var i = 1; i <= line; i++) {
  for (var j = 1; j < i; j++) {
    output += ' ';
  }
  for (var k = 5; k >= i; k--) {
    output += '*';
  }
  output += '\n';
}

console.log(output);

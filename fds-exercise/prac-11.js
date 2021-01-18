var line = 5;
var output = '';

for (var i = 1; i <= line; i++) {
  for (var j = 1; j <= i; j++) {
    output += '*';
  }
  output += '\n';
}

console.log(output);

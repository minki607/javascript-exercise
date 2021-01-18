// 찍히긴 찍히는데 조금 추후에 수정 예정
var line = 5;
var output = '';

for (var i = line; i >= 0; i--) {
  for (var j = 0; j <= 5 - i; j++) {
    output += ' ';
  }
  for (var k = 1; k <= (i * 2) - 1; k++) {
    output += '*';
  }
  output += '\n';
}
console.log(output);

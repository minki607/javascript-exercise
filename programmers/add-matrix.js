const addMatrix = (matrix1, matrix2) =>
  matrix1.map((row, y) => row.map((v, x) => v + matrix2[y][x]));

function solution(arr1, arr2) {
  return addMatrix(arr1, arr2);
}
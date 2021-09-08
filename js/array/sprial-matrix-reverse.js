/*
    3). Print matrix in spiral form e.g. {{1,2,3},{4,5,6},{7,8,9}} Output . 1,2,3,6,9,8,7,4,5    
    37). Given an m*n matrix, print the matrix in reverse spiral form using recursion.
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function sprialMatrix(arr) {

  if (arr.length && arr[0].length) {
    arr[0].forEach(item => {
      console.log(item);
    });

    arr.shift();
    arr.forEach(item => {
      console.log(item.pop());
    });

    sprialMatrix(reverseMatrix(arr));
  }
  return;
}

function reverseMatrix(mat) {
  mat.forEach(item => {
    item.reverse();
  });
  mat.reverse();
  return mat;
}

sprialMatrix(matrix);


// Second Methods
// var a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// function sprialPrint(arr, i, j, heading) {
//   if (!arr[i] || !arr[i][j]) return;
//   arr[i][j] = null;
//   switch (heading) {
//     case 0: // Right
//       sprialPrint(arr, i, j + 1, 0);
//     case 1: // Down
//       sprialPrint(arr, i + 1, j, 1);
//     case 2: // Left
//       sprialPrint(arr, i, j - 1, 2);
//     case 3: // Up
//       sprialPrint(arr, i - 1, j, 3);
//     default:
//       sprialPrint(arr, i, j + 1, 0);
//   }
// }
// sprialPrint(a, 0, 0)
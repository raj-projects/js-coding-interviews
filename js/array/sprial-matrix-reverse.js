/*
    3). Print matrix in spiral form e.g. {{1,2,3},{4,5,6},{7,8,9}} Output . 1,2,3,6,9,8,7,4,5    
    37). Given an m*n matrix, print the matrix in reverse spiral form using recursion.
*/

const matrix = [  
                  [1,2,3],
                  [4,5,6],
                  [7,8,9]  
               ];

function sprialMatrix(arr) {
  
  if(arr.length && arr[0].length){
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
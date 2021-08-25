/*
    3. Print matrix in spiral form e.g. {{1,2,3},{4,5,6},{7,8,9}} Output . 1,2,3,6,9,8,7,4,5
*/

let data = [[1,2,3], [4,5,6], [7,8,9]];

function sprial(matrix) {
  let arr = [];
  
  while(matrix.length) {
    arr.push(
      ...matrix.shift(),
      ...matrix.map(a => a.pop()),
      ...(matrix.pop() || []).reverse(),
      ...matrix.map(a => a.shift()).reverse()
    );
    console.log(arr);
  }
  return arr;
}

let res = sprial(data);
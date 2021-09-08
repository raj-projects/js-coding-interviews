/*
    41 – Check if an array is stack sortable. An array A[] is said to be stack sortable if it can be stored in another array B[], using a temporary stack S.
*/

function solution(array) {
    let stack = [];
    let id = 0;
    for (let i = 1; i <= array.length; i++) {
        if (i !== array[id]) {
            stack.push(i);
        } else {
            id++;
            while (stack.length && stack[stack.length - 1] === array[id]) {
                id++;
                stack.pop();
            }
        }
    }
    return `Array is stack sortable ${id === array.length}`;
}
console.log(solution([1, 3, 2]));
console.log(solution([3, 1, 2]));

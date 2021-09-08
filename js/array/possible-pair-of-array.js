/*
    Given an array A[] of integers find sum of product of all pairs of array elements
    Input : A[] = {1, 3, 4}
    Output : 19
    Possible Pairs : (1,3), (1,4), (3,4)
    Sum of Product : 1*3 + 1*4 + 3*4 = 19
*/

function printPairs(arr, n) {
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
        console.log(`${arr[i]*arr[j]}`);
        }
    }
}

let arr = [1,2,3];
let n = arr.length;

printPairs(arr, n);
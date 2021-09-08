/*
    24 – Given an array A[] of integers find sum of product of all pairs of array elements
    Input : A[] = [1, 3, 4]
    Output : 19
    Possible Pairs : (1,3), (1,4), (3,4)
    Sum of Product : 1*3 + 1*4 + 3*4 = 19
*/

// function findProductSum(A, n) {
//     // calculating array sum (a1 + a2 ... + an)
//     let array_sum = 0;
//     for (let i = 0; i < n; i++) {
//         array_sum = array_sum + A[i];
//     }
//     // calcualting square of array sum
//     // (a1 + a2 + ... + an)^2
//     let array_sum_square = array_sum * array_sum;
//     // calcualting a1^2 + a2^2 + ... + an^2
//     let individual_square_sum = 0;
//     for (let i = 0; i < n; i++) {
//         individual_square_sum += A[i] * A[i];
//     }
//     // required sum is (array_sum_square -
//     // individual_square_sum) / 2
//     return (array_sum_square - individual_square_sum) / 2;
// }

// const arr = [1, 3, 4];
// const n = 10;

// console.log(findProductSum(Arr, n))



function findProductSum(A, n) {
    let product = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            product = product + A[i] * A[j];
        }
    }
    return product;
}

const arr = [1, 3, 4];
const n = 10;
console.log(findProductSum(Arr, n))
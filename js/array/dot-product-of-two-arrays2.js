/*
    40 – Find the dot product of two arrays - mean array1[i] * array2[i].(if the length of the two arrays are not equal then the loop should gofor the lesser length).
*/

function dot_product(vector1, vector2) {
    let length =
        vector1.length < vector2.length ? vector2.length : vector1.length;
    var result = 0;
    for (var i = 0; i < length; i++) {
        let v1 = vector1[i] === undefined ? 1 : vector1[i];
        let v2 = vector2[i] === undefined ? 1 : vector2[i];
        result += v1 * v2;
    }
    return result;
}
console.log(dot_product([1, 2, 3], [1, 2, 3, 4]));
console.log(dot_product([2, 4, 6], [2, 4, 6]));
console.log(dot_product([1, 1, 1], [0, 1, -1]));



// Second Method
// function dotProduct(vect_A, vect_B) {
//     let product = 0;
//     let n;

//     if (vect_A.length === vect_B.length) {
//         n = vect_A.length;
//     } else if (vect_A.length < vect_B.length) {
//         n = vect_A.length;
//     } else {
//         n = vect_B.length
//     }
//     for (let i = 0; i < 3; i++)
//         product = product + vect_A[i] * vect_B[i];
//     return product;
// }
// let vect_A = [3, -5, 4];
// let vect_B = [2, 6, 5];
// console.log(dotProduct(vect_A, vect_B));
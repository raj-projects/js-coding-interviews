/*
    39 – Find the dot product of two arrays - mean array1[i] * array2[i]
*/

function dot_product(vector1, vector2) {
    var result = 0;
    for (var i = 0; i < vector1.length; i++) {
        result += vector1[i] * vector2[i];
    }
    return result;
}
console.log(dot_product([1, 2, 3], [1, 2, 3]));

/*
    38 - Find the smallest subarray whose sum is equal or greater than the target value.
*/

function sumArray(arr, target) {
    let obj = {};
    for (let [index, num] of Object.entries(arr)) {
        if (obj[num] !== undefined) {
            return [obj[num], num];
        }
        obj[target - num] = num;
    }
    return obj;
}
console.log(sumArray([7, 5, 4, 3, 1], 9));

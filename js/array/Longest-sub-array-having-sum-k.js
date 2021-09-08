/*
    42 – Longest sub-array having sum k. Given an array arr[] of size n containing integers find the length of the longest sub-array having sum equal to the given value k.
*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

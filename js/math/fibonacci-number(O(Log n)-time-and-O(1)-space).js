/*
    47. Count Fibonacci numbers in given range in O(Log n) time and O(1) space.
*/

function countFibs(low, high) {
    let f1 = 0,
        f2 = 1,
        f3 = 1;
    let result = 0;
    while (f1 <= high) {
        if (f1 >= low) {
            result++;
        }
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
    }
    return result;
}
let low = 10;
let high = 100;
console.log(countFibs(low, high));

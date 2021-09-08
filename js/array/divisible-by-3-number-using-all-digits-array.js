/*
    15 – Possible to make a divisible by 3 number using all digits in an array
*/

function divByThree(array) {
    return array.filter(function (a) {
        return !(a % 3);
    });
}
let arr = [4, 60, 70, 90, 40];
console.log(divByThree(arr));

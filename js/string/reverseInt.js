/*
    Print number of a number in reverse order.
*/

function reverseInt(num) {
    let revInt = num.toString().split('').reverse().join('');

    return parseInt(revInt)*Math.sign(num);
}

console.log(reverseInt(-12345));
/*
    20)Find if a given number is Armstrong number - Example: 371 = 3^3 + 7^3 + 1^3
                 = 3*3*3 + 7*7*7 + 1*1*1

    Formulla = abdc = an + bn + cn + dn
*/

const number = prompt('Please enter a number');
const digitCount = number.toString().length; // find length of given number
var temp = number;
var sum = 0;

while(temp > 0) {
    var digit = temp%10; // reminder 3
    sum += digit**digitCount; // power of given number of length
    temp = parseInt(temp/10);
}

if(sum == number) {
    console.log(`${number} is an armstrong number.`);
} else {
    console.log(`${number} is not an armstrong number.`);
}





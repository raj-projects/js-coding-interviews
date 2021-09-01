/*
    20)Find if a given number is Armstrong number.
*/

function isPrime(number) {
    if (number == 1) {
        console.log(`${number} is not prime nor composite`);
    } else if (number < 1) {
        console.log(`${number} is not prime number`);
    } else {
        for (i = 2; i < number; i++) {
            if (number % i == 0) {
                var res = `${number} is not prime number`;
                break;
            } else {
                var res = `${number} is prime number`;
            }
            console.log(res);
        }
    }
}

// const number = prompt('Please enter a number');
isPrime(15)

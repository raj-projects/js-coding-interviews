/*
    14) Missing characters to make a string Pangram
*/

var allAlphabets = 'abcdefghijklmnopqrstuvwxyz';

function findWhatsMissing(s) {

    // remove special charecter
    // s = s.replace(/[^a-zA-Z]/g, "");
    
    s = s.toLowerCase();

    return allAlphabets.split('').filter((letter) => {
        return s.indexOf(letter) === -1;
    });
}

const res = findWhatsMissing('w f v h y');
console.log(res.join(''));
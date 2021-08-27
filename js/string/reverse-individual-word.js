/*
    46). Reverse individual words. Given a string str, we need to print reverse of individual words.
*/

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

const strValue = "Ravi had been saying that he had been there";
let result = reverseWords(strValue)

console.log(result);
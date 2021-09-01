/*
     check string is palindrome or not in a given string;
     Input: "aabbcbbaa"
*/

const input = 'aabbcbbaa';

function isPalindrome(str) {
    let result = '';
    let revStr = str.split('').reverse().join('');

    if(revStr == str){
      return 'is Palindrome';
    } else {
      return 'Not Palindrome';
    }
}

console.log(isPalindrome(input));
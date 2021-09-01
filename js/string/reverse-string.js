/*
    Print words of a string in reverse order. Let there be a string say “I AM A TESTER So, the output should be TESTER A AM I”
*/

const strValue = 'I AM A TESTER';

let revString = () => strValue.split(' ').reverse().join(' ');

console.log(revString());
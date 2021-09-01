/*
    20). Given a string and a delimiter character. Split the string based on the delimiter and print the list of resulting sub strings.
*/


const strVal = "Ram;Raj;Mohan";

function newSubStr(str) {
  return str.split(';').join(' ')
}

console.log(newSubStr(strVal));
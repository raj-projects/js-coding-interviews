/*
  2) First unique character of a string. E.g. aabdcce . Output : d
*/

// const str = 'acccadc';

// function firstUniqueChar(str) {
  // const obj = {};

  // for (let char of str) {
  //   obj[char] = obj[char] + 1 || 1;
  // }
  // for (let char in obj) {
  //   if (obj[char] === 1) {
  //     return char;
  //   }
  // }
  // return -1;
// }

// console.log('First Unique Char => ', firstUniqueChar(str));


/*=====================================
    Second Method
=====================================*/
const name = 'acccadc';

function nonRepeatingChar(str) {
  for (i = 0; i < str.length; i++) {
    let j = str.charAt(i);
    if (str.indexOf(j) == str.lastIndexOf(j)) {
      return j;
    }
  }
}

console.log('First Unique Char => ' + nonRepeatingChar('acccadc'));

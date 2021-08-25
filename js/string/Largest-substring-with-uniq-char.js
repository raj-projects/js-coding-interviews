/*
6) Largest substring with unique characters e.g. aaabcbdeaf Output : cbdeaf
*/

let mixedStr = 'aaabcbdeaf';
let result = '';

function nonRepeated(str) {
  for(i= 0; i< str.length; i++) {
    let j = str.charAt(i);
    
    if(str.indexOf(j) === str.lastIndexOf(j)) {
      result += j;
    }
  }
  return result;
}

console.log('Largest Sub-string with unique Char => ', nonRepeated(mixedStr));
/*
    Find the first repeated word in a string. Input : "Ravi had been saying that he had been there" .Output : had
*/


const strValue = 'Ravi had been saying that he had been there';

function repetedWord(str) {
    const arr = str.split(' ');
    let charMap = {};
    let maxNum = 0;
    let maxChar ='';
    
    arr.forEach(char => {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    })
    
    for(let char in charMap) {
      if(charMap[char] > maxNum) {
        maxNum = charMap[char];
        maxChar = char;
      }
    }
    console.log(maxChar)
}
  

/*=====================================
    Second Method
=====================================*/
// const repetedWord = (str) => {
//     let strToArr = str.split(' ');

//     return strToArr.find((word, index) => {
//         return strToArr.slice(0, index).includes(word);
//     })
// }



console.log(repetedWord(strValue))


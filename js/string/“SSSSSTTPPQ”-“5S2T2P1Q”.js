/*
    Given Input,print the following input: “SSSSSTTPPQ” Output: “5S2T2P1Q”.

*/

// function wordCount(str) {
//     let dataArr = str.split('');
//     let count = 0;
//     let resObj = {};
//     let resArr = [];
//     let result = '';

//     for (var char of dataArr) {
//         if (resObj[char]) {
//             count = count + 1;
//             resObj[char] = count;
//         } else {
//             count = 1;
//             resObj[char] = count;
//         }

//         if (resArr.indexOf(char) === -1) {
//             resArr.push(char);
//         }
//     }

//     for (var res of resArr) {
//         result += `${resObj[res]}${res} `
//     }
//     console.log(result)
// }

// wordCount('SSSSSTTTPPQ')



/*=====================================
    Second Method
=====================================*/
function nonRepeated(str) {
    const arr = str.split('');
    let charMap = {};
    let count = 0;
    let result = '';
    
    arr.forEach(char => {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;     
      }
    })
    
    for(let char in charMap) {
      result += `${char}${charMap[char]} `
    }
    console.log(result);
  }
  
  nonRepeated('aaaaabbbbbcdeeff');
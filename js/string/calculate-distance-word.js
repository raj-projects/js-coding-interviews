/*
    Minimum distance between 2 words counting the number of characters from middle of both words. E.g. ABC is XYZ and ABC & XYZ are two distinct words. 
*/

let word = "abc is abc and then xyz";
let w1 = 'abc';
let w2 = 'xyz';

function findIndexOfWord(str) {
  let matchedIndex = 0;
  console.log(str);
  
  for(let i=0; i<word.split(" ").length; i++) {
    if(str === word.trim().split(" ")[i]) {
      matchedIndex = i;
    }
  }
  return matchedIndex;
}

function calculateDistance(w1, w2) {
    w1Index = findIndexOfWord(w1);
    w2Index = findIndexOfWord(w2);
    
    console.log(w1Index)
    
    let distance = w1Index > w2Index ? w1Index-w1Index-1 : w2Index-w1Index-1;
    console.log(distance)
  }

calculateDistance(w1, w2)
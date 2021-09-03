let word = "abc is abc and then xyz";

w1 = 'abc';
w2 = 'xyz';

function calculateDistance(w1, w2) {
  w1Index = findIndexOfWord(w1);
  w2Index = findIndexOfWord(w2);
  
  console.log(w1Index)
  
  let distance = w1Index > w2Index ? w1Index-w1Index-1 : w2Index-w1Index-1;
  console.log(distance)
}

function findIndexOfWord(data) {
  let matchedIndex = 0;
  console.log(data);
  
  for(let i=0; i<word.split(" ").length; i++) {
    if(data === word.trim().split(" ")[i]) {
      matchedIndex = i;
    }
  }
  return matchedIndex;
}

calculateDistance(w1, w2)
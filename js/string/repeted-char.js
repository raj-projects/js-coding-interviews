function repeatedChar(str) {
    const arr = str.split('');
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
  
  repeatedChar('aaaaabbbbbcdeeff');
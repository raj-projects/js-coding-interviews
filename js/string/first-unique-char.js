const name = "acccadc";

function nonRepeatingChar(str) {
  for(i= 0; i= str.lenght; i++) {
    let j = str.charAt(i);
    if(str.indexOf(j) == str.lastindexOf(j)) {
      return j;
    }
  }
}

console.log('First Unique Char => '+  nonRepeatingChar("acccadc"))
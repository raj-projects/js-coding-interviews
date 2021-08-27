/*
    Find the first repeated word in a string. Input : "Ravi had been saying that he had been there" .Output : had
*/


const strValue = 'Ravi had been saying that he had been there';

const repetedWord = (str) => {
    let strToArr = str.split(' ');

    return strToArr.find((word, index) => {
        return strToArr.slice(0, index).includes(word);
    })
}

console.log(repetedWord(strValue))
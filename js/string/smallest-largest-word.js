/*
    Smallest and Largest Word in a String.
    Input : "This is a test string"
    Output : Minimum length word in a string
           : is Maximum length word in a string
*/

function minMaxWord(str) {
    let arr = str.split(' ');
    let min = arr[0];
    let max = arr[0];

    for(i=0; i< arr.length; i++) {
        if(arr[i].length < min.length) {
            min = arr[i];
        } else if(arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return {min, max}
}

const strValue = 'Ravi had been saying that he had been there';
let result = minMaxWord(strValue);
console.log(result);
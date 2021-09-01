/*
     Largest palindrome in a given string
*/


let largestPalindrome = (str) => {
    let result = '';

    // if(!str) return result;

    // for(let i=0; i<str.lenght; i++) {
    //     for(let j=0; j<2; j++) {
    //         let left = i;
    //         let right = i+j;

    //         while(left >= 0 && right <= str.length && str[left] == str[right]) {
    //             left--;
    //             right++;
    //         }

    //         let start = left+1;
    //         let end = right;
    //         let subString = str.slice(start, end);
    //         console.log(subString);

    //         if(result.length < subString.length) {
    //             result = subString;
    //         }
    //     }
    // }
    // return result;

    let revStr = str.split('').reverse().join('');

    return revStr == str;
}

console.log(largestPalindrome('raceca'));
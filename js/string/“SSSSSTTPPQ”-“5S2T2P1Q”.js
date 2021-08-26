/*
    Given Input,print the following input: “SSSSSTTPPQ” Output: “5S2T2P1Q”.

*/

let dataArr = "SSSSSTTPPQ";
let hashmap = {};
let count = 1;
let results = '';
let resArr = [];

for(let char of dataArr) {
    // let prevChar = char;

    if(resArr.indexOf(char) === -1) {
        resArr.push(char)
    }

    if(hashmap[char]) {
        count = count+1;
        hashmap[char] = count;
        console.log(results);
    } else {
        count = 1;
        hashmap[char] = count;
    }
}

for (let dataArr of resArr) {
    results += `${hashmap[dataArr]}${dataArr}`
}

console.log(hashmap);
console.log('“SSSSSTTPPQ” =>', results);
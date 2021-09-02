// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}



// Second Method
// function isAnagramx (str1,str2){
//     const arr1 = str1.split('').sort()
//     const arr2 = str2.split('').sort()
//     return arr1.every((value,index) => value === arr2[index])
// }

// const isAnagramx = (str1,str2) => str1.split('').sort().every((value,index) => value ===  str2.split('').sort()[index])
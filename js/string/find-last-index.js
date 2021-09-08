/*
    19). Given a string str and a character x, find last index of x in str.
*/

function findLastIndex(str, x) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == x) {
            return i;
        }
    }
    return -1;
}
findLastIndex('abcdxyz', 'x')


// second Method
// function findLastIndex(str, x) {
//     let index = -1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === x) {
//             index = i;
//         }
//     }
//     return index;
// }
// findLastIndex('abcdxyz', 'x')
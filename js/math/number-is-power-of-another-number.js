/*
    15) Check if a number is a power of another number
*/

// function isPower(x, y) {
//     var res1 = parseInt(Math.log(y)) / parseInt(Math.log(x));
//     var res2 = Math.log(y) / Math.log(x);
//     return (res1 == res2);
// }

// // devider code
// if(isPower(25, 625)) {
//     console.log('True');
// } else {    
//     console.log('False');
// }


// 2nd way
function isPower(x, y) {
    let res1 = parseInt(Math.log(y)) / parseInt(Math.log(x));
    let res2 = Math.log(y) / Math.log(x);
    return res1 === res2;
}
console.log(isPower(26, 625));
   
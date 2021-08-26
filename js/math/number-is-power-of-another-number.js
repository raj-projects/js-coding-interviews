/*
    15) Check if a number is a power of another number
*/

function isPower(x, y) {
    var res1 = parseInt(Math.log(y)) / parseInt(Math.log(x));

    var res2 = Math.log(y) / Math.log(x);

    // compare to the result1 or result2 both are equal
    return (res1 == res2);
}

// devider code
if(isPower(25, 625)) {
    console.log('True');
} else {    
    console.log('False');
}
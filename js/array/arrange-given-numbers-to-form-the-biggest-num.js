/*
    13 - Arrange given numbers to form the biggest number. Input- List of 
    numbers : {1, 34, 3, 98, 9, 76, 45, 4} 
    Output – 9 98 76 45 4 34 3 1
*/

function formBiggestNum(arr) {
    return arr.sort((a, b) => {
        return `${b}${a}` - `${a}${b}`;
    }).join(" ")
}
console.log(formBiggestNum([1, 34, 3, 98, 9, 76, 45, 4]))
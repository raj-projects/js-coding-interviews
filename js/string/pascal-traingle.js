/*
    34 – Return element from a Pascal Traingle - Given 5,2 as input return 2nd element from 5th row
*/

function pascal(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        let temp = 1;
        for (let j = 1; j <= i; j++) {
            str += temp + " ";
            temp = (temp * (i - j)) / j;
        }
        str += "\n";
    }
    return str;
}
console.log(pascal(n));

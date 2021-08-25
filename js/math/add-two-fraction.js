/*
    8) Program to add two fractions
*/

let num1 = 3;
let den1 = 5;
let num2 = 4;
let den2 = 15;

function gcd(a, b) {
    if(b == 0) {
        return a;
    }
    return gcd(b, a%b);
}

function lowest(den3, num3) {
    let common_factor = gcd(num3, den3);
    den3 = parseInt(den3/common_factor);
    num3 = parseInt(num3/common_factor);
    let res = `${den3}/${num3}`;
    return res;
}

function addFractions(n1, d1, n2, d2) {
    let d3 = gcd(d1, d2);
    console.log(d3);
    d3 = d1/d3*d2;
    console.log(d3);
    let num3 = (n1*(d3/d1)+n2*(d3/d2));
    const result = lowest(d3, num3);
}

addFractions(num1, den1, num2, den2)
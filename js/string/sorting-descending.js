/*
    Given a string, sort it in descending order. Input : mupursingh Output : uusrpnmihg
*/

const str = "mupursingh";

function strSorting(str) {
    var descendingOrder = str.split('').sort().reverse().join('');
    return descendingOrder;
}

console.log(strSorting(str));
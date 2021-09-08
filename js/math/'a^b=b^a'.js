// function countPairsBruteForce(X, Y, m, n) {
//     let ans = 0;
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (Math.pow(X[i], Y[j]) > Math.pow(Y[j], X[i])) {
//                 ans += 1;
//             }
//         }
//     }
//     return ans;
// }

// console.log(countPairsBruteForce(4, 5, 2, 3))


// second Method
function countPairsBruteForce(X, Y) {
    let ans = "";

    for (let i = 0; i < X.length; i++) {
        for (let j = 0; j < Y.length; j++) {
            if ((Math.pow(X[i], Y[j]) === Math.pow(Y[j], X[i]))) {
                ans += `(${X[i]}, ${Y[j]}) `;
            }
        }
    }
    return ans;
}
const x = [2, 1, 6];
const y = [1, 5];
console.log(countPairsBruteForce(x, y));

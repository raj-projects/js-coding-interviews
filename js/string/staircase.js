/*
    Write a program that prints a staircase of size .
*/

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let step = ' ';

        for (let j = 0; j < n; j++) {
            if (j <= i) {
                step += '*'
            } else {
                step += ' ';
            }
        }
        console.log(step)
    }
}
staircase(5)


// second Method
// function stairCase2(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(" ".repeat(n - i) + "#".repeat(i));
//     }
// }
// stairCase2(5);

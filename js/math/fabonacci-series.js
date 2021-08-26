/*
    17) Find the nth Number in fibonacci series using Iterative and Recursive Approach.

    Formula => f(n) = f(n-2) + f(n-1) 
*/

const nthFib = (n) => {
    const fibArray = [0, 1];

    for (let i = 2; i < n; i++) {

        // f(n) = f(n-2) + f(n-1) // Formula
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }
    return fibArray;
}

console.log(nthFib(10));

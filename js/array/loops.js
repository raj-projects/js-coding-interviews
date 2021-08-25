/*
    Loops: for()
           forEach()
           for in()
           for of()
*/

const loopArr = [5, 22, 3, 43, 72, 8, 88, 90, 4, 6, 33];

// For Loop
for(let i=0; i< loopArr.length; i++) {
    console.log('For Loop => ', loopArr[i]);
}

// forEach Loop
loopArr.forEach(res => {
    console.log('forEach Loop => ', res);
});

// for in Loop
for(let i in loopArr) {
    console.log('For in Loop => ', loopArr[i]);
}

// for of Loop
for(let i of loopArr) {
    console.log('For of Loop => ', i);
}
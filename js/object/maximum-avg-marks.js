/*
Given an array of Employees with name,marks. Find out the maximum average marks from the list. 
{
    {"Alia","-678"},
    {"Bobby","100"},
    {"Alex","223"},
    {"Alex","-23"},
    {"Bobby","723"}
};
Avg Bobby = 315,Alex= 100,Alia=-678. Result: 315
*/


function getScores(arr) {
    let scores = {};
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!scores.hasOwnProperty(arr[i][0])) {
            scores[arr[i][0]] = [arr[i][1]];
        } else {
            scores[arr[i][0]].push(arr[i][1]);
        }
    }
    for (let key in scores) {
        let arr = scores[key];
        let total = arr.reduce((curr, item) => {
            return curr + parseInt(item);
        }, 0);
        scores[key] = Math.floor(total / arr.length);
    }
    max = Object.values(scores).sort((a, b) => b - a);
    return max[0];
}

const students = [
    {Alia:"-678"},
    {Bobby:"100"},
    {Alex:"223"},
    {Alex:"-23"},
    {Bobby:"723"}
];
console.log(getScores(students));

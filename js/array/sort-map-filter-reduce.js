/*
    sort(), 
    map(), 
    filter() & 
    reduce()
*/

const orignalArr = [5, 22, 3, 43, 72, 8, 88, 90, 4, 6, 33];

let arrSort = orignalArr.sort((a, b)=> a-b);
console.log('Sorting valye in Array (sort()) => ', arrSort);

let arrMap = orignalArr.map(a => a*2);
console.log('Create New Array => (map()) ', arrMap);


let arrFilter = orignalArr.filter(a => a%2 === 0);
console.log('filter value in Array (filter()) => ', arrFilter);


let arrReduce = orignalArr.reduce((a, b)=> a-b);
console.log('Calculating value in Array => (reduce()) ', arrReduce);


// mixed all
const orignalArr2 = orignalArr
.sort((a, b)=> a-b)
.map(a => a*2)
.filter(a => a%2 === 0)
.reduce((a, b)=> a+b)

console.log('mixed all methods => ', orignalArr2)
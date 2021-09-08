const arr = ['Hello', 'Hi', 'Rahul'];

function lengthOfItems(a) {
    return a.map(item => item.length);
}

console.log(lengthOfItems(arr));
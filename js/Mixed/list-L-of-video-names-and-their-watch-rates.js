/*
    50). Given a list L of video names and their watch rates, write a function that will return the videos with the top 10 watch rates. Video names may appear more than once. Example:
    L = [(‘abc’, 10), (‘def’, 15), (‘ghi’, 10), (‘abc’, 12), …, (‘xyz’,100)]
    The function should return [‘xyz’, ‘abc’, …, ‘def’, ‘ghi’]
*/

let videos = [
    ['abc', 10],
    ['def', 15],
    ['ghi', 10],
    ['abc', 12],
    ['xyz', 100],
];
function findTop(videos, filterBy) {
    let hash = {};
    let result = [];
    for (let arr of videos) {
        if (hash[arr[0]]) {
            hash[arr[0]] += arr[1];
        } else {
            hash[arr[0]] = arr[1];
        }
    }
    Object.entries(hash)
        .sort((a, b) => b[1] - a[1])
        .filter((item, index) => {
            return index !== filterBy ? result.push(item[0]) : null;
        });
    return result;
}

console.log(findTop(videos, 3));
/*
    Find winner of an election where votes are represented as candidate names. Given an array of names of candidates in an election.A candidate name in array represents a vote casted to the candidate. Print the name of candidates received Max vote. If there is tie, print lexicographically smaller name.
*/

function findWinner(votes) {
    let hash = {};
    let maxVal = 0;
    let winner = "";
    for (let name of votes) {
        if (!hash.hasOwnProperty(name)) {
            hash[name] = 1
        } else {
            hash[name]++
        }
    }

    for (let [key, value] of Object.entries(hash)) {
        if (value > maxVal) {
            maxVal = value;
            winner = key;
        } else if (value === maxVal && winner > key) {
            winner = key;
        }
    }
    return winner;
}

let votes = ["john", "jo", "johnny", "jackie", "johnny", "john", "jackie", "jamie", "jamie", "john", "jo", "jo", "jo", "johnny", "jamie", "johnny", "john"];

console.log(findWinner(votes))

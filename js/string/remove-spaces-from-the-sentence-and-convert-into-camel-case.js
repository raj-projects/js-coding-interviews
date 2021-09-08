/*
    21). Given a sentence, task is to remove spaces from the sentence and rewrite in Camel case. It is a style of writing where we don’t have spaces and all words begin with capital letters.
*/

const strVal = 'ravi had been saying that he had been there';

function camelCase(s) {
    var n = s.length;
    var str = '';
    for (var i = 0; i < n; i++) {
        if (s[i] == ' ') {
            str += s[i + 1].toUpperCase();
            i++;
        }
        else {
            str += s[i];
        }
    }
    return str;
}

console.log(camelCase(strVal))

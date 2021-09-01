/*
     Largest palindrome in a given string
*/



function is_Palindrome(str) {
    var rev = str.split(' ').reverse().join(' ');
    return str === rev;
}

function longest_palindrome(str) {
    let max_length = 0;
    let result = '';

    for(var i = 0; i < str.length; i++) {
        var subs = str.substr(i, str.length);

        for(var j = subs.length; j >= 0; j--) {
            var subStr = subs.substr(0, j);

            if(subStr.length <= 1) continue;

            if(is_Palindrome(subStr)) {
                if(subStr.length > max_length) {
                    max_length = subStr.length;
                    result = subStr;
                }
            }
        }
    }
    return result;
}

console.log(longest_palindrome("This is ba0ab racecar"));
  
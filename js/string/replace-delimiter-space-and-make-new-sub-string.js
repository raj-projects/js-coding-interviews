/*
    20). Given a string and a delimiter character. Split the string based on the delimiter and print the list of resulting sub strings.
*/


function newSubStr(str, dl) {
  return str.split(dl).join(' ')
}
const strVal = "Ram;Raj;Mohan";
const d = ';';

console.log(newSubStr(strVal, d));



// Second Method
// function splitStrings(str, dl) {
//   var word = '';
//   var num = 0;
//   str = str + dl;
//   var l = str.length;
//   var substr_list = [];
//   for (var i = 0; i < l; i++) {
//     if (str[i] != dl) word = word + str[i];
//     else {
//       if (word.length != 0) substr_list.push(word);
//       word = '';
//     }
//   }
//   return substr_list;
// }

// var str = 'geeks;for;geeks';
// var dl = ';';

// var res = splitStrings(str, dl);

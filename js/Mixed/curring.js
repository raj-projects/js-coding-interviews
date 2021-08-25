/* 
    sum(5)(10)(3)(7)
*/


// First Method 
function sum(a) {
    return function(b) {
        return function(c) {
            return function(d) {      
                return a+b+c+d;        
            }
        }
    }
}

const add = sum(5)(10)(3)(7);
console.log('Currying Add', add);



// second method
const sub = (a) => (b) => (c) => (d) => a-b-c-d;

const minus = sub(5)(10)(3)(7);
console.log('Currying Sub', minus);


/*
    Event Propagation: 1) Event Capturing (Trickling)
                       2) Event Bubbling
*/

// const parentDiv = document.querySelector('#parentDiv');
// const childDiv = document.querySelector('#childDiv');
// const button = document.querySelector('#button');


// const parantCall = () => {
//     console.log('Parent Clicked');
// }

// const childCall = () => {
//     console.log('Child Clicked');
// }

// const buttonCall = () => {
//     console.log('Button Clicked');
// }

// parentDiv.addEventListener('click', parantCall, true);
// childDiv.addEventListener('click', childCall, true);
// button.addEventListener('click', buttonCall, true);



// short way
document.querySelector('#parentDiv').addEventListener('click', () => { 
    console.log('Parent Clicked'); 
}, true);

document.querySelector('#childDiv').addEventListener('click', () => {
    console.log('Child Clicked');
}, true);

document.querySelector('#button').addEventListener('click', () => {
    console.log('Button Clicked');
}, true);
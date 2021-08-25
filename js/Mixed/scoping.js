function a() {
    
    function c(){
        const b = 30;
        console.log(b);
        if(true){
            var aa = 100;
        }
    }
    const b = 20;
    console.log(b);
    c();
}

// console.log(aa)
const b = 10;
// console.log(b);
a();

// ============================================

function grandfather() {
    var name = 'Hammad';
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here
            var likes = 'Coding';
        }
    }
}

// IIFE (Immediately-Invoked Function Expression)
(function(window) {
    console.log("IIFE")
})(this);
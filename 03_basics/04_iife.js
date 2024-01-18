// Immediately Invoked Function Expressions (IIFE)
// many time we face the global scope polution.IIFE is used for remove global scope polution(used for removing global scope variable)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // if you not used semicolan(;) then if you used second iife then program show error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('izhar')

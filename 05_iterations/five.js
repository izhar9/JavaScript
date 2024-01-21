const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){   // it take callback function(in callback function, function name is note given so that function call itself back(taki fuction apneaap ko baar baar call kar sake jab tak array me element hai) )
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   // give function reference not execute function (like printMe())

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
// Return longest word


let str = "The quick brown fox jumped over the lazy dog";
let arr = str.split(" ");

let result = "";

arr.forEach((val) => {
    if (result.length < val.length) {
        result = val;
    }
});

console.log(result);

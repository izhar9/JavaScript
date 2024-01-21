// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [11, 12, 13, 4, 5]

for (const num of arr) {
    console.log(num);   // for of loop me direct value milta hai array ka but for in loop me direct key(index) milta hai
}
console.log("for in loop");

for (const num in arr) {
    console.log(num);   // for of loop me direct value milta hai array ka but for in loop me direct key(index) milta hai
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()  //it avoid duplicate value 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  // object is not direct iterate with for of loop
//     console.log(key, ':-', value);
    
// }
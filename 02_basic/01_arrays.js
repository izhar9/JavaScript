// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   // add element in last
// myArr.push(7)
// myArr.pop()     // remove element in last

// myArr.unshift(9)    // add element in starting [0 index]
// myArr.shift()  // // remove element in starting[0 index]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // it also change the type (convert object to string) 

// console.log(myArr);
// console.log(typeof(myArr));
// console.log(newArr);
// console.log(typeof(newArr));


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // The given starting number will be the starting point, and the number specified for how far to go will be decreased by 1.And slice does not change original value

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    //The given starting number will be the starting point, and the specified ending number will be the point to which it will go. And splice change original value
// console.log(myn2);
// console.log("C ", myArr);




const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))   // it convert in anything in array 
console.log(Array.from({name: "hitesh"})) // interesting(It give empty array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //Returns a new array from a set of elements.
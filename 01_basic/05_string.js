const name = "izhar"
const repoCount = 23

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('izhar-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   izhar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://izhar.com/hitesh%idrisi"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const gameName1 = new String('izhar-hc-com')
console.log(gameName1.split('-'));



// string 
/*
length: The length property of a string returns the number of characters in the string. It's a property, not a method, but it's an essential part of working with strings.
const message = "Hello, JavaScript!";
const length = message.length; // 17

charAt(index): 
The charAt() method returns the character at a specified index in the string. String indices are zero-based.
const word = "JavaScript";
const char = word.charAt(2); // "v"

substring(start, end): 
The substring() method extracts a portion of a string between two specified indices (start and end).
const text = "Hello, World!";
const result = text.substring(0, 5); // "Hello"

split(separator): 
The split() method divides a string into an array of substrings based on a specified separator.
const fruits = "apple,banana,cherry";
const fruitArray = fruits.split(","); // ["apple", "banana", "cherry"]

indexOf(searchValue): 
The indexOf() method returns the index of the first occurrence of a specified value within the string.
const sentence = "JavaScript is amazing!";
const index = sentence.indexOf("amazing"); // 13

replace(searchValue, newValue): 
The replace() method replaces the first occurrence of a specified value with another value.
const message = "Hello, World!";
const newMessage = message.replace("World", "Universe"); // "Hello, Universe!"

toUpperCase() and toLowerCase(): These methods change the case of characters in a string.
const mixedCase = "ThIs Is MiXeD CaSe";
const upperCase = mixedCase.toUpperCase(); // "THIS IS MIXED CASE"

trim(): The trim() method removes whitespace from both ends of a string.
const padded = "   Hello, World!   ";
const trimmed = padded.trim(); // "Hello, World!"

concat(): The concat() method combines two or more strings into a new string.
const firstName = "John";
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName); // "John Doe"
*/
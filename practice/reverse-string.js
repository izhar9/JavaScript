// Original string
const string = "Hello, world!";

// Using the split method to convert the string into an array of characters
const reversedString = string.split("").reduce((accumulator, currentValue) => {

  // Concatenating the current character to the accumulator (reversed order)
  return currentValue + accumulator;

}, "");

// console.log(reversedString);




// 2nd method

const reverseString = (str) =>{
  const strToAraray = str.split("");  // split convert string to array
  const arrayReverse = strToAraray.reverse(str);
  const strReversed = arrayReverse.join('')    // join convert array to string
  return strReversed;
}

console.log(reverseString("Hello, world!"))
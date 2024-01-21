// reduce method is like useState in reactjs,in which we first create a initial variable and assign a initial value(or we can also give a initial value after callback function(line 8) ), then in reduce method,callback function(or normal function) is there in callback fuction 2 variable assign,1 for,if any opretion is perform then there result goes 1 varible,2 for current value 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);


// Original string
const string = "Hello, world!";

// Using the split method to convert the string into an array of characters
const reversedString = string.split("").reduce((accumulator, currentValue) => {

  // Concatenating the current character to the accumulator (reversed order)
  return currentValue + accumulator;

}, "");
console.log(reversedString);
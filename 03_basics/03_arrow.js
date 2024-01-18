const user = {
    username: "Izhar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // this show current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);    if we use this line in browser then current context is window and if we use this line in code editor(node) then current context is {} (empty brases)


// function chai(){
//     let username = "Izhar"
//     console.log(this.username); // we can not use 'this' in function in such a way
// }

// chai()


// const chai = function () {
//     let username = "Izhar"
//     console.log(this.username); // we can not use 'this' in function in such a way
// }

const chai =  () => {
    let username = "Izhar"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // we not use return in paranthesis () , if we use curly braces {} then only we use return

const addTwo = (num1, num2) => ({username: "Izhar"})  
// for object it menditory to wrap in curly braces{}


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
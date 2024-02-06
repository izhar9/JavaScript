const user = {                  // this is object literal
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);  //node environment me this ka value empty() hota hai aur browser me this ka value window object aata hai.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)  // step 1 : new keyword use karenge to sabse pahle empty object(instance) create hota hai.
//step 2 : new keyword ke wajah se constructor function call hota hai
//step 3 : this keyword ka jo bhi argurment likhe hai vo sab add ho jata hai
// step 4 : value milta hai.
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
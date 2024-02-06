// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("izhar", "izhar@gmail.com", "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());



// jo upper class bana ke kiye hai wahi niche normal way se kar sakte hai.

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const bhaat = new User("bhaat", "bhaat@gmail.com", "123")

console.log(bhaat.encryptPassword());
console.log(bhaat.changeUsername());
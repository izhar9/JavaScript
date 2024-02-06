function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //call passes the current execution context to another function.call setUsername ka reference hold karke rakhta hai.
   
    this.email = email
    this.password = password
}

const izhar = new createUser("izhar", "izhar@fb.com", "123")
console.log(izhar);
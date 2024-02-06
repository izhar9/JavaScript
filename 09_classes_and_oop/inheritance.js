class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const izhar = new Teacher("izhar", "izhar@teacher.com", "123")

izhar.logMe()
const bhaat = new User("bhaat")

bhaat.logMe()

console.log(izhar instanceof User);
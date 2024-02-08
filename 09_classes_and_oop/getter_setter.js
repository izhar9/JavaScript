class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}izhar`
    }

    set password(value){
        this._password = value
    }
}

const izhar = new User("i@izhar.ai", "abc")
console.log(izhar.email);



// Behind the sceane

// 1. properties_get_set

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const izh = new User("izh@izh.com", "har")

console.log(izh.email);


//2. object_get_set

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const xyz = Object.create(User)
console.log(xyz.email);
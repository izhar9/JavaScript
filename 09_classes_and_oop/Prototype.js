// let myName = "izhar     "
// let mychannel = "idrisi     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.izhar = function(){  // agar object me koi bhi prototype inject(add) karenge to use prototype ko sab(array, string, function) use kar sakte hai. kyuki javascript me sab object hota hai.
    console.log(`izhar is present in all objects`);
}

Array.prototype.heyIzhar = function(){  // agar array me prototype add kiye to us prototype ko sirf array hi use kar sakta hai.
    console.log(`Izhar says hello`);
}

// heroPower.izhar()
// myHeros.izhar()
// myHeros.heyIzhar()
// heroPower.heyIzhar()

// inheritance

const User = {
    name: "izhat",
    email: "izhar@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // prototype inheritance TASupport TeachingSupport ka property access kar raha hai 
}

Teacher.__proto__ = User  // prototype inheritance teacher user ka property access kar raha hai  

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // prototype inheritance TeachingSupport Teacher ka property access kar raha hai

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
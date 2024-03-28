// find fictorial of a given number


const fact = (num) =>{
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i;    
    }
    console.log(fact);
}

fact(7)

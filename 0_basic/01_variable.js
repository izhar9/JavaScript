const accountId = 144553      //never change value
let accountEmail = "izhar@google.com"   
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;           // undefine value

// accountId = 2 // not allowed


accountEmail = "iz@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
let num = 10;
let result;
for (let i = 2; i < num; i++){
    if(num % i == 0){
        result = `number ${num} is not a prime number`;
        break
    }else{
        result = `number is ${num} prime numeber`
    }
}
console.log(result)
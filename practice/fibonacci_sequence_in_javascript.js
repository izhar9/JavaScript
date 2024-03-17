let a = 0;
let b = 1;

for (let i = 0; i <= 10; i++) {
    let temp = a+b;
    a = b;
    b = temp; 
    console.log(temp);
}
// Program To Check for Armstrong Number by Smart Programming



let no = 370;
let t1 = no;
let lengthh = 0;

// Calculate the number of digits (lengthh)
while (t1 != 0) {
    t1 = Math.floor(t1 / 10); // Use Math.floor for integer division
    lengthh++;
}

let t2 = no;
let arm = 0;

// Calculate Armstrong number
while (t2 != 0) {
    let mul = 1;
    let rem = t2 % 10;
    for (let i = 0; i < lengthh; i++) {
        mul *= rem;
    }
    arm += mul;
    t2 = Math.floor(t2 / 10); // Use Math.floor for integer division
}

// Check if the number is an Armstrong number
if (arm === no) {
    console.log(`${no} is an Armstrong number`);
} else {
    console.log(`${no} is not an Armstrong number`);
}

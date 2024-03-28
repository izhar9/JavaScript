// find even or odd numbers in array

let array = [5,10,15,20,30,45,58,89]

// function evenOdd(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] % 2 ===0) {
//             console.log(`even ${arr[i]}`);
//         }
//         else{
//             console.log(`odd ${arr[i]}`);
//         }
//     }
    
// }
// evenOdd(array)



let even = array.filter((item)=>{
    return(item % 2 ===0)
})

let odd = array.filter((item)=>{
    return(item % 2 !=0)
})
console.log("even : ",odd);
console.log("even : ",even);


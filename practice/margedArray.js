let arr1 = [1,3,436,6,756,8]
let arr2 = [91,81,71,51,41,51]

let marged = arr1.concat(arr2)
let sort = marged.sort((a,b)=>{
    return a-b
})
console.log(sort);


// using spread operator 

let arr3 = [222,333,444,555,666]
let result = [...arr1,...arr2,...arr3]
let sort2 = result.sort((a,b)=>{
    return a-b
})
// console.log(sort2);
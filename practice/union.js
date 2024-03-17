let arr1 = [2,3,4,5,6,6,6,6,6];
let arr2 = [0,9,8,7,6,5,5,5,5]

let union = [...arr1,...arr2]
console.log([...new Set(union)]);
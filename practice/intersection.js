let arr1 = [2,3,4,5,6,6,6,6,6];
let arr2 = [0,9,8,7,6,5,5,5,5]

let intersection = arr1.filter((ele)=>{
    return arr2.includes(ele)
})
console.log([...new Set(intersection)]);  // A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.A Set can hold any value of any data type.

//... is used for spread operator
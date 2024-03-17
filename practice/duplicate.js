// How To find duplicate elements in array

let array = [2,3,4,5,3,1,2,4,3,5]

let duplicatearray = array.filter((val,index,arr) =>{
    return arr.indexOf(val) !== index
})
// console.log(duplicatearray);



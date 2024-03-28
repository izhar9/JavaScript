// find duplicate elements in array

let array = [2,3,4,5,3,1,2,4,3,5]

let duplicatearray = array.filter((val,index,arr) =>{

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

    
    return arr.indexOf(val) !== index
})
// console.log(duplicatearray);



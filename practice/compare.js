let arr1 = [2,3,4,5,6,7];
let arr2 = [6,5,4,3,2,7];

// let isEqual = arr1.length == arr2.length;
// console.log(isEqual);


let isSame = arr1.length == arr2.length && 
    arr1.every((currentElement) =>{ // every method is check every element of array
        if (arr2.indexOf(currentElement) > -1){
            // console.log(currentElement);
            // console.log(arr2.indexOf(currentElement));
            // console.log('\n');
            return (currentElement = arr2[arr2.indexOf(currentElement)])
        }
})
console.log(isSame);
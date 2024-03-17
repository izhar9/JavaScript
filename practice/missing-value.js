// Find missing elements in a given Array


let array = [1,2,3,6,7,8,9,10,11]
let missingArray = []
for (let index = 1; index <= array.length; index++) {
    if(array.indexOf(index) === -1){
        missingArray.push(index)
    }
    
}
console.log(missingArray);
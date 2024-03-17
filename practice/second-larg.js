// find second Largest value

let array = [4,5,456,36,64,367,2424,656,34534];

let firstLargestValue = Math.max(...array);
console.log(firstLargestValue);

let ind = array.indexOf(firstLargestValue);
console.log(ind);

array.splice(8,1)

console.log(array);

let secondLargestValue = Math.max(...array)
console.log(secondLargestValue);
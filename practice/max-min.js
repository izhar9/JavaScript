// How To find max/min in a given array





//using Math method

// let array = [33,34,32,1123,3234,243432]
/*
let findminmax = (arr) =>{
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    console.log(`minimume ${min}`);
    console.log(`maximum ${max}`);
}

findminmax(array)
*/


// Method 2: Iterating through the Array 

let Arr = [50, 60, 20, 10, 40];
    let minValue = Infinity;
    let maxValue = -Infinity;
 
    for (let item of Arr) {
 
        // Find minimum value
        if (item < minValue)
            minValue = item;

            if(item > maxValue)
            maxValue = item
    }
console.log(minValue);
console.log(maxValue);

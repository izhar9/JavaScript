let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 35 },
    { name: "Eva", age: 28 },
    { name: "Frank", age: 40 },
    { name: "Grace", age: 32 },
    { name: "Hank", age: 27 },
    { name: "Ivy", age: 31 },
    { name: "Jack", age: 26 }
  ];

//   let filterItem = people.filter((val)=>{  // filter give all match value
//     // return val.age > 30
//     return val.age < 30
//   })

let findItem = people.find((val)=>{     // find give only first match value
    // return val.age > 30
    return val.age < 30
  })
  
  
//   console.log(filterItem);
  console.log(findItem);
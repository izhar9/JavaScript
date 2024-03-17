let fisrLetterCapital = (str) =>{
    let convertInArr = str.split(" ");
    let newArr = convertInArr.map((val)=>{
        return val.charAt(0).toUpperCase() + val.slice(1)
    })
    let convertInStr = newArr.join(" ")
    console.log(convertInStr);
}
fisrLetterCapital('hello world')
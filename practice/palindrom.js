const palindrom = (str) => {
  let lowerCase = str.toLocaleLowerCase();
  let reverse = lowerCase.split("").reverse().join("");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrom("969"));

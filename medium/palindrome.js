/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.replace(/\s+/g,"");
  // console.log(str);
  str=str.replace(/[^\w]/g,"");
  // console.log(str);
  let i=0, j=str.length-1;
  while(i<j){
    if(str[i].toLowerCase()!==str[j].toLowerCase())
      return false;
    i++;
    j--;
  }
  return true;

}

isPalindrome('Able, was I ere I saw Elba!')

module.exports = isPalindrome;

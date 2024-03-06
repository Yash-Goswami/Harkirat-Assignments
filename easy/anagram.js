/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let array = [];
  for(let i=0;i<256;i++)
  array[i]=0;

  if(str1.length!==str2.length)
    return false; 

  for(let i=0;i<str1.length;i++){
    array[str1.charCodeAt(i)]++;
    array[str2.charCodeAt(i)]--;
  }
  
  for(i=0;i<256;i++){
    if(array[i]!==0)
      return false;
  }
  return true;
}

// console.log(isAnagram("Yash","ashY"));

module.exports = isAnagram;

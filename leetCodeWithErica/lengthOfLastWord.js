// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

// var lengthOfLastWord = function(s) {
//     let strArr = s.split(' ').reverse()
//     console.log(strArr)
//     let lastWord= strArr[0]
//     return lastWord.length
// };
//aweee snapppp

//You thought you got it but then realized you didnt.
//heres the actual version:

var lengthOfLastWord = function(s) {
    let newStr = s.trim()
    console.log(newStr)
    let lastWord = newStr.split(' ').reverse()
    console.log(lastWord)
  return lastWord[0].length
};
// this function accounts for "  text  written like   this  - u know   "
// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

var lengthOfLastWord = function(s) {
    let strArr = s.split(' ').reverse()
    console.log(strArr)
    let lastWord= strArr[0]
    return lastWord.length
};
//aweee snapppp
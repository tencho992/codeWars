// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

var lengthOfLastWord = function(s) {
    let strArr = s.split(' ')
    let lastWord = strArr[-1]
    return lastWord.length
};
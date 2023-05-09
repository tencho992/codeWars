// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s){
  
    const arr = Array.from(s)
    console.log(arr)
    if(arr.length % 2 === 0){
      const index = Math.floor(arr.length/ 2)
      return `${arr[index - 1].toString()}${arr[index].toString()}`
    }else{
     const index = Math.floor(arr.length / 2)
    return arr[index].toString() 
    }
  }
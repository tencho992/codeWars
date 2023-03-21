// You will be given an array a and a value x. 
//All you need to do is check 
//whether the provided array contains the value.

// Array can contain numbers or strings. 
//X can be either.

// Return true if the array contains the value, 
//false if not.


//very general dont overthink it

function check(a, x) {
    if (a.includes(x)){
      return true
    } else {
      return false
    }
  }
  

//Write a function that 
//removes the spaces from the string, 
//then return the resultant string

function noSpace(str){
  return str.replace(/\s/g, "")
}

function noSpace(str){
    return str.replace(/\s/g,"")
}
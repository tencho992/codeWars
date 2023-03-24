// We want to create a constructor function 'NameMe', 
// which takes first name and last name as parameters. 
// The function combines the first and last names and 
// saves the value in "name" property.

// We already implemented that function, 
// but when we actually run the code, the "name" property 
// is accessible, but the "firstName" and "lastName" is not 
// accessible. All the properties should be accessible. 
// Can you find what's wrong with it? 
// A test fixture is also available

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${first} ${last}`
}

// Create a class Ghost
// Ghost objects are instantiated 
// without any arguments.
// Ghost objects are given a random color attribute of 
// "white" or "yellow" or "purple" or "red" when instantiated
class Ghost {
    contructor (){
      this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)]
    }
}

// Given an array of integers, 
//return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]



function maps(x){
    return x.map(num => num * 2)
}

// Given a non-empty array of integers, 
// return the result of multiplying the values 
// together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((acc, num) => acc * num, 1)  
  }
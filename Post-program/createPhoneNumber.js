// Write a function that accepts an array of 10 integers 
// (between 0 and 9), that returns a string of those numbers 
// in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    const newStr = numbers.toString()
    console.log(newStr)
    const newPhone = newStr.replaceAll(',', '')
    console.log(newPhone)
    const area_code = newPhone.slice(0, 3)
    console.log(area_code)
    const first_three = newPhone.slice(3, 6)
    console.log(first_three)
    const last_four = newPhone.slice(6, 10)
    console.log(last_four)
    return `(${area_code}) ${first_three}-${last_four}`
  }

  console.log(createPhoneNumber([6,1,7,3,8,6,0,1,2,0]))
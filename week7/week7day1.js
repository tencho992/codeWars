// The goal is to create a function of 
// two inputs number and power, 
// that "raises" the number up to power 
// (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
    console.info(Math.log2(1024));
    let result = 1
    for (let i = 0; i < power; i++){
      result *= number
    }
    return result
}

// Write a function named setAlarm which 
// receives two parameters. The first parameter, 
// employed, is true whenever you are employed 
// and the second parameter, 
// vacation is true whenever you are on vacation.

// The function should return true if you are employed 
// and not on vacation 
// (because these are the circumstances under 
// which you need to set an alarm). 
// It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

  function setAlarm(employed, vacation){
    if (employed === true && vacation === true){
      return false
    } else if (employed === true && vacation === false){
      return true
    }else{
      return false
    }
}
// The goal is to create a function of two inputs number 
// and power, that "raises" the number up to power 
// (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000


function numberToPower(number, power){
    console.info(Math.log2(1024));
    return number ** power
  }

// Write a function that takes an array of words 
// and smashes them together into a sentence and 
// returns the sentence. 
// You can ignore any need to sanitize words or 
// add punctuation, but you should add spaces 
// between each word. Be careful, there shouldn't 
// be a space at the beginning or 
// the end of the sentence!

function smash (words) {
    return words.join(" ")
};

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// https://en.wikipedia.org/wiki/Switch_statement

function switchItUp(number){
    switch(number){
      case 0: 
        return "Zero";
      break;
      case 1:
        return "One";
      break;
      case 2:
        return "Two";
      break;
      case 3:
        return "Three";
      break;
      case 4:
        return "Four";
      break;
      case 5:
        return "Five";
      break;
      case 6:
        return "Six";
      break;
      case 7:
        return "Seven";
      break;
      case 8:
        return "Eight";
      break;
      case 9:
        return "Nine";
      break;
    }
  }
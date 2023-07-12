//Check if parameter passed through is
//indeed a phone number

//"(123) 456-7890"  => true
//"(1111)555 2345"  => false
//"(098) 123 4567"  => false

function validPhoneNumber(phoneNumber){
    let formula = /^\(\d{3}\) \d{3}-\d{4}$/
    return formula.test(phoneNumber)
  }



let formula = /^\(\d{3}\) \d{3}-\d{4}$/

//breakdown:
// first start the sentence / and then start the expression ^
// everytime something is declared use the special \
// hence being with the () in area code with \(
// then use the same special \ to declare 3 digits ex: \d{3}
// dont forget you have to add \ for the ) to close parenthesis: \)
// Add a space if format calls for it. Begin id next 3 digits: /d{3}
// this is a phone number so use a - to seperate: /d{3}-/d{4}
// this completes the 10 digit US phone number. use $ as a closing
// NEVER FORGET: close the start of the sentence / with a identical / at the end. 
// /^\(\d{3}\) \d{3}-\d{4}$/

let regEx = /^\(\d{3}\) \d{3}-\d{4}$/
    regEx = /^\(\d{3}\) \d{3}-\d{4}$/
    regEx = /^\(\d{3}\) \d{3}-\d{4}$/
    regex = /^\(\d{3}\) \d{3}-\d{4}$/ 
//write a palindrome without using methods:

function reversedStr(str){
    let newStr =''
    for(let i = str.length -1; i >=0; i--){
        newStr += str[i]
    }
    return newStr ===str ? true :false;
}

console.log(reversedStr('hello'))
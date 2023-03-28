
function buildArrayOfNumbers(n){
    if(typeof n !== 'number') return alert('Enter Valid Number')
    const newArray = []
    for (let i = 1; i <= n; i++){
        newArray.push(i)
    }
    return newArray
}
console.log(buildArrayOfNumbers(50))

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const keyPairs = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let sum = 0
    for( let i = 0; i < s.length; i++){

        let current = keyPairs[s[i]]
        let next = keyPairs[s[i+1]]

        if( current < next){
            sum += keyPairs[s[i+1]] - keyPairs[s[i]]
            i++
        }else{
            sum += current
        }

    }
    return sum
};
console.log(romanToInt('MCMXCIV'))
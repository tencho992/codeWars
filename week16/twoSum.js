// find the two indices that have the 
//value which adds up to the target number
//O(N^2)
function twoSum(num, target){
    for (let i =0; i <num.length; i++){
        for(let j = i + 1; j < num.length; j++){
            if( num[i]+ num[j] === target){
                return [i, j]
            }
        }
    }
}

//STEP 2: OPTIMIZE THIS CODE!!
//(n/2)*(starting number - ending number) 

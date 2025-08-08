/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let Nnums = [...new Set(nums) ]
    Nnums.sort((a, b) => b - a)
    if(Nnums.length >= 3){
        return Nnums[2]
    }else{
        return Nnums[0]
    }
    
};
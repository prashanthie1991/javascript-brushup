// Given an array containing n distinct numbers taken from the range 1 to n, find the one that is missing from the array.

const arr = [1,3,4,5]
function findMissingNum(arr) {
    const n = arr.length +1
    let expected_sum = (n*(n+1))/2 // sum of natural numbers formula
    let actual_sum = arr.reduce((sum,ele)=>sum+ele,0)

    return expected_sum-actual_sum
}

console.log(findMissingNum(arr))
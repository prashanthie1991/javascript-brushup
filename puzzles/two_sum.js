// Given an array of integers, find two numbers such that they add up to a specific target number.

function firstTwoSum(arr,target){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
                break;
            }
        }
    }
    return [] //If no match returns empty array
}


let arr = [2,4,7,6,1]
target = 10;

console.log(firstTwoSum(arr,target))


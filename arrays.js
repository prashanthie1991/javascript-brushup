// Classic Initialization of Array
var arr = Array(5)
arr = new Array(1,2,3,4,5)
console.log("Array length of arr is: "+arr.length)

// Easy way of Array initialization
let nums = [1,2,3,4,5]
console.log(nums)
console.log("first element: "+nums[0])

// Array push, pop, unshift
nums.unshift(45)
nums.pop()
nums.push(12)
console.log(nums)

// Array index
console.log(nums[0])
console.log(nums.indexOf(12))

//Array contains
console.log(nums.includes(33))

//Create sub array from main array takes 2 args: index and position of element
subarr = nums.slice(1,5)
console.log(subarr)

// print sum of subarr
let sum = 0
for(let i=0; i<subarr.length; i++){
    sum = sum+subarr[i]
}
console.log(sum)

// Code optimization: reduce, filter, map =>
let total = subarr.reduce((acc,subval)=>acc+subval,0)
console.log(total)

// filter: gives sub array
let even_nums = nums.filter(num=>num%2==0)
console.log(even_nums)

// map: manipulations on array elements
let mularr = subarr.map(sub=>sub*3)
console.log("3x subarr is: " + mularr)

//Chaining of arrays: Find the even elements from nums array, multiply each element by 2 and finally sum up the resulted array
let finalSum = nums.filter(num=>num%2==0).map(num=>num*2).reduce((temp,total)=>temp+total,0)
console.log("final sum of nums array: "+finalSum)

//array sorting - strings and numbers
let names = ["john","bob","damon","chris"]
console.log(names.sort()) //string sorting ascending
console.log(names.reverse()) //string sorting descending

console.log(nums.sort((a,b)=>a-b)) //Sorting of numbers ascending using recursive bubble sort algorithm
console.log(nums.sort((a,b)=>b-a)) //Sort in descending order using sort function
console.log(nums.reverse((a,b)=>a-b)) //Sorting of numbers descending using reverse function
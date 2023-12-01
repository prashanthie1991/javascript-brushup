console.log("Good day!")

// Identify the nature of the value
let a = 4
console.log(typeof(a))

let b = 4.79
console.log(typeof(b))

let c = "karan"
console.log(typeof(c))

let d = true
console.log(typeof(d))

let e = typeof(hkl)
console.log(typeof(e))

let f
console.log(typeof(f))

/*
Arithmetic operations - +, -, *, /, %
*/

console.log(a+b)

/*
conditions
*/

const flag = true
if(!flag){
console.log("expression is true")
} else{
    console.log("flag value: "+flag)
    console.log("expression is false")
}

//Print 1-10
let i=0;
while(i<10){
    i++;
    console.log(i)
}
//print 10-0
do{
    console.log(i)
    i--
}while(i>0)

console.log("I am ending do while!")

for(let k=0; k<10; k++){
    console.log(k)
}

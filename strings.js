let pname = "prashanthi "

// substring
let petname = pname.slice(0,5)
console.log(petname)

// split name
let pnames = pname.split('h')
console.log(pnames)

// trim spaces
console.log(pnames[2].length)
let second_name = pnames[2].trim()
console.log(second_name.length)

// type conversions & concatination
let a = '25'
let b = '20'
let c = parseInt(a)-parseInt(b)
console.log(c.toString() + " is the difference")

// index of finding number of occurences
let phase = "Today is my day. Sunday is a fun day!"
let counter = 0
let index = phase.indexOf("day")
while(index != -1){
    counter++
    index = phase.indexOf("day",index+1)
}
console.log("number of occurences of word: day - "+counter)

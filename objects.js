// JS object
let person = {
    first_name: 'Jung',
    last_name: 'Cook',
    full_name: function() {
        return this.first_name+" "+this.last_name
    }
}

// read properties - dot notation & array like notation
console.log(person.first_name)
console.log(person['last_name'])
console.log(person.full_name()) // reading function property of an object

//modify property value
person.last_name = 'Moon'

//add new property
person.age = '25'
console.log(person)

//delete new property
delete person.age
console.log(person)

//check if property exists
console.log('first_name' in person)

//Traverse through each value of property in an object
for(let key in person){
    console.log(person[key])
}
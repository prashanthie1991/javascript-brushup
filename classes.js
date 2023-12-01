//Export this class
module.exports = class Person{
    // class variable
    age = 25

    // initializing property using getter method which is equal to location = "canada"
    get location(){
        return "canada"
    }

    //constructor - special method to initialise properties
    constructor(first_name, last_name){ //first_name & last_name scoped to constructor block
        this.first_name = first_name
        this.last_name = last_name //this.first_name & this.last_name are instance variables and scoped to class level
    }

    // class method
    fullName(){

        return this.first_name + " " + this.last_name

    }

}

//To access class variables we need to create object
let person = new Person("John","Wick")
console.log(person.age)
console.log(person.location)
console.log(person.fullName())


/* Import Class:
* Import this class in another class using 
'const Person = require('./classes')' 
* To access you can create object and use the class properties.
'let person = new Person("John","Wick")'
console.log(person.fullName())
*/


/* Inheritence - OOPs concept
* Inheritence - One class(child class) can aquire the properties of another class(parent class)
* use extends keyword
* If parent class has constructor child class should also have constructor and is responsible to call super class constructor using super(<params>)
* If any property has to be overriden, define again in child class so it will have proiority
*/
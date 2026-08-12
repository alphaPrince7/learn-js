// Primitive - Called by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)


const bigNumber = 546546465464564564564564564n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"]

let myObj = {
    name: "prince",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction) // objectFunction
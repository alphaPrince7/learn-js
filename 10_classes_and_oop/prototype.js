// let myName ="Prince       "

// console.log(myName.truelength)


let myHeros = ['thor', 'spiderman']

let heroPower ={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}


Object.prototype.prince = function(){
    console.log(`prince is present in all object`)
}

Array.prototype.heyPrince = function(){
    console.log(`Hitesh says hello`)
}

// heroPower.prince()

// myHeros.prince()
// myHeros.heyPrince()

// heroPower.heyPrince()

//inheritance 

const User = {
    name: "chai",
    email: "prince@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Prince           "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`true length is: ${this.trim().length}`)
}

anotherUsername.trueLength()

"Js ".trueLength()

"momos".trueLength()
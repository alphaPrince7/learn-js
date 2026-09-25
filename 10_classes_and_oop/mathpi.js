const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const prince = {
    name: "Rajkumar",
    worth: 2500000000,
    isAvailable: true,

    trying: function(){
        console.log("working hard to become best");
        
    }
}

Object.defineProperty(prince, 'worth', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(prince, "worth"))

for (let [key, value] of Object.entries(prince)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
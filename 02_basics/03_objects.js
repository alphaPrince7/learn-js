// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Prince",
    "full name": "Prince Sharma",
    [mySym]: "myKey1",
    age: 24,
    location: "Delhi",
    email: "prince@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// Object.freeze(jsUser)

jsUser.email = "prince@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
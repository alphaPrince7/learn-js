

function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console,log("Prince")
    return number1 + number2
}
const result = addTwoNumbers(4, "5")

// console.log("Result: ", result)

function loginUserMessage(username){
    if(username == undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Prince"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Prince",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))


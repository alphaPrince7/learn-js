const user= {
    username: 'prince',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function yo(){
//     let username = "prince"
//     console.log(this.username)
// }
// yo()

const chai = () => {
    let username = "prince"
    console.log(this)
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// implicit return
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "prince"})

console.log(addTwo(3, 4))

const myArray = [2,5,3,7,8]

myArray.forEach(()=>{

})
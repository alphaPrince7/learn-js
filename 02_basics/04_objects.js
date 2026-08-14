// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prince",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

// const obj3 = {...obj1, ...obj2}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "prince@google.com"
    },
    {
        id: 2,
        email: "prince@microsoft.com"
    },
    {
        id: 3,
        email: "prince@google.com"
    }
]

// console.log(user[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor)

// const navbar = ({company}) => {

// }

// navbar(company = "Prince")

// {
//     "name": "prince",
//     "coursename": "js course",
//     "source": "youtube"
// }
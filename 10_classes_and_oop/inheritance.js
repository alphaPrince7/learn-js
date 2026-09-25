class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username, email){
        super(username) 
        this.email = email
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher('chai', "chai@teacher.com")

chai.addCourse()
chai.logMe()

const masalaChai = new User("Prince")
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai instanceof User)
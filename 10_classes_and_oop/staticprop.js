class User{
    constructor(uername){
        this.username = this.username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const prince = new User("Prince")
// console.log(prince.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("bhanu", "bhanu@google.com")

console.log(iphone.createId())
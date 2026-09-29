class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}prince`
    }

    set password(value){
        this._password = value
    }
}

const prince = new User("prince@gmail.com", "prince123")

console.log(prince.email)
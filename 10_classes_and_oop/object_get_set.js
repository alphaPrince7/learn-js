const User = {
    _email: "prince@ps.com",
    _password: "abc",



    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const prince = Object.create(User)

console.log(prince.email);

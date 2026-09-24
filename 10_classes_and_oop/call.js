function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("prince", "prince@meta.com", "123")

console.log(chai)
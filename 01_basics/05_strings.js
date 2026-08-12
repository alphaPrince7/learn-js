const name = "prince"
const repoCount = 20

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("alpha-Prince-7")

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('P'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 8)
console.log(anotherString)

const newStringOne = "       Prince       "
console.log(newStringOne.trim());

const url = "https://prince.com/prince%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')) // it returns array
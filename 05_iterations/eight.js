const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python corse",
        price: 3999
    },
    {
        itemName: "mobile development course",
        price: 6999
    },
    {
        itemName: "data scientist course",
        price: 12999
    },
    {
        itemName: "game development course",
        price: 13999
    },
]

const priceToPay = shoppingCart.reduce((acc, cart) => {
    return acc + cart.price
}, 0)

console.log(priceToPay)
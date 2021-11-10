let cart  = [
    {
        id:1,
        productName:"Telefon",
        quantity:5,
        unitPrice:4000
    },
    {
        id:2,
        productName:"Bardak",
        quantity:13,
        unitPrice:30
    },
    {
        id:3,
        productName:"Kalem",
        quantity:8,
        unitPrice:20
    }
]

console.log("<ul>")
cart.map(product =>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity,0)
console.log(total)

let quantityOver2 = cart.filter(product => product.quantity > 5)

console.log(quantityOver2)

// function addToCart(sepet){
//     sepet.push({id:4,productName:"Kitap",quantity:3,unitPrice:30})

// }

// addToCart(cart)
// console.log(cart)

// let sayi = 10

// function sayiTopla(number) {
//     number += 1
// }
// sayiTopla(sayi)
// console.log(sayi)
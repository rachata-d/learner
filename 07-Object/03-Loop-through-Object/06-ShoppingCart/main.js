let itemName = prompt('Enter the item name')
let itemAmount = prompt('Enter the amount')
let itemPrice = Number(prompt('Enter the price'))
let discountPercentage = Number(prompt('Enter the discount'))

let shoppingCart = {
  Item: itemName,
  Amount: itemAmount,
  Price: itemPrice,
}
if (discountPercentage !== 0) {
  shoppingCart.Discount = discountPercentage
}

let realDiscount = (shoppingCart.Discount / 100) * shoppingCart.Price

let finalPrice = shoppingCart.Price - realDiscount
// function finalPrice(shoppingCart) {
//   if (discountPercentage in shoppingCart.Discount) {
//     let realDiscount = shoppingCart.Price * (shoppingCart.Discount / 100)
//     shoppingCart.Price = realDiscount - shoppingCart.Price
//     return realDiscount
//   }
// }

// console.log(shoppingCart)
// console.log(finalPrice(shoppingCart))

console.log(finalPrice)

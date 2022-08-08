let fruitName = prompt('Enter your fruit name')
let quantity = Number(prompt('Enter the amount'))

let fruitList = {
  Fruit: fruitName,
  Amount: quantity,
}

function buyYourOwnFruits() {
  if (quantity > 1) {
    fruitList.Fruit = fruitName + 's'
    return fruitList
  } else if (quantity <= 1) {
    return fruitList
  }
}

console.log(buyYourOwnFruits())

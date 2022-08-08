// const multiply = [...args]
// multiply.forEach(theMultiply)

// function theMultiply(item) {
//   args[item] = item * 1
// }

// console.log(multiply)

function sum(...args) {
  let result = 1
  for (let item of args) {
    result *= item
  }
  return result
}
console.log(sum(5, 6, 7))

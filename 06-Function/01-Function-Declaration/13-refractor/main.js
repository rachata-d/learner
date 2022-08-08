// function checkAge(age) {
//   if (age > 18) {
//     return true
//   }
//   prompt('Did your parents allow you?')
// }

// console.log(checkAge(20))

function checkAge(age) {
  age > 18 ? true : prompt('Did your parents allow you?')
  return age
}

console.log(checkAge(17))

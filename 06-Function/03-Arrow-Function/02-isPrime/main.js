// function primeNumber(num){
//     num

// }

// primeNUumber()

let isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false
  return num > 1
}

isPrime(7)

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }

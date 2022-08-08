////

// const arrayMap = [1, 2, 30, 400];

// let mappedArr = arrayMap.map (item => item * 2)

/////


// const arrayToStr = [1, 2, 3, 4];

// let stringifiedArr = arrayToStr.map (item => String(item))

// console.log(stringifiedArr)

////

// const arrayDiffTypes = [1, '1', 2, {}];

// let diffTypes = arrayDiffTypes.map (item =>  {
//     if(typeof item === "number") {
//         return "number"
//     } else if (typeof item === "string") {
//         return "string"
//     // } else if (typeof item === "number") {
//     //     return "number"

//     } 
//     else if (typeof item === "object") {
//         return "object"
//     }
// })

// const arrayLowerCaps = ['apple', 'banana', 'orange'];

// let lowerCaps = arrayLowerCaps.map(item => item.toUpperCase())

///
const arrayOddOrEven = [1, 3, 4, 5, 6, 7, 8];

let oddEven = arrayOddOrEven.map(item => {
    if (item % 2 == 0) {
        item = "even"
    } else {
        item = "odd"
    }
})


const convertToPositive = [1, -3, 2, 8, -4, 5];

let positive = convertToPositive.map(Math.abs)

console.log(positive);


const additionalDigits = [100, 200.25, 300.84, 400.3];

let digits = additionalDigits.map
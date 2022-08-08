// let sum = 0;
// const array = [29, 17, 13, 47, 23, 31];
// array.forEach(myArray);

// function myArray(item) {
//     sum += item;
// }
// console.log(sum)


const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// for (let item of array) {
//     sum += item;
// }
// console.log(sum)

let sum = 0;
for (let index in array) {
    sum += array[index];
}

console.log(sum)
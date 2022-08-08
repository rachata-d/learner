const a = Number(prompt("Enter the first number"));
const b = Number(prompt("Enter the second number"));
const c = Number(prompt("Enter the third number"));

let max;
let mid;
let min;

if (a >= b && a >= c) {
    max = a;
    if (b >= c) {
    mid = b;
    min = c;
    } else if (c > b) {
        mid = c;
        min = b;
    }
} else if (b >= a && b >= c) {
    max = b;
    if (a >= c) {
        mid = a;
        min = c;
    } else {
        mid = c;
        min = a;
    }
} else if (c >= a && c >= b) {
    max = c;
    if (b >= a) {
        mid = b;
        min =a;
    } else {
        mid = a;
        min = b;
    }
}

alert(`Max = ${max} Mid = ${mid} Min = ${min}`)
// console.log(max, mid, min)
// alert(max + "," + mid + "," + min)
// if (a > b && a > c) {
//     max = a
// } else if (b > a && b > c) {
//     max = b
// } else {
//     max = c
// };

// if (a < b && a < c) {
//     min = a
// } else if (b < a && b < c) {
//     min = b
// } else {
//     min = c
// };

// if (a > b && a < c) {
//     mid = a
// } else if (b > a && b < c) {
//     mid = b
// } else {
//     mid = c
// };

// console.log(max, mid, min);
// alert(max, mid, min);


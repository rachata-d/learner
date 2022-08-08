let myFunc = function(a,b,c,d) {
    return a+b+c+d
}

let x = myFunc(1,2,3,4)
console.log(`x : ${x}`)

let myArrowFunc = (a,b,c,d) => a+b+c+d;

// let myArrowFunc = (1, 2, 3, 4);

let y = myArrowFunc(1,2,3,4)
console.log(`y : ${y}`)
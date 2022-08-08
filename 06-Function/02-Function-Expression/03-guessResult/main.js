function magic() {
    console.log("Outer Function")
    return function (x) {
        return x * 42;
    };
}

let result = magic()
console.log(result)
result(1)


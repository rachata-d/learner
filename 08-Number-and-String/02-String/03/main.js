function ucFirst(str) {
    let newString = str.trim()
    let firstChar = str[0]
    let leftString = str.slice(1)

    return firstChar.toUpperCase() + leftString
}

console.log(ucFirst("hello It's me"))
function wordFiltering (str) {
    let lowerStr = str.toLowerCase()

    let isMatch = lowerStr.includes('xxx') || lowerStr.includes('porn') || lowerStr.includes('sex');

    return isMatch

}

console.log(wordDetection("sex"))
console.log(wordDetection("porn"))
console.log(wordDetection("xxx"))

console.log(wordDetection("SEX"))
console.log(wordDetection("PORN"))
console.log(wordDetection("XXX"))

console.log(wordDetection("pOrn"))
console.log(wordDetection("sEx"))
console.log(wordDetection("xXx"))

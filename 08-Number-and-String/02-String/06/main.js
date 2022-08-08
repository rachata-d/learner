function extractCurrencyValue(string, rate) {
    let converted = Number(string.slice(1))

    return 'THB' + converted
}

console.log(extractCurrencyValue)
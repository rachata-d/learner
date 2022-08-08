function createObjectFromUserInput () {
    const result = {}

    let key;
    let value;
    do {
        key = prompt("Enter key")
        value = prompt("Enter value")
        if(key != null && key.trim != '' && (key != 'stop' && value != 'stop')){
            result[key] = value
        }
    } while (key != 'stop' && value != 'stop')


    return result
}

userCreateObject = createObjectFromUserInput()
console.log(createObjectFromUserInput)
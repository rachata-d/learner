const digit = Number(prompt("Enter a number")); //435
let count = 0;
if (digit == 0) {
    count++;
} else {

    let newNumber = digit  //435

    while (newNumber > 1) {

        newNumber = newNumber / 10;
        count++;
    }
}

alert(`Number of digits = ${count}`)


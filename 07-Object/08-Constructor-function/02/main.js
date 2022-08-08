function Accumulator(startingValue) {


    this.currentValue = startingValue;

    this.read = function () {
        let newInput = +prompt("Enter Number")
        this.currentValue += newInput;
    }

    this.show = function () {
        alert(this.currentValue)
    }

}

const acc1 = new Accumulator(0)
const acc2 = new Accumulator(5)
const acc3 = new Accumulator(37)

acc1.read(7)
acc1.show()

console.log(acc1)
console.log(acc2)
console.log(acc3)
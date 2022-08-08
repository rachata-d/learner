// function Calculator (read, sum, mul) {

//      this.read = function () {
//         let num1 = Number(prompt("Enter the first number"))
//         let num2 = Number(prompt("Enter the second number"))
//         sum = num1 + num2;
//         mul = num1 * num2;
//      }
//     }
//     Calculator.read();


// let calculator1 = new calculator(5, 5);

// console.log(Calculator);

function Calculator() {

    this.num1 = 0;
    this.num2 = 0;

    this.sum = function () {
        return this.num1 + this.num2;
    }

    this.read = function() {
        let value1 = +prompt("Enter Value1");
        let value2 = +prompt("Enter Value2");

        this.num1 = value1;
        this.num2 = value2;
    
    }

    this.mul = function() {
        return this.num1 * this.num2;
    }
}

const calculator = new Calculator()
const calculator2 = new Calculator()

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
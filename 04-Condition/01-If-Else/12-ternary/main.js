let grade = Number(prompt("Enter your score"));

let result = (grade >= 80) ? 'A' : (grade <= 79 && grade >= 70) ? 'B' : (grade <= 69 && grade >= 60) ? 'C' : (grade <= 59 && grade >= 50) ? 'D' : 'F';

alert(result);
// if (grade >= 80) {
//     alert("A")
// } else if (grade >= 70 && grade <= 79) {
//     alert("B")
// } else if (grade >= 60 && grade <= 69) {
//     alert("C")
// } else if (grade >= 50 && grade <= 59) {
//     alert("D")
// } else {
//     alert("F")
// };
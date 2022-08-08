const grade = prompt("Enter your grade")
if (grade >= 80) {
    alert("A")
} else if (grade >= 70 && grade <= 79) {
    alert("B")
} else if (grade >= 60 && grade <= 69) {
    alert("C")
} else if (grade >= 50 && grade <= 59) {
    alert("D")
} else {
    alert("F")
}
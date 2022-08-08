// const wlt = prompt("Enter the result");
// let scoreCount = 0;
// let score = (a,b,c) => {
//     if (wlt == "Win") {
//         scoreCount++;
//     } else if (wlt == "Tie") {
//         scoreCount++;
//     }
// }


let score = (resutl) => {
    if (result == "Win") {
        return 3;
    } else if (result == "Lose") {
        return 1;
    } else if (result == "Draw") {
        return 0;
    }
}

console.log(score("Win"))

// function score (result)
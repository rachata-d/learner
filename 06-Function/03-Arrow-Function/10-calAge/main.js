let calDayFromBirthYear = (birthYear) => {
    let day = 0


    for(let i = birthYear; i <= 2020; i++){

        
        day += 365;
    }

    return day;
}

console.log(calDayFromBirthYear(2018))
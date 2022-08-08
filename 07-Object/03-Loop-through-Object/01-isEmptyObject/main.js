function isEmptyObject (obj) {

    for(let key in obj) {
        return false
    }
    return true
}

const user_1 = {name : "CC12"}
const user_2 = {name : "Codecamp", cohort:2}
const user_3 = {}

console.log(isEnptyObject(user_1))

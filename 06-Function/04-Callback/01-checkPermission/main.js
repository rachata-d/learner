function checkPermission(role,okFunc,noFunc) {
    if (role == "ADMIN") {
        okFunc();
    } else if (role != "ADMIN") {
        noFunc()
    }
}

function adminFunc () {
    alert("ACCESS GRANTED")
} 

function guestFunc () {
    alert("ACCESS DENIED")
}

console.log(checkPermission("ADMIN", adminFunc, guestFunc))
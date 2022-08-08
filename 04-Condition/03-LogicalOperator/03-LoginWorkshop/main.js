let user = prompt("Enter your name");
if (user == " " || null) {
   user = "Guest";
} else if  (user == "codecamp") {
    let password = prompt("Password:");
    if (password == "123456") {
        console.log("this works");
        user = "codecamp";
        console.log(user);
    } else {
        alert("Incorrect Password");
    }
} else {
    user = "Guest";
};
alert(`Welcome ${user}`);
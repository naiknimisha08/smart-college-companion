function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if(username === "student" &&
       password === "1234")
    {
        alert("Login Successful");
    }
    else{
        alert("Invalid Credentials");
    }
}

function applyLeave() {

    let reason =
        document.getElementById("leaveReason").value;

    if(reason.trim() === "")
    {
        alert("Please enter reason");
        return;
    }

    document.getElementById("leaveMessage")
    .innerText =
    "Leave Application Submitted Successfully!";
}

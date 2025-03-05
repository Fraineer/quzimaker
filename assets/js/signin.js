function signin() {
    var email_verify = document.getElementById("email").value;
    var password_verify = document.getElementById("password").value;

    var user = localStorage.getItem(email_verify);
    var user_verify = JSON.parse(user)

    console.log(user)
    console.log(user_verify[0].password)

    if(password_verify === user_verify[0].password){
        alert("Login Confirmed")
        window.location.href = "quiz.html";
    }
    else {
        alert("E-mail or Password Invalid")
    }
}

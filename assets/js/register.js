function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

   if(name === "" || email === "" ||password1 === "" || password2 === ""){
        alert("Please fill the details")
    } 
    else {
        if(password1 !== password2) {
            alert("Passwords must be the same")
        }
        else {
            alert("Successfully registered")
            window.location.href = "signin.html";

            var user = [{
                name: name,
                email: email,
                password: password1
            }];

            const usuariosString = JSON.stringify(user);
            localStorage.setItem(email, usuariosString);

            console.log(user);
        }
    }
}
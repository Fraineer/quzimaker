if (localStorage.getItem("token") == null) {
    alert("You need to be logged in to access this page");
    window.location.href = "./assets/html/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
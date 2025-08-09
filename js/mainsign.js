var email = document.querySelector(".RE_email");
var password = document.querySelector(".RE_Password");
var LoginForm = document.querySelector(".loginForm");

var allPersonal = localStorage.getItem("allPersonal") 
    ? JSON.parse(localStorage.getItem("allPersonal")) 
    : [];

function login(event) {
    event.preventDefault();

    if (!email.value || !password.value) {
        document.querySelector(".alert-danger").classList.replace("d-none", "d-block");
        return;
    }

    var user = allPersonal.find(
        user => user.EMAIL === email.value && user.PASSWORD === password.value
    );

    if (user) {
        document.querySelector(".alert-info").classList.replace("d-none", "d-block");
    
        localStorage.setItem("loggedInUserName", user.NAME);
    
        setTimeout(() => {
            window.location.href = "index3.html";
        }, 1500);
    } else {
        document.querySelector(".alert-danger").classList.replace("d-none", "d-block");
    }
    
}

LoginForm.addEventListener("submit", login);
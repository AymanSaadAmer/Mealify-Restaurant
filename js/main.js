
var fname = document.querySelector(".Name");
var email = document.querySelector(".Email");
var password = document.querySelector(".Password");
var SingUpForm = document.querySelector(".signupForm");

var allPersonal = localStorage.getItem("allPersonal") 
    ? JSON.parse(localStorage.getItem("allPersonal")) 
    : [];

function getvalue(event) {
    event.preventDefault(); 
    if (!fname.value || !email.value || !password.value) {
        document.querySelector(".alert-danger").classList.replace("d-none", "d-block");
        return;
    }

    var existingUser = allPersonal.find(user => user.EMAIL === email.value);
    if (existingUser) {
        alert("This email is already registered!");
        return;
    }

    var personal = {
        NAME: fname.value,
        EMAIL: email.value,
        PASSWORD: password.value,
    };

    allPersonal.push(personal);
    localStorage.setItem("allPersonal", JSON.stringify(allPersonal));

    document.querySelector(".alert-info").classList.replace("d-none", "d-block");

    clear_value();

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}

function clear_value() {
    fname.value = "";
    email.value = "";
    password.value = "";
}

SingUpForm.addEventListener("submit", getvalue);




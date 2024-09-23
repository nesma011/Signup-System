var email = document.getElementById("InputEmail1");
var password = document.getElementById("InputPassword");
var inputName = document.getElementById("Name");
var list = [];
var nav = document.getElementById("navbar");
var buttonLogin = document.getElementById("login");
var buttonSignup = document.getElementById("Signup");
var success = document.getElementById("h2")
var entrance =document.getElementById("enter")
var sign = document.getElementById("outer")


if (localStorage.getItem("data") !== null) {
    list = JSON.parse(localStorage.getItem("data"));
}


function login(e) {
    e.preventDefault();

    var emailValue = email.value;
    var passwordValue = password.value;

    if (list.length === 0) {
        alert("No user data found. Please sign up.");
    } else {
        var user = list.find(user => user.Email1 === emailValue && user.Password === passwordValue);
        if (user) {
            displayHome(user.Name); 
        } else {
            alert("Invalid email or password. Please try again.");
        }
    }
}


buttonLogin.addEventListener("click", login);


function loginToggle() {
    inputName.classList.add("d-none");
    buttonLogin.classList.remove("d-none");
    buttonSignup.classList.add("d-none");
    sign.classList.remove("d-none");
    entrance.classList.add("d-none");
    success.classList.add("d-none");
}


function displayHome(userName) {
    var cartona = `<h1 class="text-white">Welcome, ${userName}</h1>`;
    document.getElementById("home").innerHTML = cartona;
    nav.classList.remove("d-none");
    document.getElementById("loginForm").classList.add("d-none");
}


function signup(event) {
    event.preventDefault(); 

    if (inputName.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
        return;
    }

    
    var existingUser = list.find(user => user.Email1 === email.value);
    if (existingUser) {
        alert("Email already exists. Please log in.");
        return;
    }

    var data = {
        Name: inputName.value,
        Email1: email.value,
        Password: password.value
    };

    list.push(data);
    localStorage.setItem("data", JSON.stringify(list));
    success.classList.remove("d-none");
}


function signupToggle() {
    inputName.classList.remove("d-none");
    buttonLogin.classList.add("d-none");
    buttonSignup.classList.remove("d-none");
    entrance.classList.remove("d-none");
    sign.classList.add("d-none");
}


function logout() {
    nav.classList.add("d-none");
    document.getElementById("home").innerHTML = "";
    document.getElementById("loginForm").classList.remove("d-none");
    buttonLogin.classList.remove("d-none");
    buttonSignup.classList.add("d-none");
    inputName.classList.add("d-none");
}


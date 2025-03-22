// Variable Declaration
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Login button function
loginBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
});

registerBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
});

// Signup & Signin Functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get buttons
    const signUpBtn = document.querySelector(".register-form .input-submit");
    const signInBtn = document.querySelector(".login-form .input-submit");

    signUpBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let email = document.querySelector(".register-form input[type='email']").value;
        let username = document.querySelector(".register-form input[type='username']").value;
        let password = document.querySelector(".register-form input[type='password']").value;

        if (username && password && email) {
            localStorage.setItem("savedUsername", username);
            localStorage.setItem("savedPassword", password);
            alert("Account created successfully!");
        } else {
            alert("Please enter all details.");
        }
    });

    signInBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        let enteredUsername = document.querySelector(".login-form input[type='username']").value;
        let enteredPassword = document.querySelector(".login-form input[type='password']").value;

        let savedUsername = localStorage.getItem("savedUsername");
        let savedPassword = localStorage.getItem("savedPassword");

        if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
            window.location.href = "https://host-bloodcloud.github.io/home";
        } else {
            alert("Incorrect username or password!");
        }
    });
});

//Validation Code For Inputs
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);

function submitForm() {
    if (validated()) {
        return true;
    }
    return false;
}

function validated() {
    if (email.value.trim() === '' || email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.trim() === '' || password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

    // Simulate login success
    // Replace the following line with your actual logic for handling a successful login
    // Redirect the user to home.html after a successful login
    window.location.href = "home.html";

    return true;
}

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}

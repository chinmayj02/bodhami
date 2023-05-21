// keep track of validated fields- total 6
var validFields = {
    'fname': false,
    'lname': false,
    'pnumber': false,
    'email': false,
    'password': false,
    'confirm-password': false
};

// First Name - only alphabets
// Last Name - only alphabets
function nameValidation(str, id) {
    var inputField = document.querySelector('#' + id);
    var spanElement = document.querySelector('#' + id + ' + span');
    spanElement.classList.add("warningText");
    // empty field
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields[id] = false;
    }
    else {
        // number or special characters
        if (/^[a-zA-Z\s]+$/.test(str)) {
            inputField.style.borderColor = "green";
            spanElement.textContent = '';
            validFields[id] = true;
        }
        else {
            inputField.style.borderColor = "red";
            spanElement.textContent = 'Field cannot contain numbers or special characters';
            validFields[id] = false;
        }
    }
}
// Email - email validation
function emailValidation(str) {
    var inputField = document.querySelector("#email");
    var spanElement = document.querySelector('#email + span');
    spanElement.classList.add("warningText");
    // empty field
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields["email"] = false;
    }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)) {
        inputField.style.borderColor = "green";
        spanElement.textContent = '';
        validFields["email"] = true;
    }
    else {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Email not valid';
        validFields["email"] = false;
    }
}
// Phone number -
// a. only + and numbers allowed.
// b. If + is there, 13 digits are allowed. 13 digits is excluding + symbol.
// c. Should not start with 0
// d. if + is not there only 10 digits allowed
function phoneValidation(str) {
    var inputField = document.querySelector("#pnumber");
    var spanElement = document.querySelector('#pnumber + span');
    spanElement.classList.add("warningText");
    // empty field
    if (str == '' || /^[\s]+$/.test(str)) {
        inputField.style.borderColor = "red";
        spanElement.textContent = 'Field cannot be empty';
        validFields["pnumber"] = false;
    }
    if (/^(?!0)[+]?(\d{13}|\d{10})$/.test(str)) {
        inputField.style.borderColor = "green";
        validFields["pnumber"] = true;
    }
    else {
        inputField.style.borderColor = "red";
        validFields["pnumber"] = false;
    }
}
// Password
// a. Min length - 6
// b. Should contain at-least one alphabet, one number, one char among @#$&!
function passwordValidation(str) {

}
// Repeat Password
// a. Should match with the Password field
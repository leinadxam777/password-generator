// Select the elements from the DOM we need to work with.

let password = document.getElementById('password');
// console.log(password);
let generateBtn = document.getElementById('generateBtn');
// console.log(generateBtn);
let copyBtn = document.getElementById('copyBtn');

// Function to generate a random 12 character password

function generatePassword() {
    // Declare a character variable
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Set a value for the length of our generated password
    let passwordLength = 12;

    // Declare an empty string that will store our password
    let passwordString = "";

    // Loop through our characters string 12 times, selcting random characters
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        passwordString += characters.substring(randomNumber, randomNumber + 1);
        console.log(passwordString)
    }

    password.value = passwordString;
}

function copyPassword () {
    navigator.clipboard.writeText(password.value);

    alert("Password copied to clipboard!");
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', copyPassword)
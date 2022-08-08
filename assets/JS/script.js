// Assignment code here

var characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz", "0123456789", 
 "~!@#$%^&*()-_=+"];

var userInput = "";

var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  password = generatePassword();
  passwordText.value = ''; 
  passwordText.value = password;
}

// Character length prompt
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === 
false) {
  characterLength = parseInt(prompt(`How log would you like your password to be? (8 
128)`));
  }

  var upper = false
  var lower = false
  var number = false
  var symbol = false

  while (true) {
 
    upper = window.confirm("Click OK to confirm uppercase characters");
    lower = window.confirm("Click OK to confirm lowercase characters");
    number = window.confirm("Click OK to confirm numeric characters");
    symbol = window.confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");

    break;
  }


  upper && (userInput += characters[0])

  lower && (userInput += characters[1])

  number && (userInput += characters[2])

  symbol && (userInput += characters[3])

  var password = "";

  for (var i = 0; i < characterLength; i++) {
    var index = Math.floor(Math.random() * userInput.length);
    password += userInput[index]
  }

  return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

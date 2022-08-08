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

// Character length 
function generatePassword() {
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength) === 
false) {
  characterLength = parseInt(prompt(`How long do you want your password to be?`));
  }

  var lower = false
  var upper = false
  var symbol = false
  var number = false

  while (true) {
 
    lower = window.confirm("Click OK to confirm lowercase characters");
    upper = window.confirm("Click OK to confirm uppercase characters");
    symbol = window.confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");
    number = window.confirm("Click OK to confirm numeric characters");

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

generateBtn.addEventListener("click", writePassword);

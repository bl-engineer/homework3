// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Select password length
  var passwordLength = prompt("Choose the password length between 8-128.");
  while (passwordLength < 8 || passwordLength > 128)
  {
    passwordLength = prompt("Invalid password. Choose password length between (8-128).");
  }
}
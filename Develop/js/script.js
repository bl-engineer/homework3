// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the input form
function writePassword() {
  var password = prompt("Input password of length (8-128).");
  while (password.length < 8 || password.length > 128) {
     password = prompt("Invalide password! The password length must be 8 to 128.");
  }
  let generatedPassword = generatePassword(password);
  let passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(oldPassword) {
  // Generate random characters 
  let randomCharacters = "";
  while (randomCharacters == "") {
    if (confirm("Click OK if you want to include uppercase characters in your password."))
    {
      randomCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (confirm("Click OK if you want to include lowercase characters in your password.."))
    {
      randomCharacters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (confirm("Click OK if you want to include numbers in your password.."))
    {
      randomCharacters += "0123456789";
    }
    if (confirm("Click OK if you want to include special characters in your password.."))
    {
      randomCharacters += "!@#$%^&*()_+=-`~<>,./?;:|\\'\"";
    }
    if (randomCharacters == "") {
      alert("You must include at least one random character for the safety of your password.")
    }
  }

  // Generate secured password with a length extended to double of the input for security
  let securedPassword = "";
  for (i = 0; i < oldPassword.length * 2; i++) {
    securedPassword += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length))
  }
  return securedPassword;
}

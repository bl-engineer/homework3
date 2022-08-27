// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Prompt password length 
  var passwordLength = prompt("Input password length (8-128).");
  
  // Check if password length is a type of `number` and between (8-128)
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Invalide input! The password length must be numbers and between 8 to 128")
  }
  
  // Select character classes
  var characterClass = "";

  while (characterClass == "") {
    // Initialize a counter to track the clicks on `Ok`
    var countOkClick = 0;
    if (confirm("Click OK if you want to include uppercase characters in your password"))
    {
      // To include uppercase characters
      characterClass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      countOkClick += 1;
    }
    // To include lowercase characters
    if (confirm("Click OK if you want to include lowercase characters in your password"))
    {
      characterClass += "abcdefghijklmnopqrstuvwxyz";
      countOkClick += 1;
    }
    // To include numbers
    if (confirm("Click OK if you want to include numbers in your password"))
    {
      characterClass += "0123456789";
      countOkClick += 1;
    }
    // To include special characters
    if (confirm("Click OK if you want to include special characters in your password"))
    {
      characterClass += "!@#$%^&*()_+=-`~<>,./?;:|\'";
      countOkClick += 1;
    }
    // To alert and reject if there no any group class included. At least one should be
    if (characterClass == "") {
      alert("You must include at least one character class for the safety of your password")
    }
    // Tracking the `Ok` click to alert user and give an option to include more character class for safer passport
    while (countOkClick == 1){
      alert("Warning! Your password is too weak. It contains only one type of characters")
      if (confirm("Click OK if you want to include more special characters or click CANCEL to generate it anyway"))
        characterClass = ""
        // Out of the `if`
        countOkClick += 1;
    }
  }
 
  // Generate secured password
  var password = ""
  for (i = 0; i < passwordLength; i++) {
    password += characterClass.charAt(Math.floor(Math.random() * characterClass.length))
  }
  return password;
}

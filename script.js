// Assignment Code
var generateBtn = document.querySelector("#generate"); // The variable is holding the button.

// Write password to the #password input

var specialCharacters = "!@#%%^()*&/><.,;'[]"
var upperCase ="ABCDEFGHIJKLMONOPQRSTUVWXYZ"
var lowerCase = "0123456789abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
  var character = window.prompt("How many characters would you like this password to contain?");
  var password = "";
  var chars = "";

  if (character < 8) {
    alert("Password length must be at least 8 characters.");
    return null;
  }

  if (character > 128) {
    alert("Password length cannot exceed 128 characters.")
  }

  var special = window.confirm("Do you want to use special characters?");
  var upper = window.confirm("Do you want to use uppercase letters?");
  var lower = window.confirm("Do you want to use lowercase letters?");
  var minimumcount = 0;

  for (var i = 0; i <= character; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    var randomLetter = chars[randomNumber];
    password += randomLetter;
    console.log(password);
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


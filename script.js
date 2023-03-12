// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); }

function generatePassword() {
var character = window.prompt ("How many characters would you like this password to contain?"); 

if (character < 8) {
  alert("Password length must be at least 8 characters.");
  return null;
} 

if (character > 128) {
  alert("Password length cannot exceed 128 characters.")
}

var special = window.confirm ("Do you want to use special characters?");
var upper = window.confirm ("Do you want to use uppercase letters?");
var lower = window.confirm ("Do you want to use lowercase letters?");
var minimumcount=0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#%%^()*&/><.,;'[]ABCDEFGHIJKLMONOPQRSTUVWXYZ";
var passwordLength = 10;
var password= "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
 // Grab character at random position character@//
 }
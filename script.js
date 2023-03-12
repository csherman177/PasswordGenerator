// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); }

var character = window.prompt ("How many characters would you like this password to contain?"); 
// How do I limit the number of characters?
 
var special = window.confirm ("Do you want to use special characters?");
var upper = window.confirm ("Do you want to use uppercase letters?");
var lower = window.confirm ("Do you want to use lowercase letters?");

var minimumcount=0;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#%%^()*&/><.,;'[]ABCDEFGHIJKLMONOPQRSTUVWXYZ";
var passwordLength = 10;
var password= "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
 // Grab character at random position character@//
 }
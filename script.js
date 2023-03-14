// Assignment Code
var specialCharacters = ['!', '@', '#', '%','^','(',')','*', '&', '/','>', '.',';'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];

var generateBtn = document.querySelector("#generate"); // The variable is holding the button.

// Write password to the #password input

function generatePasswordOptions () {
  var options = passwordOptions;
}

var passwordOptions = {
  character: character,
  special: special,
  upper: upper,
  lower: lower,
};

return passwordOptions;


function generatePassword() {
  var character = window.prompt("How many characters would you like this password to contain?");
  var password = "";
  var chars = "";
  
  if (character < 8) {
    alert("Password length must be at least 8 characters.");
    // return null;
  }

  if (character > 128) {
    alert("Password length cannot exceed 128 characters.")
  }

  //create if statement: if special characters is true the console long (chosen)
  var special = window.confirm("Do you want to use special characters?");
   if { (special===true)
    console.log(specialCharacters)    
    if (special===false)
    }
  var upper = window.confirm("Do you want to use uppercase letters?");
  if { (upper===true)
    console.log(upperCase)    
    if (special===false)
    }
  var lower = window.confirm("Do you want to use lowercase letters?");
  var minimumcount = 0;
  if { (lower===true)
    console.log(lowerCase)    
    if (special===false)
    }


  for (var i = 0; i <= character; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    var randomLetter = chars[randomNumber];
    password += randomLetter;
    console.log(password);
  }
 return password;
}

var generateBtn = document.querySelector ("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




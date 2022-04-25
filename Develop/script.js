// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let len = prompt("Please enter length of your password minimum 8 and maximum 128 characters");
  
  if (len < 8 || len > 128){
    console.log("Invalid Length, please enter valid length for password. ")
    return
  }

  let hasUpperCase = confirm("Do you need uppercase in your password?")
  let hasLowerCase = confirm("Do you need lowercase in your password?")
  let hasNumber = confirm("Do you need number's in your password?")
  let hasSpecialChar = confirm("Do you need special characters in your password?");
 
  var password = generatePassword(len, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword (len, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar) {
  
  console.log(len, hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar)

  var password  = '';
  var randomString = '';
  var stringLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var stringUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var stringNumber = '0123456789';
  var stringSpecial = '@#$!%&*';

  if (hasLowerCase) {
    password += generateRandomChar(stringLowerCase);
    randomString +=  stringLowerCase;
  }
  
  if(hasUpperCase) {
    password += generateRandomChar(stringUpperCase);
    randomString +=  stringUpperCase;
  }
  
  if(hasNumber){
    password += generateRandomChar(stringNumber);
    randomString +=  stringNumber;
  }
 
  if(hasSpecialChar){
    password += generateRandomChar(stringSpecial);
    randomString +=  stringSpecial;
  }
        
  for (i = password.length; i < len; i++) {
    password += generateRandomChar(randomString);
  } 
  return password;   
}

function generateRandomChar(str){
  var char = Math.floor(Math.random()* str.length + 1);
  return str.charAt(char)
}
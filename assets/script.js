// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Write password to the #password input
function writePassword() {
 var randomLength = getRandomInt(8,129)
  var password = generatePassword(randomLength,char);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(l, charaters){
  var pwd = "";
  for(var i = 0; i < l; i++){
    pwd += charaters.charAt(Math.floor(Math.random() * charaters.length));
  }
  return pwd;
}
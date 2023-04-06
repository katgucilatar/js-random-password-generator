
var generateBtn = document.querySelector("#generate");

function writePassword() {
  let passwordText = document.querySelector("#password");
  let length = Number(prompt("Enter the length of your password between 8-128 characters."))
  let charType = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include. ")
  
  passwordText.value = password(length, charType);

  function password(length, charType) {
    let charGen = {
      lowercase: 'abcdefghijklmnop',
      uppercase: 'ABCDEFGHIJKLMNOP',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };
    
    var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for(var i=0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i]];
    }
    
    console.log(charSet);

    var retVal = "";
    
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }
}

generateBtn.addEventListener("click", writePassword);


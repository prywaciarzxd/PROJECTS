
var passwordButton = document.querySelector(".generate-password")
var passwordLength = parseInt(document.querySelector(".password-length").value)

document.querySelector(".number").textContent = passwordLength

document.querySelector(".add").addEventListener("click", function(){
    passwordLength += 1
    document.querySelector(".password-length").value = passwordLength
    document.querySelector(".number").textContent = passwordLength
    
})
document.querySelector(".sub").addEventListener("click", function() {
    passwordLength -= 1
    document.querySelector(".password-length").value = passwordLength
    document.querySelector(".number").textContent = passwordLength
    
})

document.querySelector(".password-length").addEventListener("click", function() {
    passwordLength = parseInt(document.querySelector(".password-length").value)
    document.querySelector(".number").textContent = passwordLength
})

passwordButton.addEventListener("click", function() {
    var allInputs = document.querySelectorAll("input");
    var isEmpty = 0;
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var smallAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var regex = ['!','@', '#','$', '%', '^', '&', '*', '(',')','-', '+', '=', '{', '}', '[', ']', 
    '|', '\\', '/', ';', ':', '"', "'", '<', '>', ",", '.', '?'] 
    var passwordLength = allInputs[0].value
    var array = []
    var password = []
    if (passwordLength.length === 0) {
        alert("You cant leave password length field empty!")
    }
    else {
        for (var i = 1; i<allInputs.length; i++) {
            if (allInputs[i].checked === false) {
                isEmpty += 1;
            }
        }
        if (isEmpty === 4) {
            alert("You have to choose some characters to your password!")
        }
        else {
            
            if (allInputs[1].checked === true) {
                for (var i = 0; i< alphabet.length; i++) {
                    array.push(alphabet[i])
                }
            }
            if (allInputs[2].checked === true) {
                for (var i = 0; i< smallAlphabet.length; i++) {
                    array.push(smallAlphabet[i])
                }
            }
            if (allInputs[3].checked === true) {
                for (var i = 0; i< numbers.length; i++) {
                    array.push(numbers[i])
                }
            }
            if (allInputs[4].checked === true) {
                for (var i = 0; i< regex.length; i++) {
                    array.push(regex[i])
                }
            }
        
        for (var i = 0; i < passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * array.length)
            password.push(array[randomNumber])
        }
        password = password.join("")


        document.querySelector(".after-generate h1").textContent = `Your new generated password: ${password}`
        
            
        }
    }
    
})
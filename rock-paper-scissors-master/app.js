
var score;
score = 0;
var a;
var computer_choice;
var is_true = true;
function generate_computer_choice() {

    computer_choice = Math.floor(Math.random() * 3)
    if (computer_choice == 0) {
        computer_choice = 'paper'
    }
    else if (computer_choice == 1){
        computer_choice = 'scissors'
    }
    else {
        computer_choice = 'rock'
    }
    
}

generate_computer_choice()

const button_rock = document.querySelector(".rock").addEventListener("click", function() {
    
    if (is_true){
        a = "rock";
        check_winner(computer_choice, a)
    }
    is_true = false;
    this.disabled=true;
    
    
})



const paper_button = document.querySelector(".paper").addEventListener("click", function() {
    
    if (is_true){
        a = "paper";
        check_winner(computer_choice, a)
    }
    is_true = false;
    this.disabled=true;
    
    
})

const scissors_button = document.querySelector(".scissors").addEventListener("click", function() {
    
    if (is_true){
        a = "scissors";
        check_winner(computer_choice, a)
    }
    is_true = false;
    this.disabled=true;
    
    
})

const reset_button = document.querySelector(".try-again").addEventListener("click", function() {
    generate_computer_choice()
    document.querySelector('#who-won').textContent = "";
    is_true = true;
})


function check_winner(computer, player) {
    if ( computer === "scissors" && player === "paper" || computer === "rock" && player === "scissors" || computer === "paper" && player === "rock"){
        score -= 1
        document.querySelector(".score-actual").textContent = score;
        document.querySelector('#who-won').textContent = "You lose";
    }
    else if ( computer === player) {
        score += 0
        document.querySelector(".score-actual").textContent = score;
        document.querySelector('#who-won').textContent = "DRAW";
    }
    else {
        score += 1
        document.querySelector(".score-actual").textContent = score;
        document.querySelector('#who-won').textContent = "You win";
    }
    }




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

const button_rock = document.querySelector(".rock img").addEventListener("click", function() {
    
    if (is_true){
        a = "rock";
        check_winner(computer_choice, a)
    }
    else {
        prompt("You need to click try again button to play another turn")

    }
    is_true = false;
    
})



const paper_button = document.querySelector(".paper img").addEventListener("click", function() {
    
    if (is_true){
        a = "paper";
        check_winner(computer_choice, a)
    }
    else {
        prompt("You need to click try again button to play another turn")

    }
    is_true = false;
    
    
    
})

const scissors_button = document.querySelector(".scissors img").addEventListener("click", function() {
    
    if (is_true){
        a = "scissors";
        check_winner(computer_choice, a)
    }
    else {
        prompt("You need to click try again button to play another turn")

    }
    is_true = false;
    

    
    
    
})

const reset_button = document.querySelector(".try-again .button-again").addEventListener("click", function(){
    is_true = true;
    document.querySelector(".who-won span").textContent = ""
    generate_computer_choice()
})

function check_winner(computer, player) {
    if ( computer === "scissors" && player === "paper" || computer === "rock" && player === "scissors" || computer === "paper" && player === "rock"){
        score -= 1
        document.querySelector(".score-actual").textContent = score;
        document.querySelector(".who-won span").textContent = "You lose"
        
    }
    else if ( computer === player) {

        score += 0
        document.querySelector(".score-actual").textContent = score;
        document.querySelector(".who-won span").textContent = "Draw"
    }
    else {

        score += 1
        document.querySelector(".score-actual").textContent = score;
        document.querySelector(".who-won span").textContent = "You win"
    }
    }


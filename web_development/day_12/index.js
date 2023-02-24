var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1

document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

function who_wins(rand1, rand2) {
    if (rand1 === rand2) {
        document.querySelector(".container h1").textContent = "It is a draw!"
    }
    else if (rand1 > rand2) {
        document.querySelector(".container h1").textContent = "Player one has won"
    }
    else {
        document.querySelector(".container h1").textContent = "Player 2 has won"
    }
}

who_wins(randomNumber1, randomNumber2)
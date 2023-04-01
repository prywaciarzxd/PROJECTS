let score = 0;
let highscore = 0;

let rightBigger = false;

const leftSide = document.querySelector('.main-content-quiz .side:first-of-type');
const leftImg = leftSide.querySelector('img');
const leftName = leftSide.querySelector('h2');
const leftArea = leftSide.querySelector('h1');

const rightSide = document.querySelector('.main-content-quiz .side:last-of-type');
const rightImg = rightSide.querySelector('img');
const rightName = rightSide.querySelector('h2');
const rightArea = rightSide.querySelector('h1');

const scoreDisplay = document.querySelector('.score .score-normal');
const highscoreDisplay = document.querySelector('.highscore .high-score');


async function getCountryData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
}

async function setRandomCountries() {
    const countries = await getCountryData();
    var leftIndex = Math.floor(Math.random() * countries.length);
    var rightIndex = Math.floor(Math.random() * countries.length);


    while (rightIndex === leftIndex) {
        rightIndex = Math.floor(Math.random() * countries.length);
    }

    var leftCountry = countries[leftIndex]
    var rightCountry = countries[rightIndex]

    leftImg.src = leftCountry.flags.png;
    leftName.textContent = leftCountry.name.common;
    leftArea.textContent = leftCountry.area.toLocaleString() + ' km²';

    rightImg.src = rightCountry.flags.png;
    rightName.textContent = rightCountry.name.common;
    

    if (leftCountry.area > rightCountry.area) {
        rightBigger = false;
    }
    else {
        rightBigger = true;
    }
    
    

}

function popUp(number) {
    var popup = window.open("http://127.0.0.1:5555/templates/quiz1", "Answer", "width=200,height=200");
    if (number === 0 ) {
        popup.document.write(`You got it wrong!, your score is 0 now!, your highscore is equal to ${highscore}`)
    }
    setTimeout(function(){
        popup.close();
    }, 2000);
}

document.querySelector(".bigger").addEventListener("click", function() {
    if (rightBigger) {
        score++;
        scoreDisplay.textContent = score;
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    }
    else {
        score = 0;
        scoreDisplay.textContent = score;
        popUp(score)
    }
    
    setRandomCountries()
})

document.querySelector(".smaller").addEventListener("click", function() {
    if (rightBigger === false) {
        score++;
        scoreDisplay.textContent = score;
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    }
    else {
        score = 0;
        scoreDisplay.textContent = score;
        popUp(score)
    }
    setRandomCountries()
})

setRandomCountries()
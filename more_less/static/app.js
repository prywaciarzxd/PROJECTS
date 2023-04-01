// ustawienie początkowych wartości
let score = 0;
let highscore = 0;

// pobranie elementów DOM
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

// pobranie danych z API
async function getCountryData() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  return data;
}

// wylosowanie dwóch krajów
async function setRandomCountries() {
  const countries = await getCountryData();
  const leftIndex = Math.floor(Math.random() * countries.length);
  let rightIndex = Math.floor(Math.random() * countries.length);

  // upewnienie się, że kraje są różne
  while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * countries.length);
  }

  const leftCountry = countries[leftIndex];
  const rightCountry = countries[rightIndex];

  // wyświetlenie informacji o krajach
  leftImg.src = leftCountry.flags.png;
  leftName.textContent = leftCountry.name.common;
  leftArea.textContent = leftCountry.area.toLocaleString() + ' km²';

  rightImg.src = rightCountry.flags.png;
  rightName.textContent = rightCountry.name.common;
  

  // zapisanie poprawnej odpowiedzi
  if (leftCountry.area > rightCountry.area) {
    leftSide.dataset.bigger = true;
  } else {
    rightSide.dataset.bigger = true;
  }
}

// sprawdzenie odpowiedzi
function checkAnswer(e) {
  const chosenSide = e.target.parentNode;
  const chosenBigger = chosenSide.dataset.bigger;

  if (chosenBigger === 'true') {
    score++;
    scoreDisplay.textContent = score;
    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }
  } else {
    score = 0;
    scoreDisplay.textContent = score;
  }
  setRandomCountries();
  
}

// nasłuchiwanie na przyciski
const buttons = document.querySelectorAll('.main-content-quiz button');
buttons.forEach(button => {
  button.addEventListener('click', checkAnswer);
});

// wywołanie funkcji do losowania pierwszych krajów
setRandomCountries();

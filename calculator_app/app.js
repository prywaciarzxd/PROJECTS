// Pobieranie elementów HTML
const input = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('.calculator-container button');

// Definiowanie funkcji, która obsługuje kliknięcia przycisków
function handleClick(event) {
  const button = event.target;
  const buttonValue = button.textContent;
  
  // Obsługa wciśnięcia przycisku "="
  if (button.classList.contains('equals')) {
    input.value = eval(input.value);
  }
  
  // Obsługa wciśnięcia przycisku "AC"
  else if (button.classList.contains('AC')) {
    input.value = '';
  }
  
  // Obsługa wciśnięcia przycisku "SQRT"
  else if (button.classList.contains('sqrt')) {
    input.value = Math.sqrt(input.value);
  }
  
  // Obsługa innych przycisków
  else {
    input.value += buttonValue;
  }
}

// Dodanie nasłuchiwania zdarzeń dla każdego przycisku
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

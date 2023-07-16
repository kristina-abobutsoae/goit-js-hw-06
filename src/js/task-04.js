const counterValue = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let value = 0;

decrementButton.addEventListener('click', () => {
  value--;
  counterValue.textContent = value;
});

incrementButton.addEventListener('click', () => {
  value++;
  counterValue.textContent = value;
});
// Element Ref
const addBtn = document.querySelector('.add');
const substractBtn = document.querySelector('.subtract');
const incrementBy = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const display = document.querySelector('#number');

// add Event Listener

addBtn.addEventListener('click', handleIncremnt);
substractBtn.addEventListener('click', handleDecrement);
resetBtn.addEventListener('click', handleReset);

function handleIncremnt() {
  display.textContent = Number(display.textContent) + Number(incrementBy.value);
}

function handleDecrement() {
  if (display.textContent > 0) {
    display.textContent =
      Number(display.textContent) - Number(incrementBy.value);
  }
}

function handleReset() {
  incrementBy.value = 1;
  display.textContent = 0;
}

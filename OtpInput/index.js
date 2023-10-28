const inputDiv = document.querySelector('#inputs');

inputDiv.addEventListener('keyup', function (e) {
  const elm = e.target;
  if (elm.nextElementSibling && e.key != 'Backspace' && e.key != 'Tab') {
    elm.nextElementSibling.focus();
  }
});

inputDiv.addEventListener('keydown', function (e) {
  const elm = e.target;
  if (!elm.value && elm.previousElementSibling && e.key == 'Backspace') {
    elm.previousElementSibling.focus();
  }
});

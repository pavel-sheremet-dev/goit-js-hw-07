const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', onInputFocus);

function onInputFocus() {
  console.log('фокус');
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.remove('valid');
    return;
  }
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid');
    return;
  }
}

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const currentValueLength = Number(event.currentTarget.value.length);
  if (!currentValueLength) {
    return;
  }
  currentValueLength === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}

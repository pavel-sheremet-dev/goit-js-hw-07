const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('focus', onInputFocus);

// onInputFocus ver 1.0
// логика следующая: если классов valid или invalid нет, то ничего не делаем, если есть, то удаляем, тот, который есть

// function onInputFocus() {
//   inputRef.classList.remove('invalid');
//   if (inputRef.classList.contains('valid')) {
//     inputRef.classList.remove('valid');
//     return;
//   }
//   if (inputRef.classList.contains('invalid')) {
//     inputRef.classList.remove('invalid');
//     return;
//   }
// }

// onInputFocus ver 1.1
// та же логика, только чуть по-другому прописана и немного читабельнее

function onInputFocus() {
  const hasValid = inputRef.classList.contains('valid');
  const hasInvalid = inputRef.classList.contains('invalid');
  if (!(hasValid || hasInvalid)) {
    return;
  }
  inputRef.classList.remove(hasValid ? 'valid' : 'invalid');
}

// onInputFocus ver 2.0

// function onInputFocus() {
//   inputRef.classList.remove('valid', 'invalid');
// }

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

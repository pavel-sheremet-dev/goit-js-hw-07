const refs = {
  input: document.querySelector('#name-input'),
  lableName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.lableName.textContent = event.target.value;
  if (!event.target.value) {
    refs.lableName.textContent = 'Незнакомец';
  }
}

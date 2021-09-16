const refs = {
  input: document.querySelector('#name-input'),
  lableName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.lableName.textContent = !event.target.value
    ? 'Незнакомец'
    : event.target.value;
}

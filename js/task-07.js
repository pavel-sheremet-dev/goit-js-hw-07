const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const rangeInputsetUp = (minRem = 1, maxRem = 5, step = 1) => {
  inputRef.value = minRem;
  textRef.style.fontSize = inputRef.value + 'rem';
  inputRef.min = minRem;
  inputRef.max = maxRem;
  inputRef.step = step;
};

rangeInputsetUp();

inputRef.addEventListener('change', onInputChange);

function onInputChange(e) {
  textRef.style.fontSize = e.target.value + 'rem';
}

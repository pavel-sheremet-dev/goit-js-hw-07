const refs = {
  input: document.querySelector('input[type="number"]'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  container: document.querySelector('#boxes'),
};

refs.renderBtn.textContent += ' (Ctrl + Enter)';
refs.destroyBtn.textContent += ' (Esc)';
refs.input.value = Math.ceil(Math.random() * 20);

const createIterableArray = length => new Array(length).fill(0);

const generateRandomColor = () => {
  return `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${
    255 * Math.random()
  })`;
};

const createDivEl = (divEl, currentIndex) => {
  divEl = document.createElement('div');
  divEl.textContent = 1 + currentIndex;
  divEl.style.width = 30 + currentIndex * 10 + 'px';
  divEl.style.height = 30 + currentIndex * 10 + 'px';
  divEl.style.background = generateRandomColor();
  divEl.style.margin = '5px';
  return divEl;
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);

function onRenderBtnClick() {
  const boxQty = Number(refs.input.value);
  const iterableArray = createIterableArray(boxQty);
  const divElements = iterableArray.map(createDivEl);
  refs.container.append(...divElements);
  refs.input.value = Math.ceil(Math.random() * 20);
}

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.container.innerHTML = '';
  refs.input.value = Math.ceil(Math.random() * 20);
}

window.addEventListener('keydown', onEnterPress);

function onEnterPress(e) {
  console.log(e.code);
  if (
    (e.code === 'Enter' && e.ctrlKey) ||
    (e.code === 'NumpadEnter' && e.ctrlKey)
  ) {
    onRenderBtnClick();
  }
  if (e.code === 'Escape') {
    destroyBoxes();
  }
}

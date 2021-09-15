const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridiensList = document.querySelector('#ingredients');
console.log(ingridiensList);

const ingridiensItems = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});

ingridiensList.append(...ingridiensItems);

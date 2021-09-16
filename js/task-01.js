const items = document.querySelectorAll('.item');
console.log(`В списке ${items.length} категории`);

const printCategoryDescription = item => {
  const title = item.querySelector('h2');
  const items = item.querySelectorAll('li');
  console.log(
    ` - категория: ${title.textContent} (количество элементов: ${items.length})`,
  );
};

items.forEach(printCategoryDescription);

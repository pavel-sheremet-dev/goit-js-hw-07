const categoriesListItems = document.querySelectorAll('.item');

console.log(`В списке ${categoriesListItems.length} категории`);

const printCategoryDescription = item => {
  const itemTitleName = item.querySelector('h2').textContent;
  const itemListItemsLength = item.querySelectorAll('li').length;
  console.table([
    `Категория: ${itemTitleName}`,
    `Количество элементов: ${itemListItemsLength}`,
  ]);
};

categoriesListItems.forEach(printCategoryDescription);

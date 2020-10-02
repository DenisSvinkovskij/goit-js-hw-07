const listRef = document.querySelector('#categories');

console.log(`В списке ${listRef.children.length} категории.`);

/**
 *
 *вторая часть
 */

const liItemRef = listRef.querySelectorAll('li.item');

// console.log(liItemRef.);
liItemRef.forEach(({ children }) =>
  console.log(
    `Категория: ${children[0].textContent}\nКоличество элементов: ${children[1].children.length}`,
  ),
);
/**
 * вижу что использовал как то многовато children-ов...
 * но почему то только до этого додуммался
 */

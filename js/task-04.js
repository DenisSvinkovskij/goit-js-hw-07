const btnDecRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncRef = document.querySelector(
  'button[data-action="increment"]',
);
let outRef = document.querySelector('#value');

console.log(outRef);
const onDecrementBtnClick = () =>
  (outRef.textContent = Number(outRef.textContent) - 1);
const onIncrementBtnClick = () =>
  (outRef.textContent = Number(outRef.textContent) + 1);

btnDecRef.addEventListener('click', onDecrementBtnClick);
btnIncRef.addEventListener('click', onIncrementBtnClick);

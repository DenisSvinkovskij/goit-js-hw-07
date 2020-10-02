const inputRef = document.querySelector('#name-input');
let nameOutRef = document.querySelector('#name-output');

const onChangeInputName = event => {
  nameOutRef.textContent = event.target.value;
  if (event.target.value === '') {
    nameOutRef.textContent = 'незнакомец';
  }
};

inputRef.addEventListener('input', onChangeInputName);

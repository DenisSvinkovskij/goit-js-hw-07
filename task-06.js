const inputRef = document.querySelector('#validation-input');

const onInputFocusChange = () => {
  if (
    Number(inputRef.value.length) === Number(inputRef.dataset.length)
  ) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
  if (
    inputRef.value.length < inputRef.dataset.length ||
    inputRef.value.length > inputRef.dataset.length
  ) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('change', onInputFocusChange);

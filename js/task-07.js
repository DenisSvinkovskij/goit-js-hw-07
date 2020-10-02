const inputRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

const onInputControlMove = () => {
  textRef.style.fontSize = inputRef.value + 'px';
};

inputRef.addEventListener('input', onInputControlMove);

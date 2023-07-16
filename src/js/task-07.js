const fontSizeControl = document.querySelector('input#font-size-control');
const textElement = document.querySelector('span#text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  textElement.style.fontSize = fontSize;
});
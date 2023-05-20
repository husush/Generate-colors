const numAndChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// console.log(numAndChar.length);

function getChar(index) {
  return numAndChar[index];
}
console.log(getChar(4));
function generateNewColor() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * numAndChar.length);
    hexColor += getChar(randomNum);
  }
  return hexColor;
}

document.querySelector('button').addEventListener('click', () => {
  document.body.style.backgroundColor = generateNewColor();
  document.querySelector('p').textContent = generateNewColor();
});

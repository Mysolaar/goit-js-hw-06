function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");

btnElem.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanElem.textContent = randomColor;
});
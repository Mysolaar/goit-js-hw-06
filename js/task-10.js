function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.getElementById("boxes");
const createBoxes = document.querySelector("[data-create]");
const destroyBoxes = document.querySelector("[data-destroy]");
const amount = document.querySelector("input");

const startSize = 30;
let boxSize = 30;

createBoxes.addEventListener("click", () =>{
 for (let i = 0; i < amount.value; i++) {
    const newBox = document.createElement("div");
    newBox.className = "border";
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxSize += 10;
    divBoxes.appendChild(newBox);
 }
});


destroyBoxes.addEventListener("click", () =>{
  divBoxes.innerHTML = "";
  boxSize = startSize;
});

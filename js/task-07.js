const inputElem = document.querySelector("#font-size-control");
const txtElem = document.querySelector("#text");

inputElem.value = 16;

inputElem.addEventListener("input", (event) => {
    event.preventDefault();
    const inputVal = inputElem.value;
    txtElem.style.fontSize = `${inputVal}px`;
});
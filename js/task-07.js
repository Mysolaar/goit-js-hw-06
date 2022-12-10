const inputElem = document.querySelector("#font-size-control");
const txtElem = document.querySelector("#text");

inputElem.addEventListener("input", () =>{
    const inputVal = inputElem.value;
    txtElem.style.fontSize = `${inputVal}px`;
});
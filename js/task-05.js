const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", () =>{
    const inputValue = inputElem.value;
    if(inputValue === ""){
        outputElem.textContent = "Anonymous";
        return;
    }
    outputElem.textContent = inputValue;
});

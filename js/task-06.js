const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener("blur", () => {
    const inputVal = inputElem.value.trim();
    const inputLength = inputElem.getAttribute("data-length");
    if (inputVal.length === Number(inputLength)) {
        inputElem.classList.add("valid");
        inputElem.classList.remove("invalid");
    } else {
        inputElem.classList.add("invalid");
        inputElem.classList.remove("valid");
    }
})
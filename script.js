let size = 0;
const inputGridSize = document.querySelector(".grid-size");
const addSizeButton = document.querySelector("button");
const gridContainer = document.querySelector(".grid-container");
const displayGridSize = document.querySelector(".display-size");
const colorInput = document.querySelector(".color-picker");

function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("grid-column");
        for (let j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.classList.add("grid-row");
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-row")) {
        event.target.style.backgroundColor = colorInput.value;
    }
});

addSizeButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputGridSize.value > 100) {
        alert("Size cannot be above 100");
        return;
    }
    size = inputGridSize.value;

    displayGridSize.textContent = `${inputGridSize.value} x ${inputGridSize.value}`;
    inputGridSize.value = "";
    gridContainer.textContent = "";

    makeGrid(size);
});

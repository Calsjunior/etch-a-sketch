let size = 0;
let currentColorMode = "COLOR";

const inputGridSize = document.querySelector(".sketch__input");
const addSizeButton = document.querySelector(".sketch__button");
const gridContainer = document.querySelector(".grid");
const displayGridSize = document.querySelector(".sketch__display");
const controls = document.querySelector(".sketch__controls");
const colorInput = document.querySelector(".control__input");
const rainbowMode = document.querySelector(".control__input--rainbow");

colorInput.value = "#000000";

function makeGrid(size) {
    gridContainer.textContent = "";

    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("grid__column");

        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid__cell");
            column.appendChild(cell);
        }
        gridContainer.appendChild(column);
    }
}

function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

controls.addEventListener("click", (event) => {
    // Check if the user clicked the color picker
    if (event.target === colorInput) {
        currentColorMode = "COLOR";
    }
    // Check if the user clicked the rainbow swatch
    else if (event.target === rainbowMode) {
        currentColorMode = "RAINBOW";
    }
});

gridContainer.addEventListener("mouseover", (event) => {
    const target = event.target;

    if (target.classList.contains("grid__cell")) {
        if (currentColorMode === "COLOR") {
            target.style.backgroundColor = colorInput.value;
        } else if (currentColorMode === "RAINBOW") {
            const color = randomRgb();
            target.style.backgroundColor = color;
            rainbowMode.style.backgroundColor = color;
        }
    }
});

addSizeButton.addEventListener("click", () => {
    const input = parseInt(inputGridSize.value);

    if (Number.isNaN(input) || input <= 0) {
        alert("Please enter a valid number");
        return;
    }
    if (input > 100) {
        alert("Size cannot be above 100 to prevent lag!");
        return;
    }

    size = input;
    displayGridSize.style.visibility = "visible";
    displayGridSize.textContent = `${size} x ${size}`;
    inputGridSize.value = "";

    makeGrid(size);
});

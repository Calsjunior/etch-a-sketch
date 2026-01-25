let size = 0;
let currentColorMode = "COLOR";

const inputGridSize = document.querySelector(".grid-size");
const addSizeButton = document.querySelector("button");
const gridContainer = document.querySelector(".grid-container");
const displayGridSize = document.querySelector(".display-size");
const colorMode = document.querySelector(".color-mode");
const rainbowMode = document.querySelector(".rainbow-mode");
const colorInput = document.querySelector(".color-picker");
colorInput.value = "";

function makeGrid(size) {
    gridContainer.textContent = "";

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

function randomRgb() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

colorMode.addEventListener("click", (event) => {
    if (event.target.classList.contains("color-picker")) {
        currentColorMode = "COLOR";
    } else if (event.target.classList.contains("rainbow-mode")) {
        currentColorMode = "RAINBOW";
    }
});

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-row")) {
        if (currentColorMode == "COLOR") {
            event.target.style.backgroundColor = colorInput.value;
        } else if (currentColorMode == "RAINBOW" && !event.target.style.backgroundColor) {
            // Prevents redrawing on already drawn color only in rainbow mode
            event.target.style.backgroundColor = randomRgb();
            rainbowMode.style.backgroundColor = event.target.style.backgroundColor;
        }
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

    makeGrid(size);
});

let size = 0;
const input = document.querySelector("#grid-size");
const button = document.querySelector("button");
const gridContainer = document.querySelector("#grid-container");
button.addEventListener("click", (event) => {
    event.preventDefault();
    size = input.value;

    gridContainer.innerHTML = "";

    makeGrid(size);
    hoverGrid();
});

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

function hoverGrid() {
    const gridRows = document.querySelectorAll(".grid-row");
    gridRows.forEach((gridRow) => {
        gridRow.addEventListener("mouseover", () => {
            gridRow.classList.add("hovered");
        });
    });
}

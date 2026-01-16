function makeGrid(size) {
    const gridContainer = document.querySelector("#grid-container");
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

makeGrid(16);
hoverGrid();

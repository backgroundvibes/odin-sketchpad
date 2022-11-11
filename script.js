let grid = document.querySelector(".container")
for (let i = 0; i < 16; i++) {
    let gridColumn = document.createElement("div")
    gridColumn.className = "column"
    grid.appendChild(gridColumn)
}

function addRows(gridColumn) {
    for (let i = 0; i < 16; i++) {
        let gridRow = document.createElement("div")
        gridRow.className = "row"
        gridColumn.appendChild(gridRow)
    }
}

let columns = document.querySelectorAll(".column")
columns.forEach(addRows)

let rowSegments = document.querySelectorAll(".row")

function pen (gridRow) {
    gridRow.addEventListener('mouseover', () => gridRow.classList.add("black"))
}

function hover (gridRow) {
    gridRow.classList.add("black")
}

rowSegments.forEach(pen)

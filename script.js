let grid = document.querySelector(".container")
for (let i = 0; i < 16; i++) {
    let gridSegment = document.createElement("div")
    gridSegment.className = "section"
    grid.appendChild(gridSegment)
}

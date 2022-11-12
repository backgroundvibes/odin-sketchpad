let grid = document.querySelector(".container")
let num = 16
addColumns(num)
function addColumns (num) {
    for (let i = 0; i < num; i++) {
        let gridColumn = document.createElement("div")
        gridColumn.className = "column"
        grid.appendChild(gridColumn)
    }
}

function addRows(gridColumn) {
   
    for (let i = 0; i < num; i++) {
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

rowSegments.forEach(pen)

let segSet = document.querySelector(".segmentChange")
segSet.addEventListener('click', () => {
   let answer = prompt("Please enter how many squares per grid side you would like (Maximum: 100):")
   if (answer < 101) {
    let grid = document.querySelector(".container")
    while (grid.firstChild) {
        grid.removeChild (grid.firstChild)
    }
    let num = answer
    addColumns(num)

    function addRows(gridColumn) {
   
        for (let i = 0; i < num; i++) {
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

    rowSegments.forEach(pen)

   } else {
    alert ("Number too big!")
   }

})
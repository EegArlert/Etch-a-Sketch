const gridContainer = document.querySelector(".container-grid");
const button = document.querySelector(".pixel-size");


//creating 16x16 grid via div
createGrid(16);
startSketching();

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
}

function changeGrid(size){
    resetGrid();
    
    for(let i = 0; i < size; i++){
        for(let k = 0; k < size; k++){
            gridContainer.appendChild()
        }
    }
}


button.addEventListener("click", () => {
    let userAns = prompt("How many number of squares?");

    if (userAns == null) {
        return
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }

    for (let i = 0; i < userAns; i++) {
        for (let k = 0; k < userAns; k++) {
            const newSquare = document.createElement("div");
            newSquare.className = "square"
            gridContainer.appendChild(newSquare);
        }
    }
});


function startSketching() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black"; // Color stays black after hover
        });
    }
    )
}

function createGrid(size){
    for (let i = 1; i <= size; i++) {
        for (let k = 1; k <= size; k++) {
            const div = document.createElement("div");
            div.className = "square";
            gridContainer.appendChild(div)
        }
    }
}
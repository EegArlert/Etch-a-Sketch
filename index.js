const gridContainer = document.querySelector(".container-grid");


//creating 16x16 grid via div
for (let i = 1; i <= 16; i++) {
    for (let k = 1; k <= 16; k++) {
        const div = document.createElement("div");
        div.className = "square";
        gridContainer.appendChild(div)
    }
}


// Add event listener to each square
startSketching();

const button = document.querySelector(".pixel-size");
const screenWidth = document.querySelector(".container-grid").width;
console.log(screenWidth)

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

    startSketching()


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
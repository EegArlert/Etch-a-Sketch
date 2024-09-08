const gridContainer = document.querySelector(".container-grid");


//creating 16x16 grid via div
for (let i = 1; i <= 16; i++) {
    for (let k = 1; k <= 16; k++) {
        const div = document.createElement("div");
        div.className = "square";
        gridContainer.appendChild(div)
    }
}

const squares = document.querySelectorAll(".square");

// Add event listener to each square
squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black"; // Color stays black after hover
    });
});
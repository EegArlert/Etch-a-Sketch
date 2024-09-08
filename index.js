const gridContainer = document.querySelector(".container-grid");

for(let i = 1; i <= 32; i++){
    const div = document.createElement("div");
    div.className = "square";
    gridContainer.appendChild(div)
}
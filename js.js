function generateGrid() {
    const container = document.querySelector("#container");
    let size = NaN;
    do {
        size = Number(prompt("Please enter an integer between 1-100: ", "20"));
        console.log(size);
    } while (isNaN(size) && size >= 1 && size <= 100)

    for (let row = 0; row <= size; row++) {
        for (let col = 0; col <= size; col++) {
            const myNode = document.createElement("div");
            myNode.classList.toggle("defaultNode");
            container.appendChild(myNode);
        }
    }
}

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", generateGrid);
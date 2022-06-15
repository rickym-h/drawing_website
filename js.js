function generateGrid() {
    const container = document.querySelector("#container");
    let size = NaN;
    do {
        size = Number(prompt("Please enter an integer between 1-100: ", "20"));
        console.log(size);
    } while (isNaN(size) && size >= 1 && size <= 100)

    // delete old nodes
    container.innerHTML = '';

    //set styling taking into account the new nodes
    container.style.gridTemplateRows = "repeat("+size.toString()+", 1fr)";
    container.style.gridTemplateColumns = "repeat("+size.toString()+", 1fr)";


    // Create grid
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const myNode = document.createElement("div");
            myNode.classList.toggle("defaultNode");
            container.appendChild(myNode);
            console.log("making node: row="+row+" col="+col)
        }
    }

}

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", generateGrid);
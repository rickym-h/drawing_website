let IS_MOUSE_PRESSED = false;

function generateGrid() {
    const container = document.querySelector("#container");
    let size = NaN;
    do {
        size = Number(prompt("Please enter an integer between 1-100: ", "20"));

        console.log(size);
        // todo make an isValidSize(size) to validate.
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


            myNode.addEventListener("mouseenter", function (e) {
                if (IS_MOUSE_PRESSED) {
                    e.target.classList.remove("defaultNode");
                    e.target.classList.add("colouredNode");
                }
            })

            myNode.addEventListener("mousedown", function (e) {
                e.target.classList.remove("defaultNode");
                e.target.classList.add("colouredNode");
                IS_MOUSE_PRESSED = true;
            })

            myNode.addEventListener("mouseup", function (e) {
                IS_MOUSE_PRESSED = false;
            })


            container.appendChild(myNode);
        }
    }

}

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", generateGrid);

document.addEventListener("mousedown", function (e) {
    IS_MOUSE_PRESSED = true;
})
document.addEventListener("mouseup", function (e) {
    IS_MOUSE_PRESSED = false;
})
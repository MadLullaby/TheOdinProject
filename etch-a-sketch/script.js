const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "paint";
const DEFAULT_COLOR = "#000000";

let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;


const colorPicker = document.getElementById("colorPicker");
const pencil = document.getElementById("pencil");
const rainbow = document.getElementById("rainbow");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const grid = document.getElementById("grid");


 //- current color
colorPicker.oninput = (e) => 
setCurrentColor(e.target.value)

function setCurrentColor(newColor){
    currentColor = newColor;
}


 //current mode - paint ranbow eraser
pencil.onclick = () => setCurrentMode('paint');
rainbow.onclick = () => setCurrentMode("rainbow");
eraser.onclick = () => setCurrentMode("eraser");


function setCurrentMode(newMode){
    currentMode = newMode;
}

// clear
clear.onclick = () => reloadGrid();

function reloadGrid(){
    newGrid();
    setGridSize(currentSize);
}

function newGrid() {
    grid.innerHTML= "";
}

function setGridSize(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i<size*size; i++){
        const gridPixel = document.createElement('div');
        gridPixel.classList.add('gridPixel');
        gridPixel.addEventListener('mouseover', changeColor);
        gridPixel.addEventListener('mousedown', changeColor);
        grid.appendChild(gridPixel);
    }
}

















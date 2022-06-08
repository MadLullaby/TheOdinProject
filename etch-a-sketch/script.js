
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
const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");


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
 
//grid size
small.onclick = () => setGridSize(16);
medium.onclick = () => setGridSize(32);
large.onclick = () => setGridSize(64);

function setGridSize(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  newGrid();
    for (let i = 0; i<size*size; i++){
        const gridPixel = document.createElement('div');
        gridPixel.classList.add('gridPixel');
        gridPixel.addEventListener('mouseover', changeColor);
        gridPixel.addEventListener('mousedown', changeColor);
        grid.appendChild(gridPixel);
    }
}

setGridSize(currentSize);


function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'paint') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

  function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbow.classList.remove('active')
    } else if (currentMode === 'paint') {
      pencil.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraser.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbow.classList.add('active')
    } else if (newMode === 'paint') {
      pencil.classList.add('active')
    } else if (newMode === 'eraser') {
      eraser.classList.add('active')
    }
  }
  
  let mouseDown = false
  document.body.onmousedown = () => (mouseDown = true)
  document.body.onmouseup = () => (mouseDown = false)



// COLORS!!!

const color = document.querySelectorAll(".color");

for(let i = 0; i < color.length; i++) {
  color[i].addEventListener('click', function(e) {
setCurrentColor(color[i].value);
  })
}
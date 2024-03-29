// Select color input
// Select size input
const $color = document.getElementById('colorPicker');
const $size = document.getElementById('sizePicker');
const $grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
$size.addEventListener('submit', function (event) {
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height,width);
})

// Call the makeGrid function
// Loop to create the grid using input from user
function makeGrid(height,width) {
  $grid.innerHTML = '';
  for (let row = 0; row < height; row++) {
    let addRow = $grid.insertRow();
      for (let col = 0; col < width; col++) {
        let addCol = addRow.insertCell();
        addCol.onclick = changeColor;
      }
  }
}
// Fill the square clicked with the color selected by the user
function changeColor() {
  this.style.background = $color.value;
}

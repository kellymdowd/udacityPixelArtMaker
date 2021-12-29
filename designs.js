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

function makeGrid(height,width) {
  $grid.innerHTML = '';
  for (let row = 0; row < width; row++) {
    let addRow = $grid.insertRow();
      for (let col = 0; col < height; col++) {
        let addCol = addRow.insertCell();
        addCol.onclick = changeColor;
      }
  }
}

function changeColor() {
  this.style.background = $color.value;
}

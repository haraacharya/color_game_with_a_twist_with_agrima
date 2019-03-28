var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  //generate all new colorDisplay
  colors = generateRandomColors(6);
  //pick a new random color
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  //change colors fo the square
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
  }
  resetButton.textContent = "New Game";
  h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]
  //Add a click listen to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct"
      changeColors(clickedColor)
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?"

    } else {
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color){
  //loop through all the squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++){
    //get a random color and push to the array
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

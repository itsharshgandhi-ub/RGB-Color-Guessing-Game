var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn =document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	numOfSquares = 3;
	h1.style.background = "steelblue";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	numOfSquares = 6;
	h1.style.background = "steelblue";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}
});

resetButton.addEventListener("click",function(){
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	// add click Listner
	squares[i].addEventListener("click",function(){
		clickedColor = this.style.background
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else{
			this.style.background = "#232323"
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr =[];
	for(var i = 0; i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
 function randomColor() {
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);

 	return "rgb("+r+", "+g+", "+b+")";
 }


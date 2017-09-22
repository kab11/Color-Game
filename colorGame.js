var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("userPick");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//funtion which uses the reset function; everything that needs to run when the page loads
init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++) {
		//remove from both buttons and add to the one you just clicked on
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//ternary operator 
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
			// if(this.textContent === "Easy") {
			// 	numSquares = 3; 
			// } else {
			// 	numSquares = 6;
			// }	
		});
	}	
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		//add click listeners to each square
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedcolor
			if(clickedColor === pickedColor) {
				//Display the user chose the correct square and change all squares to pickedColor
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again!";
				colorChange(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Incorrect, Try Again";
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	//change color of squares on the page
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block"; //make all squares visible
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//reset heading color
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function colorChange(color) {
	//loop through all squares and assign to picked color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	// //change background color of h1 to picked color
	h1.style.backgroundColor = pickedColor;
}

function pickColor() {

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make array 
	var arr = [];
	//add num random colors to the array
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r =Math.floor(Math.random() * 256); 
	//pick a "green" from 0 - 255
	var g =Math.floor(Math.random() * 256); 
	//pick a "blue" from 0 - 255
	var b =Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



// easyButton.addEventListener("click", function(){
// 	hardButton.classList.remove("selected");
// 	easyButton.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardButton.addEventListener("click", function(){
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

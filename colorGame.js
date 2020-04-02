var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset =document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colorDisplay.textContent = pickedColor;

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	// Pick a new random color from array ;
	pickedColor=pickColor();

	// Chnage color of sqr;
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else {
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	reset.textContent="NEW COLORS";
})
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	// Pick a new random color from array ;
	pickedColor=pickColor();

	// Chnage color of sqr;
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";
	reset.textContent="NEW COLORS";
})
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			message.textContent="CORRECT";
			changeColors(pickedColor);
			h1.style.backgroundColor=clickedColor;
			reset.textContent="Play Again";
		} else {
			this.style.backgroundColor="#232323";
			message.textContent="TRY AGAIN !";
		}
	});
}
reset.addEventListener("click",function(){
	// Generat new colors 
	colors=generateRandomColors(numSquares);
	// Pick a new random color from array ;
	pickedColor=pickColor();

	// Chnage color of sqr;
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor="steelblue";
	reset.textContent="NEW COLORS";
})
function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * numSquares );
	return colors[random];
}

function generateRandomColors(num){
	// MAke an array
	var arr=[]; 
	// Add num random colors to array
	for(var i=0;i<num;i++){
		// get random color and push in array 
		arr.push(randomColor())
	} 
	// Return arry
	return arr; 
}

function randomColor(){
	var r=Math.floor(Math.random() * 256 );
	var g=Math.floor(Math.random() * 256 );
	var b=Math.floor(Math.random() * 256 );

	return "rgb(" + r +", "+g+", "+ b + ")";
}
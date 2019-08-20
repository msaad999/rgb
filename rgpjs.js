
var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent= pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var ezBtn=document.querySelector("#ezBtn");
var hardBtn=document.querySelector("#hardBtn");
hardBtn.addEventListener("click",function(){
		ezBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

});
ezBtn.addEventListener("click",function(){
	ezBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
});

resetButton.addEventListener("click",function(){
	
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent= pickedColor;
		for (var i=0;i<squares.length;i++){
			
		squares[i].style.background=colors[i];
	     }
	h1.style.background="steelblue";
})

for (var i=0; i< 6 ; i++){
	
	squares[i].style.background =colors[i];
	squares[i].addEventListener("click",function(){
	var clickedColor = this.style.background;
	if (clickedColor == pickedColor){
		messageDisplay.textContent="correct";
		changeColors(pickedColor);
		h1.style.background=clickedColor;
		resetButton.textContent="play again?";
	}
	else {
	this.style.background="#232323";
	messageDisplay.textContent="try again !";
	
   }
})

}
function changeColors(color){
	for (var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}
function pickColor(){
	random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(n){
	arr=[];
	for (var i=0;i<n;i++){
		arr.push(randomColor())
	
			
	}
	return arr
}
	
function randomColor(){
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";	
}
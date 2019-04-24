var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("setGradient");
var button = document.getElementById("btn");

function welcome() {
	body.style.background = 
	"Linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";
	 css.textContent = body.style.background + ";";
}

function setGradient(){
	body.style.background = 
	"Linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";

	 button.style.background = color1.value;
	button.style.borderColor = color2.value;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function messyFunctionforRandom() {
	var value1 = Math.floor((Math.random() * 255) + 0);
	var value2 = Math.floor((Math.random() * 255) + 0);
	var value3 = Math.floor((Math.random() * 255) + 0);
	var value4 = Math.floor((Math.random() * 255) + 0);
	var value5 = Math.floor((Math.random() * 255) + 0);
	var value6 = Math.floor((Math.random() * 255) + 0);
	body.style.background = 
	"Linear-gradient(to right, rgb("
	+ value1 
	+ ", " 
	+ value2
	+ ", "
	+ value3
	+ "), rgb("
	+ value4 
	+ ", " 
	+ value5
	+ ", "
	+ value6
	+ "))";

	var aa =  rgbToHex(value1, value2, value3) ;
	var cc = rgbToHex(value4,value5,value6);
	color1.value = aa;
	color2.value = cc;

	css.textContent = body.style.background + ";";

	button.style.background = aa;
	button.style.borderColor = cc;
	
}

window.addEventListener("load", welcome);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", messyFunctionforRandom);

window.addEventListener("keypress", function(event){
	if(event.keyCode === 13) {
		messyFunctionforRandom()
	}
})
document.getElementById("george").innerHTML = "Hi I'm George!";
document.getElementsByClassName("classy");
document.getElementsByClassName("p").innerHTML = "Here is my paragraph!";
document.querySelector("div").innerHTML = "Divtastic";
document.querySelector(".classy").innerHTML = "Not so classy";
document.querySelector("#george").innerHTML = "I'm not George";
// custom function called when a button is clicked
function clickMe() {
	alert("button clicked!");
}

// function that adds two numbers
// function addMe() {
// 	var sum_total = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
// 	console.log(sum_total);
// }

// global variables

function addMe(){
	n1 = document.getElementById("num1").value;
	n2 = document.getElementById("num2").value;
	var sum = Number(n1) + Number(n2);
	console.log(sum);
}
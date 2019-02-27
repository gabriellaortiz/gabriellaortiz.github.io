var img = document.createElement("img");
var resultDiv = document.getElementById("result");

const button = document.querySelector('input');
const paragraph = document.querySelector('p');

var personalityVal = 0;

button.addEventListener('click', toggleButton);

function toggleButton() {
	personalityVal++;

	if (button.value === "true") {
		button.value = "false";
		paragraph.textContent = "false! ";
	} else {
		button.value = "true";
		paragraph.textContent = "true! ";
	}
	paragraph.textContent = paragraph.textContent + personalityVal;

	if(personalityVal > 7) {
		resultDiv.appendChild(img);
		img.src = "tamaimg/Memetchi.png"
	} else {
		resultDiv.appendChild(img);
		img.src = "tamaimg/adult/Hanatchi.png"
	}
}
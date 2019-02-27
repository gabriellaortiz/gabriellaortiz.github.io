var img = document.createElement("img");
var newParagraph = document.createElement('p');
var resultDiv = document.getElementById("result");

const paragraph = document.querySelector('p');

var personalityVal = 0;

// question 1 buttons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

// quesiton 2 buttons
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');

// question 3 buttons
const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const button11 = document.getElementById('button11');
const button12 = document.getElementById('button12');

// finish button
const button13 = document.getElementById('button13');


button1.addEventListener('click', toggleButton1);
button2.addEventListener('click', toggleButton2);
button3.addEventListener('click', toggleButton3);
button4.addEventListener('click', toggleButton4);
button5.addEventListener('click', toggleButton5);
button6.addEventListener('click', toggleButton6);
button7.addEventListener('click', toggleButton7);
button8.addEventListener('click', toggleButton8);
button9.addEventListener('click', toggleButton9);
button10.addEventListener('click', toggleButton10);
button11.addEventListener('click', toggleButton11);
button12.addEventListener('click', toggleButton12);

button13.addEventListener('click', toggleButton13);

document.getElementById('button13').style.visibility = 'hidden';


function toggleButton1() {
	// buttons for quesiton 1
	// each has its own value
	if (button1.value === "true") {
		button1.value = "false";
	} else {
		button1.value = "true";
		personalityVal+=1;
		document.getElementById('question1').style.visibility = 'hidden';
		// document.getElementById('question2').style.visibility = 'visible';
	}
	console.log(personalityVal);
}


function toggleButton2() {
	if (button2.value === "true") {
		button2.value = "false";
	} else {
		button2.value = "true";
		personalityVal+=2;
		document.getElementById('question1').style.visibility = 'hidden';
		// document.getElementById('question2').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton3() {
	if (button3.value === "true") {
		button3.value = "false";
	} else {
		button3.value = "true";
		personalityVal+=3;
		document.getElementById('question1').style.visibility = 'hidden';
		// document.getElementById('question2').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton4() {
	if (button4.value === "true") {
		button4.value = "false";
	} else {
		button4.value = "true";
		personalityVal+=4;
		document.getElementById('question1').style.visibility = 'hidden';
		// document.getElementById('question2').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton5() {
	// buttons for quesiton 2
	// each has its own value
	if (button5.value === "true") {
		button5.value = "false";
	} else {
		button5.value = "true";
		personalityVal+=1;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		// document.getElementById('question3').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton6() {
	if (button6.value === "true") {
		button6.value = "false";
	} else {
		button6.value = "true";
		personalityVal+=2;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		// document.getElementById('question3').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton7() {
	if (button7.value === "true") {
		button7.value = "false";
	} else {
		button7.value = "true";
		personalityVal+=3;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		// document.getElementById('question3').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton8() {
	if (button8.value === "true") {
		button8.value = "false";
	} else {
		button8.value = "true";
		personalityVal+=4;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		// document.getElementById('question3').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton9() {
	// buttons for quesiton 3
	// each has its own value
	if (button9.value === "true") {
		button9.value = "false";
	} else {
		button9.value = "true";
		personalityVal+=1;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		document.getElementById('question3').style.visibility = 'hidden';
		document.getElementById('button13').style.visibility = 'visible';

	}
		console.log(personalityVal);

}

function toggleButton10() {
	if (button10.value === "true") {
		button10.value = "false";
	} else {
		button10.value = "true";
		personalityVal+=2;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		document.getElementById('question3').style.visibility = 'hidden';
		document.getElementById('button13').style.visibility = 'visible';
	}
		console.log(personalityVal);
}

function toggleButton11() {
	if (button11.value === "true") {
		button11.value = "false";
	} else {
		button11.value = "true";
		personalityVal+=3;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		document.getElementById('question3').style.visibility = 'hidden';
		document.getElementById('button13').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton12() {
	if (button12.value === "true") {
		button12.value = "false";
	} else {
		button12.value = "true";
		personalityVal+=4;
		document.getElementById('question1').style.visibility = 'hidden';
		document.getElementById('question2').style.visibility = 'hidden';
		document.getElementById('question3').style.visibility = 'hidden';
		document.getElementById('button13').style.visibility = 'visible';
	}
		console.log(personalityVal);

}

function toggleButton13() {
	if(personalityVal <= 5) {
		document.getElementById('button13').style.visibility = 'hidden';
		resultDiv.appendChild(newParagraph);
		newParagraph.textContent = "You are Ichigotchi! Ichigotchi comes from Berry Town. She loves to sing and dance and does it everyday. She is generally friendly and well-meaning, but she doesn't like being told things that confuse her or when the seeds on her head are counted. Usually she has five, but sometimes more.";
		resultDiv.appendChild(img);
		img.src = "tamaimg/Ichigotchi.png"
	} else if (personalityVal > 5 && personalityVal <= 8) {
		document.getElementById('button13').style.visibility = 'hidden';
		resultDiv.appendChild(newParagraph);
		newParagraph.textContent = "You are Makiko! Makiko is characterized as being very beautiful, especially when it comes to her hair. She despises rain because she believes it will ruin her 'perfect' hair, which shows her passion for her hair.";
		resultDiv.appendChild(img);
		img.src = "tamaimg/Makiko.png"
	} else if (personalityVal > 8 && personalityVal <= 10) {
		document.getElementById('button13').style.visibility = 'hidden';
		resultDiv.appendChild(newParagraph);
		newParagraph.textContent = "You are Memetchi! Memetchi is a very stylish, feminine, child-like character and somewhat defensive of her appearance. She can be a crybaby at times due to her sensitivity. She loves all things swirly, which is why many things she owns have swirls on them. Her favorite foods are cupcakes and oranges, and she dislikes fish.";
		resultDiv.appendChild(img);
		img.src = "tamaimg/Memetchi.png"
	} else if (personalityVal > 10) {
		document.getElementById('button13').style.visibility = 'hidden';
		resultDiv.appendChild(newParagraph);
		newParagraph.textContent = "You are Otokitchi! Otokitchi has a keen interest in helping young Tamagotchi find love...";
		resultDiv.appendChild(img);
		img.src = "tamaimg/old/Otokitchi.png"
	}
}
















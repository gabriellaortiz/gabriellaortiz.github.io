// GABRIELLA ORTIZ
// CORE LAB ENVIRONMENTS spring 2019


// initialize all variables
var img = document.createElement("img");
var newParagraph = document.createElement('p');
var resultDiv = document.getElementById("result");

const paragraph = document.querySelector('p');

// create counter for "points"
var personalityVal = 0;

// create an array for each question 
// each array holds the 4 choices for each question
var question1Array=[];
var question2Array=[]; 
var question3Array=[];

// add each button (choice) to the array for question 1 
for (var i=1; i < 5; i++){
	question1Array.push(document.getElementById("button" + (i)));
}

// add each button (choice) to the array for question 2
for (var i=5; i < 9; i++){
	question2Array.push(document.getElementById("button" + (i)));
}

// add each button (choice) to the array for question 3
for (var i=9; i < 13; i++){
	question3Array.push(document.getElementById("button" + (i)));
}

// add event listener for each button (choice) in each question array:
// when the button is clicked, it will call the toggleButton(choice) function
// toggleButton(choice) function takes parameters --- this is how we keep track
// of the points for each choice 
	// by using toggleButton.bind(this,modulus), we are making sure that 
	// the function is not being CALLED, just attached to the click event
for(var j=0; j < question1Array.length; j++){
	var modulus = j % 4;
	question1Array[j].addEventListener('click', toggleButton.bind(this,modulus));
}

for(var j=0; j < question2Array.length; j++){
	var modulus = j % 4;
	question2Array[j].addEventListener('click', toggleButton.bind(this,modulus));
}

for(var j=0; j < question3Array.length; j++){
	var modulus = j % 4;
	question3Array[j].addEventListener('click', toggleButton.bind(this,modulus));
}

// initialize CALCULATE button
// has its own function, toggleButton13 which is attached
// to click event
const button13 = document.getElementById('button13');
button13.addEventListener('click', toggleButton13);


// toggleButton function takes parameter "choice"
// this parameter tells the function how many points
// the selected choice is worth and adds that number
// to the personalityVal counter (logs this number to the
// console every time a button is clicked)
function toggleButton(choice){
	if(choice == 0){
		personalityVal+=1;
		console.log(personalityVal);
	} else if (choice == 1) {
			personalityVal+=2;
			console.log(personalityVal);
	} else if (choice == 2) {
			personalityVal+=3;
			console.log(personalityVal);
	} else if (choice == 3) {
			personalityVal+=4;
			console.log(personalityVal);
	}
}	

// function for the CALCULATE button
// determines which Tamagotchi character 
// image and paragraph to display
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
		newParagraph.textContent = "You are Memetchi! Memetchi is a very stylish, feminine, child-like character and somewhat defensive of her appearance. She can be a crybaby at times due to her sensitivity. She loves all things swirly, which is why many things she owns have swirls on them. Her favorite foods are cupcakes and oranges.";
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
















var others="Others<input type='text' />";
var newParagraph = document.createElement('p');
var resultDiv = document.getElementById("result");

var userAnswers = [];

var allQuestions = [{
	question: 'what is your favorite color?',
	choices: ['Others'],
},
{
	question: 'how old do you feel?',
	choices: ['Others'],
},
{
	question: 'what star sign do you identify with?',
	choices: ['Others'],
},
{	
	question: 'what is your earliest memory?',
	choices: ['Others'],
},
{
	question: 'what time is it?',
	choices: ['Others'],
},
{
	question: "what is the most painful thing you've been told?",
	choices: ['Others'],
},
{
	question: 'what keeps you up at night?',
	choices: ['Others'],
},
{
	question: 'have you ever been in love?',
	choices: ['Others'],
},
{
	question: 'something you wish you could forget?',
	choices: ['Others'],
},
{
	question: 'bury a secret',
	choices: ['Others'],
},
{
	question: 'describe god',
	choices: ['Others'],
},
{
	question: 'is heaven a real place?',
	choices: ['Others'],
},
{
	question: 'share last dream you can remember',
	choices: ['Others'],
}

];

//Reference to tags
var questionTitle = document.getElementById('questionTitle');
var answerBox = document.getElementById('answerBox');
var nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', nextButtonClicked);

//Initiating some variables
var i = 0;
var length1 = allQuestions.length;
//var correctAnswer = 0;

function nextButtonClicked() {
    //iterate through questions    
    //if(i>allQuestions.length -1){
    // if i is greater than 12,
    // however, on 14 it is printing the values??
   	if(i > length1 -1){
      resultDiv.appendChild(newParagraph);
     // newParagraph.textContent = "RESULT GOES HERE";
      // var printAnswers = userAnswers.toString();
      // console.log(printAnswers);
      // userAnswers.toString();
      //var story = userAnswers.join(" ");
      // var answerString = userAnswers.toString();
      // var story = answerString.split(",").join("\n");
      var questionTitle = document.getElementById("questionTitle");
      var answerBox = document.getElementById("answerBox");
      var nextButton = document.getElementById("nextButton");

      questionTitle.style.display = "none";
      answerBox.style.display = "none";
      nextButton.style.display = "none";

      // THIS WORKS!!!! VVV
      // var story = userAnswers.join(" ");
      // newParagraph.textContent = story;
      // userAnswers.forEach(function(answer) {
      // 	console.log(answer);
      // });

    var request = new XMLHttpRequest();

	request.open('GET', 'https://api.ipdata.co/?api-key=74db7cedb43a06aafad4e82c0b3d2a02e3b2ae3969a3596387893424');

	request.setRequestHeader('Accept', 'application/json');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
	    console.log('Status:', this.status);
	    console.log('Headers:', this.getAllResponseHeaders());
	    console.log('Body:', this.responseText);
	    newParagraph.textContent = this.responseText;
	  }
	};

	request.send();

// var script = document.createElement('script'); 
// document.head.appendChild(script);    
// script.type = 'text/javascript';
// //script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
// script.onload = function(){
//           $.get("http://ipinfo.io", function(response) {
//       	console.log(response.ip);
//       }, "jsonp");
// } 

    // for (var j=0; j<userAnswers.length; j++) {
    // 	console.log(j + ". " + userAnswers[j]);
    // }

    //console.log(userAnswers);

    } else {
    	i++;
    	console.log(i);
    	if (i > 1 && i < length1) {
    		// var questionResponse = document.getElementById('useranswer');
    		// var saveAnswer = "question"+i;
    		// var questionResponse = document.getElementsByName(saveAnswer).value;
    		// var questionResponse = document.getElementsByTagName("input");
    		//var questionResponse = document.getElementById('answerBox').value;
    		var questionResponse = document.getElementById('useranswer').value;    		
    		userAnswers.push(questionResponse);

    	}
    	populateQuestion(i);
//    	populateQuestion(i);
    }
};

function populateQuestion(questionNumber) {
    // var individualQuestion = allQuestions[i];
    // questionTitle.innerText = individualQuestion.question;
    
    // answerBox.innerHTML = ""; //reset choices list

   	// for(key in individualQuestion.choices){
    // 	var textBox = "question"+i;
    //     // var textBox = "question"+i+"_choice";
    //     // var choiceText = individualQuestion.choices[key];
    //     answerBox.appendChild(addBox(textBox));
    // }
  
    if(i<length1) {
	    var individualQuestion = allQuestions[i];
	    questionTitle.innerText = individualQuestion.question;
	    
	    answerBox.innerHTML = ""; //reset choices list
	    for(key in individualQuestion.choices){
	    	var textBox = "question"+i;
	        // var textBox = "question"+i+"_choice";
	        // var choiceText = individualQuestion.choices[key];
	        answerBox.appendChild(addBox(textBox));
	    }
    }
    
}

// function createLi(name, choiceText) {

function addBox(name) {
        var enterAnswer = document.createElement('div');
        var textHtml = '<input id="useranswer" type="text" name="' + name + '"';    
        textHtml += '/>';
        //textHtml += choiceText;        
        enterAnswer.innerHTML = textHtml;        
        return enterAnswer;
    }

// function addBox(name) {
//         var textHtml = '<input id="useranswer" type="text" name="' + name + '"';    
//         textHtml += '/>';
//         //textHtml += choiceText;        
//         answerBox.innerHTML = textHtml;        
//         return answerBox;
//     }









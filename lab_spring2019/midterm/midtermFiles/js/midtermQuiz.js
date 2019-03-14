var others="Others<input type='text' />";
var storyParagraph = document.createElement('p');
storyParagraph.setAttribute("id", "userAnswersP");
var newParagraph = document.createElement('p');
newParagraph.setAttribute("id", "ipParagraph");
var resultDiv = document.getElementById("result");

var errorMsg = document.createElement('p');


var userAnswers = [];
var ipInfo = [];

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
},
{
	question: 'something you wish you said',
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
var lastQuestion = (length1-1);
var length2 = userAnswers.length;
//var correctAnswer = 0;

function nextButtonClicked() {
    //iterate through questions    
    //if(i>allQuestions.length -1){
    // if i is greater than 12,
    // however, on 14 it is printing the values??

    // IF THE END OF THE QUIZ IS REACHED:
    // add response for the last question
   	if (i == lastQuestion) {
   		i++;
   		populateQuestion(lastQuestion);
   		var questionResponse = document.getElementById('useranswer').value;    		
    	userAnswers.push(questionResponse);
   	}

   	if(i > length1 -2) {
   	  	resultDiv.appendChild(storyParagraph);
      	resultDiv.appendChild(newParagraph);

	    var questionTitle = document.getElementById("questionTitle");
	      var answerBox = document.getElementById("answerBox");
	      var nextButton = document.getElementById("nextButton");

	      questionTitle.style.display = "none";
	      answerBox.style.display = "none";
	      nextButton.style.display = "none";



	      //THIS WORKS!!!! VVV
	      var story = userAnswers.join('\n');
	      storyParagraph.textContent += story;
	      userAnswers.forEach(function(answer) {
	      	console.log(answer);
	      });


	    var request = new XMLHttpRequest();

		request.open('GET', 'https://api.ipdata.co/?api-key=74db7cedb43a06aafad4e82c0b3d2a02e3b2ae3969a3596387893424');

		request.setRequestHeader('Accept', 'application/json');

		request.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		    ipInfo.push(this.responseText);
		    //console.log(ipInfo);
		    //newParagraph.textContent = this.responseText;
		    var ipInfoLength = ipInfo.length;
		    for (var i = 0; i < ipInfoLength; i++) {
		        newParagraph.textContent += ipInfo[i];
		    }

		  }
		};

		request.send();

	// IF THERE ARE QUESTIONS LEFT
    } else {
    	i++;
    	console.log(i);
    	// if (i > 1 && i < length1) {
    	if (i > 1) {
    		var questionResponse = document.getElementById('useranswer').value;    		
    		userAnswers.push(questionResponse);

    	}
    	populateQuestion(i);
    }
};




    // IF THERE ARE STILL UNANSWERED QUESTIONS:
//     } else {
//     	i++;
//     	console.log(i);
//     	var emptyAnswer = document.getElementById('useranswer');
//     	console.log(emptyAnswer);
//     	// if the text box is empty, print error
//     	if ((emptyAnswer == "") && (i > 1)) {
// 			window.alert("please answer");
//     	}
//     	else if (i > 1 && i < length1) {
//     		var questionResponse = document.getElementById('useranswer').value;    		
//     		userAnswers.push(questionResponse);
//     	}
//     	populateQuestion(i);

//     }
// };

function populateQuestion(questionNumber) { 
    if(i<length1) {
	    var individualQuestion = allQuestions[i];
	    questionTitle.innerText = individualQuestion.question;
	    answerBox.innerHTML = ""; //reset choices list
	    for(key in individualQuestion.choices){
	    	var textBox = "question"+i;
	        answerBox.appendChild(addBox(textBox));
	    }
    }
    
}


function addBox(name) {
        var enterAnswer = document.createElement('div');
        var textHtml = '<input id="useranswer" type="text" name="' + name + '"';    
        textHtml += '/>';
        //textHtml += choiceText;        
        enterAnswer.innerHTML = textHtml;        
        return enterAnswer;
}



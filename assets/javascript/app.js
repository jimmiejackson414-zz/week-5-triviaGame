var question = {
	question1: {
		text:"You see, light drizzle will just annoy you, but thunder will f you up.",
		answers:
			[
				"Buster",
				"GOB",
				"Lucille",
				"Michael"
			],
		correctAnswer: "Buster"
	},

	question2: {
		text:"Well, I'd rather be dead in California than alive in Arizona.",
		answers:
			[
				"GOB",
				"Michael",
				"Buster",
				"Lucille"
			],
		correctAnswer: "Lucille"
	},
	question3: {
		text:"It's as Ann as the nose on plain's face.",
		answers:
			[
				"Lucille",
				"Buster",
				"Michael",
				"GOB"
			],
		correctAnswer: "Michael"
	},
};


//start button
$(document).ready(function(){
	$("#instructionsTitle").html("Press Start!");
});


document.getElementById('button').onclick = function() {
   console.log("button was clicked");
   askQuestions();
};



//after start button is clicked, run through questions.
function askQuestions(){
	for (var i = question.length - 1; i >= 0; i--) {
		question[i]
	}
}


/////////////
//  timer  //
/////////////

function setTimer(num) {
    var counter = setInterval(function () {
        document.getElementById('timer').innerHTML = num;
        num-- || clearInterval(counter);
    }, 1000);
}
setTimer(10);


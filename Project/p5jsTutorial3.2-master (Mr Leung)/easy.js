var imageEasyBack;
var imageEasyTitle;

var buttonEasyBackX;
var buttonEasyBackY;

var question1;
var question2;
var question3;
var questionX;
var questionY;
var questionLength;
var questionHeight;
var health;
var score;

var canvasIDs;
var locked;

var numberOfAnswers;


function preloadEasy()
{
	
    numberOfAnswers = 3;
	questionLength = 126;
	questionHeight = 40;

	questionX = [300,300,300];
	questionY = [200,300,400];


	question1 = new Array(numberOfAnswers);
	question2 = new Array(numberOfAnswers);
	question3 = new Array(numberOfAnswers);

    imageQuestion1 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/buttonQuestionTitle.png');
	question1[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q1Ez/button.png');
	question1[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q1Ez/button-1.png');
	question1[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q1Ez/button-2.png');

	question2[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q2Ez/button-4.png');
	question2[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q2Ez/button-1.png');
	question2[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q2Ez/button.png');

	question3[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q3Ez/button-1.png');
	question3[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q3Ez/button.png');
	question3[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Q3Ez/button-4.png');


	imageEasyBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageEasyTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleEasyGame.png');	

}

function setupEasy()
{

    createCanvas(800,600);

	health = 300;
	canvasIDs = 0;
	locked = false;
	score = 0;

	buttonEasyBackX = 10;
	buttonEasyBackY = 500;

}


function drawEasy()
{

	background(0,0,0);
//	console.log(frameCount);
	if (canvasIDs == -1)
	{
		gameOver();
	}
	else if (canvasIDs == 0)
	{
		showQuestions(question1);
		isButtonClicked(0,1)
	}
	else if (canvasIDs == 1)
	{
		showQuestions(question2);
		isButtonClicked(0,2)
	}
	else if (canvasIDs == 2)
	{
		showQuestions(question3);
		isButtonClicked(1,0)
	}

	showHealth();


console.log(locked);
	//background(0,125,255);

	image(imageEasyTitle,10,10);
	image(imageQuestion1, 150,100);

	image(imageEasyBack,buttonEasyBackX,buttonEasyBackY);

	if (mouseX > buttonEasyBackX && mouseX < buttonEasyBackX + 200 && mouseY > buttonEasyBackY && mouseY < buttonEasyBackY+50 && mouseIsPressed)
	{
		canvasID = -2;
	}

	showScore();

}

function showScore()
{
	fill(255,255,255);
	text(score, 650,50)
}


function showHealth()
{
	fill(0,255,0);
	rect(300,30,health,25);
	fill(0,0,0);
	text(health,300+10,30+20)
	if (health <= 0)
	{
		canvasIDs = -1;
	}
}

// checks what happens when you click on a button
function isButtonClicked(correct,nextID)
{
	var deductHealth = false;
	if (mouseIsPressed && !locked)
	{
		locked = true;
		for (var i = 0; i < numberOfAnswers; i++)
		{
			if (mouseX > questionX[i] && mouseX < questionX[i] + questionLength && mouseY > questionY[i] && mouseY < questionY[i] + questionHeight)
			{
				if (i == correct)
				{
					score += 100;
					canvasIDs = nextID;
					return 0;
				}
				else
				{
					deductHealth = true;
				}
			}
		}
		if (deductHealth)
		{
			health = health - 50;
		}
	}
}

// handles all game over code
function gameOver()
{
	textSize(40);
	fill(255,255,255);
	text("GAME OVER!",280,300);
	//showScore("Final Score", 290,300);
	text("You have lost! Try again?",180,400);
	textSize(12);
}

// shows questions on the screen
function showQuestions(thequestion)
{
	for (var i = 0; i < numberOfAnswers; i++)
	{
		image(thequestion[i],questionX[i],questionY[i])
	}
}


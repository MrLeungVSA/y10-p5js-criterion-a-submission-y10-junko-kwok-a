var imageHardBack;
var imageHardTitle;

var buttonHardBackX;
var buttonHardBackY;

var question1H;
var question2H;
var question3H;
var questionXH;
var questionYH;
var questionLength;
var questionHeight;
var health;
var score;

var canvasIDs;
var locked;

var numberOfAnswers;


function preloadHard()
{
	
    numberOfAnswers = 3;
	questionLength = 126;
	questionHeight = 40;

	questionXH = [300,300,300];
	questionYH = [200,300,400];


	question1H = new Array(numberOfAnswers);
	question2H = new Array(numberOfAnswers);
	question3H = new Array(numberOfAnswers);

    imageQuestion1 = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/buttonQuestionTitle.png');
	question1H[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har1/button_ordinary.png');
	question1H[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har1/button_toytown.png');
	question1H[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har1/button_whimsical.png');

	question2H[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har2/button_attentiveness.png');
	question2H[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har2/button_boredom.png');
	question2H[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har2/button_languor.png');

	question3H[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har3/button_appeal.png');
	question3H[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har3/button_revocation.png');
	question3H[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Har3/button_implore.png');


	imageHardBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageHardTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleEasyGame.png');	

}

function setupHard()
{

    createCanvas(800,600);

	health = 300;
	canvasIDs = 0;
	locked = false;
	score = 0;

	buttonHardBackX = 10;
	buttonHardBackY = 500;

}


function drawHard()
{

	background(0,0,0);
//	console.log(frameCount);
	if (canvasIDs == -1)
	{
		gameOver();
	}
	else if (canvasIDs == 0)
	{
		showQuestions(question1H);
		isButtonClicked(0,1)
	}
	else if (canvasIDs == 1)
	{
		showQuestions(question2H);
		isButtonClicked(0,2)
	}
	else if (canvasIDs == 2)
	{
		showQuestions(question3H);
		isButtonClicked(1,0)
	}

	showHealth();


console.log(locked);
	//background(0,125,255);

	image(imageHardTitle,10,10);
	image(imageQuestion1H, 150,100);

	image(imageHardBack,buttonHardBackX,buttonHardBackY);

	if (mouseX > buttonHardBackX && mouseX < buttonHardBackX + 200 && mouseY > buttonHardBackY && mouseY < buttonHardBackY+50 && mouseIsPressed)
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
			if (mouseX > questionXH[i] && mouseX < questionXH[i] + questionLength && mouseY > questionYH[i] && mouseY < questionYH[i] + questionHeight)
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
		image(thequestion[i],questionXH[i],questionYH[i])
	}
}


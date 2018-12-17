var imageMediumBack;
var imageMediumTitle;

var buttonMediumBackX;
var buttonMediumBackY;

var question1M;
var question2M;
var question3M;
var questionXM;
var questionYM;
var questionLength;
var questionHeight;
var health;
var score;

var canvasIDs;
var locked;

var numberOfAnswers;


function preloadMedium()
{
	
    numberOfAnswers = 3;
	questionLength = 126;
	questionHeight = 40;

	questionXM = [300,300,300];
	questionYM = [200,300,400];


	question1M = new Array(numberOfAnswers);
	question2M = new Array(numberOfAnswers);
	question3M = new Array(numberOfAnswers);

    imageQuestion1M = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/buttonQuestionTitle.png');
	question1M[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med1/button_suppress.png');
	question1M[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med1/button_utter.png');
	question1M[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med1/button_pronounce.png');

	question2M[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med2/button_modern.png');
	question2M[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med2/button_quaint.png');
	question2M[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med2/button_picturesque.png');

	question3M[0] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med3/button_asunder.png');
	question3M[1] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med3/button_gone.png');
	question3M[2] = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.2-master (Mr Leung)/images/ACTUAL FILES/Med3/button_apart.png');


	imageMediumBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	
	imageMediumTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMediumGame.png');	


}

function setupMedium()
{

    createCanvas(800,600);

	health = 300;
	canvasIDs = 0;
	locked = false;
	score = 0;

	buttonMediumBackX = 10;
	buttonMediumBackY = 500;

}


function drawMedium()
{

	background(0,0,0);
//	console.log(frameCount);
	if (canvasIDs == -1)
	{
		gameOver();
	}
	else if (canvasIDs == 0)
	{
		showQuestions(question1M);
		isButtonClicked(0,1)
	}
	else if (canvasIDs == 1)
	{
		showQuestions(question2M);
		isButtonClicked(0,2)
	}
	else if (canvasIDs == 2)
	{
		showQuestions(question3M);
		isButtonClicked(1,0)
	}

	showHealth();


console.log(locked);
	//background(0,125,255);

	image(imageMediumTitle,10,10);
	image(imageQuestion1M, 150,100);

	image(imageMediumBack,buttonMediumBackX,buttonMediumBackY);

	if (mouseX > buttonMediumBackX && mouseX < buttonMediumBackX + 200 && mouseY > buttonMediumBackY && mouseY < buttonMediumBackY+50 && mouseIsPressed)
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
			if (mouseX > questionXM[i] && mouseX < questionXM[i] + questionLength && mouseY > questionY[i] && mouseY < questionYM[i] + questionHeight)
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
		image(thequestion[i],questionXM[i],questionYM[i])
	}
}


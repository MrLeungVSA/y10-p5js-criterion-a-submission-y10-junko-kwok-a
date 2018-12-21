var imageIntroTitle;
var bgm;

function preloadIntro()
{
    imageIntroTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleIntro.png');
	imgGiraffe = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/animals_hero_giraffe_1_0.jpg');
    imgLexa = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/transwarpaint.png')
	imgHeda = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/Screen Shot 2018-10-08 at 12.28.31 PM.png')
	buttonNothing = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/button_wait.png');
	buttonHoverOver = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/button_stop.png');
	buttonClick = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/button_drop.png');	
	bgm = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial4.1-master/bensound-goinghigher.mp3");

}

function setupIntro()
{

//	bgm.play();

}

function drawIntro()
{
	
	background(125,125,125)

	image(imageIntroTitle,375,50);

	if (mouseIsPressed)
	    {
		  canvasID = -2;
	    }

	image(imgGiraffe,20,150);

    fill(50,20,100);
    textSize(18)
	text("Welcome to the game. This game is about learning English synonymns.",50,200);
	text("In the game, 3 words will be displayed. 2 of them will be synonyms. One will not. ", 50, 250)
	text("You will have to choose the odd one out.", 50,300)
	text("RULES:",50,350)
	text("You have 3 hearts. If you get a question wrong, you will lose a heart.", 50,400)
	text("After a certain amount of levels, you will be given an option to increase the difficulty.",50,450)
	text("This will refresh your hearts. You will win the game once all levels are complete.", 50, 500)
	text("Press anywhere to continue.",50,550);

	

}
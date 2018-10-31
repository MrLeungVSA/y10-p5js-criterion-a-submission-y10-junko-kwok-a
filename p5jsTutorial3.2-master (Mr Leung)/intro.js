var imageIntroTitle;

function preloadIntro()
{
    imageIntroTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleIntro.png');
	imgGiraffe = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/animals_hero_giraffe_1_0.jpg');
    imgLexa = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/transwarpaint.png')
	imgHeda = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/Screen Shot 2018-10-08 at 12.28.31 PM.png')
	buttonNothing = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/button_wait.png');
	buttonHoverOver = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/button_stop.png');
	buttonClick = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-y10-junko-kwok-a/p5jsTutorial3.1-master/button_drop.png');	
}

function setupIntro()
{


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
	text("Welcome to the game. You do not want to be here.",50,200);
	text("This game is about...", 50, 250)
	text("Rules are simple...", 50,300)
	text("rules",50,350)
	text("stuff", 50,400)
	text("more stuff",50,500)
	text("Press anywhere to continue.",50,550);
	textSize(8);


	

}
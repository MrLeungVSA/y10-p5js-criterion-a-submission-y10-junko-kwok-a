var buttonMainMenuEasy;
var imageMainMenuTitle;
var imageBack;

var buttonMainMenuEasyX;
var buttonMainMenuEasyY;

var buttonBackX;
var buttonBackY;


function preloadMainMenu()
{
	buttonMainMenuEasy = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonEasy.png');
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png');	
    imageBack = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonBack.png');	

}

function setupMainMenu()
{
	
	buttonMainMenuEasyX = 10;
	buttonMainMenuEasyY = 150;

	buttonBackX = 10;
	buttonBackY = 250;


}

function drawMainMenu()
{
	background(255,125,0)

	image(imageMainMenuTitle,10,50);

    fill(50,20,100);
	text("You can choose your difficulty levels here.",10,500);
	text("Press back to return to Intro.",10,550);
    textSize(8);

	image(imageBack,buttonBackX,buttonBackY);


	if (mouseX > buttonBackX && mouseX < buttonBackX + 200 && mouseY > buttonBackY && mouseY < buttonBackY+50 && mouseIsPressed)
	{
		canvasID = -1;
	}


	image(buttonMainMenuEasy,buttonMainMenuEasyX,buttonMainMenuEasyY);

	if (mouseX > buttonMainMenuEasyX && mouseX < buttonMainMenuEasyX + 200 && mouseY > buttonMainMenuEasyY && mouseY < buttonMainMenuEasyY+50 && mouseIsPressed)
	{
		canvasID = -3;
	}

}
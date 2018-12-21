/*
  canvasID - 1 - intro
  canvasID - 2 - main menu
  canvasID - 3 - easy
  canvasID - 4 - medium
  canvasID - 5 - hard
  canvasID - 6 - scores
*/

var canvasID;

function preload()
{

	preloadIntro();
	preloadMainMenu();
	preloadEasy();
	preloadMedium();
	preloadHard();

}

function setup()
{
	createCanvas(800,600);

	setupIntro();
	setupMainMenu();
	setupEasy();
	setupMedium();
	setupHard();

	canvasID = 1;
}

function draw()
{
	textSize(32);
	background(125,125,125)

	if (canvasID == 1)
	{
		drawIntro();
	}
	if (canvasID == 2)
	{
		drawMainMenu();
	}
	if (canvasID == 3)
	{
		drawEasy();
	}

	if (canvasID == 4)
	{
		drawMedium();
	}

	if(canvasID == 5)
	{
		drawHard();
	}

}

function mouseReleased()
{
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}

	if(canvasID == -3)
	{
		canvasID = 3
	}

	if(canvasID == -4)
	{
		canvasID = 4
	}

	if(canvasID == -5)
	{
		canvasID = 5
	}

	if(canvasID == -6)
	{
		canvasID = 6
	}

	locked = false;
}
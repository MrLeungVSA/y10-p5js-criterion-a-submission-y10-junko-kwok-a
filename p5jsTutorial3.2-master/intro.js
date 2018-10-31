function preloadIntro()
{

}

function setupIntro()
{
  createCanvas(700,500);

}

function drawIntro()

{
	text("This is the Intro Page\n\nClick anywhere to continue", 10,50);

	if(mouseIsPressed)
	{
		canvasID = 2
	}
	
}
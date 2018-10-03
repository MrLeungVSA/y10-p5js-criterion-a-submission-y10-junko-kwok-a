var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 100;

  button3X = 500;
  button3Y = 100;

  button4Y = 200;
  button4X = 500;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(100,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);	
		text("Lexa...",35,40)	
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);	
		fill(20,10,10)
		text("Clarke?",35,40);	
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("",35,40);




	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(0,0,0);
		stroke(51,70,190);
		textSize(16);
		text("I'm dying.",button2X+30-15,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(16);
		fill(50,100,300)
		text("I...",button2X+30-5,button2Y+30);
	}



	fill(200,200,255);
	stroke(0,0,0);
	rect(button3X,button3Y,100,50);

	if (mouseX > button3X && mouseX < button3X + 100 && mouseY > button3Y && mouseY < button3Y+50)
	{
		fill(0,0,0);
		stroke(51,70,190);
		textSize(16);
		text("You can't save me.",button3X+30-15,button3Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(16);
		fill(50,100,300)
		text("No.",button3X+30-5,button3Y+30);
	}


	fill(200,200,255);
	stroke(0,0,0);
	rect(button4X,button4Y,100,50);

	if (mouseX > button4X && mouseX < button4X + 100 && mouseY > button4Y && mouseY < button4Y+50)
	{
		fill(0,0,0);
		stroke(51,70,190);
		textSize(16);
		text("I'm sorry...",button4X+30-15,button4Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(16);
		fill(50,100,300)
		text("No, you're not.",button4X+30-5,button4Y+30);

	}



}

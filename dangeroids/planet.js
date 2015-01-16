// planet object definition

function Planet(r, angle, speed, color, size, name)
{
	var g = new PIXI.Graphics();

	g.r = r;
	g.angle = angle;
	g.speed = speed;
	g.color = color;
	g.size = size;
	g.name = name;
	g.centerX = 0;
	g.centerY = 0;
	g.interactive = true;
	g.text = new PIXI.Text(g.name, {font: "12px Arial", fill: "white"});

	g.draw = function(x, y) {
		g.centerX = x;
		g.centerY = y;
		g.beginFill(g.color);
		g.drawCircle(x, y, g.size);
		g.endFill();
		stage.addChild(g); 	// add it the stage so we see it on our screens..
	}

	g.updateTextPosition = function(){
		g.text.position.x = g.centerX + g.x + 10;
		g.text.position.y = g.centerY + g.y;
	}

	// events
	g.mouseover = function(data){
		console.log(g.name);
		// create some white text using the Snippet webfont
		g.text.position.x = g.centerX + g.x + 10;
		g.text.position.y = g.centerY + g.y;
		stage.addChild(g.text);
	}	

	g.mouseout = function(data){
		console.log(g.name + " out");
		// remove text from stage
		stage.removeChild(g.text);
	}

	return g;
}
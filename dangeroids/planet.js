// planet object definition

function Planet(r, angle, speed, color, size)
{
	var g = new PIXI.Graphics();

	g.r = r;
	g.angle = angle;
	g.speed = speed;
	g.color = color;
	g.size = size;
	g.centerX = 0;
	g.centerY = 0;

	g.draw = function(x, y) {
		g.centerX = x;
		g.centerY = y;
		g.beginFill(g.color);
		g.drawCircle(x, y, g.size);
		g.endFill();
		stage.addChild(g); 	// add it the stage so we see it on our screens..
	}

	return g;
}
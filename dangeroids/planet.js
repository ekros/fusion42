// planet object definition

function Planet(r, angle, speed, color)
{
	var g = new PIXI.Graphics();

	g.r = r;
	g.angle = angle;
	g.speed = speed;
	g.color = color;

	return g;
}
class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=150;
		this.height=150;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.wallThickness, this.height, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		
		this.image=loadImage("dustbingreen.png")

		this.rightWallBody=Bodies.rectangle(this.x+this.Width/2, this.y-this.Height/2, this.wallThickness, this.height, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.height);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.height);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			imageMode(CENTER)
			fill(255)
			//rect(0,0,this.width, this.wallThickness);
			image(this.image, 0, -this.height/2, this.width, this.height)

			pop()
			

	}
}

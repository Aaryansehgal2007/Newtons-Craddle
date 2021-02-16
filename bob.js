class Bob {
  constructor(x, y, radius) {
    var options = {
        'isStatic':false,
        'restitution':1.3,
        'friction':0,
        'density':1
    }
    this.x = x
    this.y = y
    this.radius = radius
    this.body = Bodies.circle(this.x, this.y,(this.radius/2), options);
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    
    fill("green");
    strokeWeight(3)
    stroke("blue")
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius,this.radius);
    
    pop();
  }
};
class Particle {
    constructor(x, y,) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }

      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      
      
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
       
      var angle = this.body.angle;
      push();
  
       fill(random(0,255),random(0,255),random(0,255))
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
    ellipse(0, 0,20,20 );
       pop();

      
    }
  };
  
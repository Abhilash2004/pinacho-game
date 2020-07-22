class Pinocho{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x,y,30,options);
      World.add(world, this.body);
      this.radius = 30;
    }
    display(){
        var pos =this.body.position;
       
        var angle = this.body.angle;
       
        
  
       fill(245);
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
    ellipse(0, 0,30,30 );
        
    }
  };
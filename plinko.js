class Plinko{
    constructor(x, y, radius){
      var options ={
        isStatic: true,
        friction: 1.0,
        density: 1.
      }
        this.x = x;
        this.y = y;
        this.radius = 12.5;
        this.body = Bodies.circle(this.x,this.y,20, options);
        World.add(world, this.body);     
       }

       
       display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0, this.radius,this.radius);
        pop();
         
        
      }
    };

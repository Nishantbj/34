class Ball {
    constructor(x,y,r){
      var options = {
          isStatic:false

      } 
      this.body = Bodies.circle(x,y,r,options)
      World.add(world,this.body)
      this.radius = r
      this.image = loadImage("Wrecking-ball.jpg")

    }
    show(){
       // image('ball',this.x,this.y)
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
       
    }
}

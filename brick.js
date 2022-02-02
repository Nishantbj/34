class Bricks {
    constructor(x,y,w,h){
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:1,
          density:0.01

      } 
      this.body = Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
      this.width = w
      this.height = h
      this.image = loadImage("brick.jpg")

    }
    show(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
        pop ()
    }
}
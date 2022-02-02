class Rope {
    constructor(bodyA,pointB){
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.01,
          length:200

      } 
      this.rope = Matter.Constraint.create(options)
      World.add(world,this.rope)
    }

    show(){
    var pointA = this.rope.bodyA.position
    var pointB = this.rope.pointB
    line (pointB.x,pointB.y,pointA.x,pointA.y)
 }
}
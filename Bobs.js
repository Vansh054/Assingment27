class Bob{
    constructor(x,y,r){
        var ball_options ={
            isStatic:true,
            restitution:1
        }
        this.body = Bodies.circle(x,y,r,ball_options)
        this.radius = r
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        stroke("black")
        fill("pink")
        ellipse(0,0,this.radius)
        pop();

       
    }
}
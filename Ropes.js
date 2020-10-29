class Rope{
    constructor(a,b){
        var constraint_options ={
            bodyA:a,
            bodyB:b,
            stiffness:0.04,
            length:500
        }
        this.chain = Constraint.create(constraint_options)
        World.add(world,this.chain)
    }
    display(){
        var bob_y = this.chain.bodyA.position.y ;
        stroke("white")
        line(this.chain.bodyA.position.x,bob_y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}
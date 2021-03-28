class Ball{
    constructor(x,y,r){
    var balloptions = {
        friction : 0.1,
        restitution : 0.1,
        density : 1,
    }
    this.body = Bodies.circle(x,y,r,balloptions)
    World.add(world,this.body)
}
display(){
push()
fill("white")
ellipseMode(CENTER)
ellipse(this.body.position.x, this.body.position.y,this.r,this.r)
pop()
    }
}
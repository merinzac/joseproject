class Paper{
constructor(x,y,r){
    var options={
    
        isStatic:false,
        restitution:0.3,  
   
       }
      this.r = r
    this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body);
}
display(){
    var pos = this.body.position
    push()
    fill("red");
    noStroke()
    translate(pos.x,pos.y)
    ellipseMode(CENTER)
    ellipse(0,0,this.r,this.r);
    pop()
}
}
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
        }
        this.pointB = pointB
        this.techno= Constraint.create(options);
        World.add(world, this.techno);
    }
    fly(){
        this.techno.bodyA = null;
    }

    display(){
        if(this.techno.bodyA){
        var pointA = this.techno.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}

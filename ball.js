class Ball {
    constructor(x, y, radius, options) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }
    display() {
        fill("magenta")
        push();
        translate(this.body.position.x, this.body.position.y);
        // ellipseMode(RADIUS)
        // ellipse(0, 0, this.radius)
        
        imageMode(CENTER);
        
        image(this.image, 0, 0, 2*this.radius, 2*this.radius)
        pop();
    }
}
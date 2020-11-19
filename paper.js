class Paper {
    constructor (x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.6,
            density: 1.2,
            friction: 0.5
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        ellipse(pos.x, pos.y, this.radius);
    }


}

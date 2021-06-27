class Element {
    constructor(x, y, m) {
        this.mass = m;
        this.rad = m * 7;
        this.H = 0;
        this.loc = createVector(x, y);
        this.vel - createVector(0, 0);
        this.accel = createVector(0, 0);
    }

    applyForce(force){
        let f = p5.vector.div(force, this.mass);
        this.accel.add(f);
    }

    update(){
        this.vel.add(this.add);
        this.loc.add(this.vel);
        this.accel.mult(0);
        this.H += 1;
    }

    display() {
        stroke(0);
        fill(this.H+random(50), 100, 100);
        squareMode(CENTER)
        square(this.loc.x, this.loc.y, this.rad * 2);
    }

    edges() {
        if (this.loc.x > width) {
          this.loc.x = 0;
        }
        if (this.loc.x < 0) {
          this.loc.x = width;
        }
        if (this.loc.y > height) {
          this.loc.y = 0;
        }
        if (this.loc.y < 0) {
          this.loc.y = height;
        }
    
        if (this.H >= 360){
          this.H = random(170, 300);
        }
      }
}
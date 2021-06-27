let swarm = [];
let num = 50;
let angle = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(70, 50, 100);
  //frameRate(20);
  for (i = 0; i < num; i++){
    swarm.push(new Pixel(random(width), 0, random(2)));
  }
}

function draw() {
  background(random(100), 40, 100, 10);
  //background(200, 10)
  scale(0.5);
  translate(width, height);



  for (i = 0; i < swarm.length; i++) { 
    swarm[i].edges();
    swarm[i].update();
    swarm[i].display();
  }

  push();
  stroke(0);
  strokeWeight(3);
  fill(255, 10);
  rotate(radians(angle));
  //circle(width/2, height/2, random(150,250));
  circle(width/2, height/2, height*random(0.2, 0.35));
  pop();
  angle += 0.25;

}

class Pixel {
  constructor(x, y, m) {
      this.mass = m;
      this.rad = m * (height*0.07);
      this.H = 200;
      this.ts = 30;
      this.loc = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
  }
  
  update(){
      this.acc.add(random(-1,1), random(-1,1));
      this.acc.div(0, this.mass);
      this.vel.add(this.acc);
      this.loc.add(this.vel);
      this.acc.mult(0);
      this.H += 1;
      this.nudge = (-this.rad*0.25,this.rad*0.25);
  }

  display() {
      noStroke();
      //stroke(0);
      fill(this.H + random(50), random(100), random(100));
      //rectMode(CENTER)
      //square(this.loc.x, this.loc.y, this.rad);
      //push();
      let a = atan2(mouseY - height / 2, mouseX - width / 2);
      rotate(a);
      quad(this.loc.x + random(this.nudge), this.loc.y + random(this.nudge),
      this.loc.x+random(this.nudge)+this.rad, this.loc.y + random(this.nudge),
      this.loc.x+random(this.nudge)+this.rad, this.loc.y + random(this.nudge) + this.rad,
      this.loc.x+random(this.nudge), this.loc.y + random(this.nudge) + this.rad);
      //pop();
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

    if (this.H >= 300){
        //this.H = random(250,350)
        this.H = 200;
      }
    }
}

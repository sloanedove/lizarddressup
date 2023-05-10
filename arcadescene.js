function arcadescene() {
  const scene = (sketch) => {
    // let choices = ["statefair", "balloon", "paris", "lavender"];
    let obstacles;
    let randint;
    let score;
    let lost;
    let next;
    let spread;
    let slider;
    sketch.preload = () => {};
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("arcadescene");
      sketch.background(255);
      sketch.textSize(24);
      slider = sketch.createSlider(10, 20, 12, 1);
      slider.position(sketch.width - slider.width, 0);
      sketch.resetSketch();
    };
    sketch.keyPressed= () => {
        if (sketch.key == " ") {
          dinosaur.jump();
          if (lost) {
            sketch.resetSketch();
          }
        }
      }
      sketch.resetSketch = () => {
        console.log("Restarting game");
        score = 0;
        lost = false;
        obstacles = [];
        next = 0;
        dinosaur = new Dinosaur();
        new Obstacle();
        randint = sketch.int(sketch.random(50, 150));
        sketch.loop();
      }
      sketch.draw=()=> {
        sketch.background(220);
        sketch.text(score, 5, 24);
        next += 1;
        if (next == randint) {
          obstacles.push(new Obstacle());
          score += 1;
          next = 0;
          //spread = slider.value()
          randint = sketch.int(sketch.random(40, sketch.width / 5));
        }
        for (let o of obstacles) {
          if (o.x < 0) {
            if (obstacles.length > 3) {
              obstacles.shift();
            }
          }
          o.move();
          o.show();
          if (dinosaur.hits(o)) {
            console.log("Game Over!");
            lost = true;
            sketch.noLoop();
          }
        }
      
        dinosaur.show();
        dinosaur.move();
      }
      class Obstacle {
 
        constructor() {
          this.h = 50
          this.w = 20
          this.x = sketch.width
          this.y = sketch.height - this.h
        }
        
        move() {
          this.x -= 6
        }
        
        show() {
          sketch.rect(this.x, this.y, this.w, this.h)
        }
      }
      class Dinosaur {
        constructor() {
          this.r = 50
          this.x = this.r;
          this.y = sketch.height - this.r;
          this.vy = 0;
          this.gravity = 0.6;
        }
      
        jump() {
          this.elev = sketch.height - this.y - this.r
          if (this.elev == 0) {
            this.vy = -slider.value();
          }
        }
        
        hits(obs) {
          return sketch.collideRectRect(this.x,this.y,this.r,this.r,obs.x,obs.y,obs.w,obs.h)
        }
      
        move() {
          this.y += this.vy;
          this.vy += this.gravity
          this.y = sketch.constrain(this.y, 0, sketch.height - this.r)
        }
      
        show() {
          sketch.rect(this.x, this.y, this.r, this.r);
        }
      }
  };
  let arcadebuttonclose = document.getElementById("arcade-close-btn");
  arcadebuttonclose.addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("arcadescene").style.display = "none";
  });
  return new p5(scene);
}



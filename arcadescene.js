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
    sketch.preload = () => {
      scorpion=sketch.loadImage("arcade/scorpgame.png");
      obstacle1=sketch.loadImage("arcade/obstacle1.png");
      obstacle2=sketch.loadImage("arcade/obstacle2.png");
      obstacle3=sketch.loadImage("arcade/obstacle3.png");
      obstacleimages=[];
      obstacleimages.push(obstacle1);
      obstacleimages.push(obstacle2);
      obstacleimages.push(obstacle3);
    };
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("arcadescene");
      sketch.background(255);
      sketch.textSize(24);
      slider = sketch.createSlider(10, 20, 12, 1);
      slider.position(sketch.width - slider.width, 0);
      // console.log("test2");
      sketch.resetSketch();
    };
    // sketch.keyPressed= () => {
    //     if (sketch.key == " ") {
    //       dinosaur.jump();
    //       if (lost) {
    //         console.log("test");
    //         sketch.resetSketch();
    //       }
    //     }
    //   }
    sketch.resetSketch = () => {
      // console.log("Restarting game");
      score = 0;
      lost = false;
      obstacles = [];
      next = 0;
      dinosaur = new Dinosaur(scorpion);
      randint = sketch.int(sketch.random(50, 150));
      sketch.loop();
    };
    sketch.draw = () => {
      sketch.background(220);
      sketch.text(score, 5, 24);
      next += 1;
      if (next == randint) {
        obstacles.push(new Obstacle(sketch.random(obstacleimages)));
        score += 1;
        next = 0;
        //spread = slider.value()
        randint = sketch.int(sketch.random(40, sketch.width / 5));
      }
      if (sketch.keyIsDown(32)) {
        dinosaur.jump();
        if (lost) {
          // console.log("test");
          sketch.resetSketch();
        }
      }
      for (let o of obstacles) {
        if (o.x < 0) {
          if (obstacles.length > 3) {
            obstacles.shift();
          }
        }
        if(!lost){
          o.move();
        }
        
        o.show();
        if (dinosaur.hits(o)) {
          // console.log("Game Over!");
          lost = true;
          // sketch.noLoop();
          // sketch.resetSketch();
        }
      }

      dinosaur.show();
      if(!lost){
        dinosaur.move();
      }
      
    };
    class Obstacle {
      constructor(img) {
        this.img=img;
        this.w = 100;
        this.x = sketch.width;
        this.y = sketch.height - this.w;
      }

      move() {
        this.x -= 6;
      }

      show() {
        // sketch.rect(this.x, this.y, this.w, this.h);
        sketch.image(this.img, this.x, this.y,this.w, this.w);
      }
    }
    class Dinosaur {
      constructor(scorp) {
        this.scorp = scorp;
        this.r = 300;
        this.x = this.r;
        this.y = sketch.height - this.r;
        this.vy = 0;
        this.gravity = 0.225;
      }

      jump() {
        this.elev = sketch.height - this.y - this.r;
        // console.log(this.elev);
        if (this.elev == 0) {
          this.vy = -slider.value();
          // this.vy = -this.gravity;
        }
      }

      hits(obs) {
        return sketch.collideRectRect(
          this.x,
          this.y,
          this.r,
          this.r,
          obs.x,
          obs.y,
          obs.w,
          obs.w
        );
      }

      move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = sketch.constrain(this.y, 0, sketch.height - this.r);
      }

      show() {
        sketch.image(this.scorp, this.x, this.y, this.r, this.r);
      }
    }
  };
  let arcadebuttonclose = document.getElementById("arcade-close-btn");
  arcadebuttonclose.addEventListener("click", () => {
    // console.log("clicked");
    document.getElementById("arcadescene").style.display = "none";
  });
  return new p5(scene);
}

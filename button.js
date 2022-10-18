class Button {
  constructor(x, y, w, h, fileName) {
    this.x = x;
    this.y = y;
    this.fileName = loadImage(fileName);
    this.width = w;
    this.height = h;
    this.currentAngle = 0; //starting point for rotation
    this.rMin = -5; //one extreme for rotation
    this.rMax = 5; //other extreme for rotation
    this.rSpeed = 1; //how fast its rotating
  }

  intersect() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  rotateIcon() {
    push();
    imageMode(CENTER);
    translate(this.x + this.width / 2, this.y + this.height / 2);
    if (this.currentAngle > this.rMax || this.currentAngle < this.rMin) {
      this.rSpeed *= -1; //changing direction of rotation
    }
    rotate(this.currentAngle);
    image(this.fileName, 0, 0, this.width, this.height);
    this.currentAngle += this.rSpeed;
    pop();
  }

  show(){
    if (this.intersect()) {
        this.rotateIcon();
      } else {
        image(
          this.fileName,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }
  }
}

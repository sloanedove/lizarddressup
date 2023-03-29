class Button {
  constructor(sketch, x, y, w, h, fileName) {
    this.sketch = sketch;
    this.x = x;
    this.y = y;
    this.fileName = this.sketch.loadImage(fileName);
    this.width = w;
    this.height = h;
    this.currentAngle = 0; //starting point for rotation
    this.rMin = -5; //one extreme for rotation
    this.rMax = 5; //other extreme for rotation
    this.rSpeed = 1; //how fast its rotating
  }

  intersect() {
    if (
      this.sketch.mouseX > this.x &&
      this.sketch.mouseX < this.x + this.width &&
      this.sketch.mouseY > this.y &&
      this.sketch.mouseY < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  rotateIcon() {
    this.sketch.push();
    this.sketch.imageMode(this.sketch.CENTER);
    this.sketch.translate(this.x + this.width / 2, this.y + this.height / 2);
    if (this.currentAngle > this.rMax || this.currentAngle < this.rMin) {
      this.rSpeed *= -1; //changing direction of rotation
    }
    this.sketch.rotate(this.currentAngle);
    this.sketch.image(this.fileName, 0, 0, this.width, this.height);
    this.currentAngle += this.rSpeed;
    this.sketch.pop();
  }

  show() {
    if (this.intersect()) {
      this.rotateIcon();
    } else {
      this.sketch.image(this.fileName, this.x, this.y, this.width, this.height);
    }
  }
}

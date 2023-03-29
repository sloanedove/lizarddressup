class Clothing {
  /**

 * @param {number} x - location on the page, x-coordinate
 * @param {number} y - y-coordinate
 * @param {number} w - width 
 * @param {number} h - height
 * @param {number} fileName - location of image i want to use
 */
  constructor(sketch, x, y, w, h,scale, fileName) {
    this.sketch=sketch;
    this.scale=scale;
    this.x = x;
    this.y = y;
    this.fileName = this.sketch.loadImage(fileName);
    this.width = w;
    this.height = h;
    this.size = 250; //size of item
    this.currentAngle = 0; //starting point for rotation
    this.rMin = -5; //one extreme for rotation
    this.rMax = 5; //other extreme for rotation
    this.rSpeed = 1; //how fast its rotating
    this.active = false; //if the item is being dragged
    this.placed = false; //if the item is placed
    this.originalX = x; //keeps track of original starting location of clothing item
    this.originalY = y; //keeps track of original starting location of clothing item
    this.file = fileName;
    this.scaledWidth=this.width/this.scale;
    this.scaledHeight=this.height/this.scale;
  }

  /**
   * @return {boolean} checking intersection of mouseX and mouseY with the object
   */
  intersect() {
    if (
      this.sketch.mouseX > this.x &&
      this.sketch.mouseX < this.x + this.scaledWidth &&
      this.sketch.mouseY > this.y &&
      this.sketch.mouseY < this.y + this.scaledHeight
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * display image on mouse drag
   */

  clothingOnLizard() {
    this.sketch.imageMode(this.sketch.CENTER);
    if (this.active) {
      this.sketch.image(this.fileName, this.sketch.mouseX, this.sketch.mouseY, this.scaledWidth, this.scaledHeight);
    }
  }

  /**
   * rotate item of clothing on hover
   */
  rotateIcon() {
    this.sketch.push();
    this.sketch.imageMode(this.sketch.CENTER);
    this.sketch.translate(this.x + this.scaledWidth / 2, this.y + this.scaledHeight / 2);
    if (this.currentAngle > this.rMax || this.currentAngle < this.rMin) {
      this.rSpeed *= -1; //changing direction of rotation
    }
    this.sketch.rotate(this.currentAngle);
    this.sketch.image(this.fileName, 0, 0, this.scaledWidth, this.scaledHeight);
    this.currentAngle += this.rSpeed;
    this.sketch.pop();
  }
}

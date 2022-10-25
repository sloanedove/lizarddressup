class swatch {
    /**
  
   * @param {number} x - location on the page, x-coordinate
   * @param {number} y - y-coordinate
   * @param {number} fileName - location of image i want to use
   */
    constructor(x, y, fileName) {
      this.x = x;
      this.y = y;
      this.fileName = loadImage(fileName);
      this.width = 40;
      this.height = 40;
      this.size = 250; //size of item
      this.currentAngle = 0; //starting point for rotation
      this.rMin = -5; //one extreme for rotation
      this.rMax = 5; //other extreme for rotation
      this.rSpeed = 1; //how fast its rotating
      this.active = false; //if the item is being dragged
      this.placed = false; //if the item is placed
    }
  
    /**
     * @return {boolean} checking intersection of mouseX and mouseY with the object
     */
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
  
    /**
     * display image on mouse drag
     */
  
    clothingOnLizard() {
      if (this.active) {
        imageMode(CENTER);
        image(this.fileName, mouseX, mouseY, this.width, this.height);
      }
    }
  
    /**
     * rotate item of clothing on hover
     */
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
        image(this.fileName, this.x, this.y, this.width, this.height);
    }
  }
  
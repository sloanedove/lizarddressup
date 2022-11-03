class pet {
    /**
  
   * @param {number} x - location on the page, x-coordinate
   * @param {number} y - y-coordinate
   * @param {number} w - width 
   * @param {number} h - height
   * @param {number} fileName - location of image i want to use
   */
    constructor(x, y, w, h, fileName) {
      this.x = x;
      this.y = y;
      this.fileName = fileName;
      this.width = w;
      this.height = h;
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

    show(){
        image(this.fileName, this.x, this.y, this.width, this.height);
    }
}
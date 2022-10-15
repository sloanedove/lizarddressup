class Bottom {
    constructor(x, y, w, h, fileName) {
      this.x = x;
      this.y = y;
      this.fileName = loadImage(fileName);
      this.width = w;
      this.height = h;
      this.size = 250;
      this.currentAngle = 0;
      this.rMin = -5;
      this.rMax = 5;
      this.rSpeed = 1;
      this.active = false;
      this.placed = false;
    }
    intersect() {
      if (mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.height){
        return true 
      } else {
        return false
      }
    }

    clothingOnLizard() {
       
        imageMode(CENTER);
      if (this.active) {
        
        image(this.fileName, mouseX, mouseY, this.width, this.height);
      
      }else{
          // image(this.fileName, this.x,this.y, this.width, this.height);
      }
    }
    bottomPlaced(x, y) {
      this.active = false;
      this.placed = true;
      this.x = x;
      this.y = y;
    }
  
    rotateIcon() {
      /////////
      // rotating item of clothing as we hover:
      /////////
  
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
  }
  
// clothes on right, dress1 on left
// clothes get 350, dress1 gets 250 for width
// item types: dresses, tops, bottoms, shoes, purses, jewelry

var screen = 0; // 0 is title screen, 1 is instructions, 2 is game play
// variables for title 
var title = ["L", "I", "Z", "A", "R", "D", " ", "D", "R", "E", "S", "S", " ", "U", "P"];
var angle = 0;
var offset = 300;
var scalar = 40;
var speed = 8;
// var titleFont;
var roombackground;
// variables for buttons:
var proceedToGame = false;
var saveImage; // variable for saving pic of lizard 
// variables for game:
var lizardDoll;
var currentClothing = " ";
// dresses: 
var currentDress = " ";
var dressLoc;
var dressSize = 240;
var dress1; // this is a dress
var dress2;
var dressOn = false;
// tops:
var top1; // this is a top
var top2;
// var top3;
var currentTop = " ";
var topLoc;
var topSize = 110;
var bigTop = 1.3;
//this is where pngs will be 
//bottoms:
var currentBottom = " ";
var bottomLoc;
var bottomSize = 110;
var bottom1;
var bottom2;
var bigBottom = 2.4; //multiplier for bottom size
//shoes:
var currentShoe = " ";
var shoeLoc;
var shoeSize = 200;
var shoe1;
//purses:
var currentPurse = " ";
var purseLoc;
var purseSize = 70;
//jewelry:
var currentJewelry = " ";
var jewelryLoc;
var jewelrySize = 70;
// accessories
var currentAccessory = " ";
var acessoryLoc;
var accessorySize = 100;
var accessory1;
//this is for rotating hovered image:
var rMin = -5;
var rMax = 5;
var currentAngle = 0;
var rSpeed = 1;


var bow;

var dress3;
var dresses=[]

function preload() {
  lizardDoll = loadImage("lizarddoll.png");
  dress1 = loadImage("clothing/dresses/dress1.png");
  dress2 = loadImage("clothing/dresses/dress2.png");
  
  top1 = loadImage("top1.png");
  top2 = loadImage("top2.png");
//   top3 = loadImage("top3.png");
  
  bottom1 = loadImage("bottom1.png");
  bottom2 = loadImage("bottom2.png");
  
  shoe1 = loadImage("shoe1.png");
  
  accessory1 = loadImage("accessory1.png");
  
//   titleFont = loadFont("bootsandspurs.ttf");
  roombackground = loadImage("roombackground.png")
 bow = loadImage("bow.png")

 for (let i = 1; i <= 3; i++) {
  dresses[i] = loadImage(`clothing/dresses/dress${i}.png`);
}
}

function setup() {
  createCanvas(800, 800);
  dressLoc = createVector(0, 0);
  topLoc = createVector(0, 0);
  bottomLoc = createVector(0, 0);
  shoeLoc = createVector(0, 0);
  accessoryLoc = createVector(0, 0);
  angleMode(DEGREES);
  saveImage = createGraphics(400, 670);
  dress3 = new Dress(100, 100, "clothing/dresses/dress3.png");
  print(dress3.fileName);
}

function draw() {
  switch (screen) {
    case 0:
      startScreen();
      break;
    case 1:
      instructionScreen();
      break;
    case 2:
      dressUpScreen();
      break;
  }
  image("/clothing/dresses/dress3.png", dress3.x, dress3.y, dress3.width, dress3.height);
  // dress3.intersect();
}

function startScreen() {
  // background
  background(255, 201, 240);
  // draw title
//   textFont(titleFont);
textFont('Ariel');
  textSize(38);
  fill(255);
  textAlign(CENTER, CENTER);

  //the y position is constantly moving
  var y1 = offset + sin(angle) * scalar; // extreme
  var y2 = offset + sin(angle + 10) * scalar; //chilling in the center
  var y3 = offset + sin(angle + 14) * scalar; //extreme
  var offsetD = 100;

  text(title[0], 330, y1); // L
  text(title[1], 350, y2); // I
  text(title[2], 370, y3); // Z
  text(title[3], 400, y2); // A
  text(title[4], 430, y1); // R
  text(title[5], 460, y2); // D
  text(title[6], 480, y3); // _
  text(title[7], 270, y2 + offsetD); // D
  text(title[8], 300, y1 + offsetD); // R
  text(title[9], 330, y2 + offsetD); // E
  text(title[10], 360, y3 + offsetD); // S
  text(title[11], 390, y2 + offsetD); // S
  text(title[12], 420, y1 + offsetD); // _
  text(title[13], 450, y2 + offsetD); // U
  text(title[14], 480, y3 + offsetD); // P

  if (mouseX > (width / 2) - 50 && mouseX < (width / 2) + 50 && mouseY > height - 250 && mouseY < height - 150) {
    rotateIcon((width / 2) - 50, height - 250, 100, bow);
  } else {
    image(bow, (width / 2) - 50, height - 250, 100, 100);
  }
  angle += speed; //make sure to update so we move!
}

function instructionScreen() {
  background(0);
  textSize(25);
  textFont('Arial');
  textAlign(CENTER);
  text("drag and drop clothing onto miss lizard", width / 2, height / 2);
  // button:
  if (mouseX > (width / 2) - 50 && mouseX < (width / 2) + 50 && mouseY > height - 250 && mouseY < height - 150) {
    rotateIcon((width / 2) - 50, height - 250, 100, bow);
  } else {
    image(top1, (width / 2) - 50, height - 250, 100, 100);
  }
  if (proceedToGame == false) {
    proceedToGame = true;
  }
}

function dressUpScreen() {
  ///////////
  // background panels and lizard:
  ///////////

  // background draw: 
  // background(136, 232, 125);
  // insert image later
   background(roombackground);
  image(lizardDoll, 0, 100, 450, 550);
  //width / 2, height - 400
  // right side panel:
  // fill(255);
  // rect(400, 0, width, height);
  // whatever you change for rows, need to change values of mousePressed

  ///////////
  // right panel images:
  ///////////

  // row 1:
  // rotate if hovering
  if (mouseX > 420 && mouseX < 560 && mouseY > 20 && mouseY < 160) {
    rotateIcon(420, 20, 140, dress1);
  } else {
    image(dress1, 420, 20, 140, 140);
  }
  if (mouseX >550 && mouseX < 760 && mouseY > 20 && mouseY < 160){
    rotateIcon(550, 20, 140, dress2);
  }else {
    image(dress2, 550, 20, 140, 140);
  }
  // row 2:
  //rotate if hovering
  if (mouseX > 420 && mouseX < 520 && mouseY > 150 && mouseY < 250) {
    rotateIcon(420, 150, 100, top1);
  } else {
    image(top1, 420, 150, 100, 100);
  }
  if (mouseX > 530 && mouseX < 630 && mouseY > 150 && mouseY < 250) {
    rotateIcon(530, 150, 100, top2);
  } else {
    image(top2, 530, 150, 100, 100);
  }
//   if (mouseX > 660 && mouseX < 760 && mouseY > 150 && mouseY < 250) {
//     rotateIcon(660, 150, 100, top3);
//   } else {
//     image(top3, 660, 150, 100, 100);
//   }

  //row 3:
  //rotate if hovering
  if (mouseX > 420 && mouseX < 520 && mouseY > 280 && mouseY < 380) {
    rotateIcon(420, 280, 100, bottom1);
  } else {
    image(bottom1, 420, 280, 100, 100);
  }

  if (mouseX > 510 && mouseX < 710 && mouseY > 280 && mouseY < 480) {
    rotateIcon(510, 280, 200, bottom2);
  } else {
    image(bottom2, 510, 280, 200, 200);
  }

  // row 4:
  if (mouseX > 420 && mouseX < 570 && mouseY > 470 && mouseY < 620) {
    rotateIcon(420, 470, 150, shoe1);
  } else {
    image(shoe1, 420, 470, 150, 150);
  }

  // row 5:
  if (mouseX > 420 && mouseX < 520 && mouseY > 610 && mouseY < 710) {
    rotateIcon(420, 610, 100, accessory1);
  } else {
    image(accessory1, 420, 610, 100, 100);
  }


  //////////
  // displaying item of clothing on lizard:
  //////////

  push();

  imageMode(CENTER);
  if (dressLoc.x != 0 && dressLoc.y != 0) {
    if (currentDress == "dress1" && dressOn) {
      image(dress1, dressLoc.x, dressLoc.y, dressSize, dressSize);
    } else if (currentDress == "dress2" && dressOn) {
      image(dress2, dressLoc.x, dressLoc.y, dressSize, dressSize);
    }
  }
  if (shoeLoc.x != 0 && shoeLoc.y != 0) {
    if (currentShoe == "shoe1") {
      image(shoe1, shoeLoc.x, shoeLoc.y, shoeSize, shoeSize);
    }
  }
  if (bottomLoc.x != 0 && bottomLoc.y != 0) {
    if (currentBottom == "bottom1" && !dressOn) {
      image(bottom1, bottomLoc.x, bottomLoc.y, bottomSize, bottomSize);
    } else if (currentBottom == "bottom2" && !dressOn) {
      image(bottom2, bottomLoc.x, bottomLoc.y, bottomSize * bigBottom, bottomSize * bigBottom);
    }
  }

  if (topLoc.x != 0 && topLoc.y != 0) {
    if (currentTop == "top1" && !dressOn) {
      image(top1, topLoc.x, topLoc.y, topSize, topSize);
    } else if (currentTop == "top2" && !dressOn) {
      image(top2, topLoc.x, topLoc.y, topSize, topSize);
    } 
    // else if (currentTop == "top3" && !dressOn) {
    //   image(top3, topLoc.x, topLoc.y, topSize * bigTop, topSize * bigTop);
    // }
  }

  if (accessoryLoc.x != 0 && accessoryLoc.y != 0) {
    if (currentAccessory == "accessory1") {
      image(accessory1, accessoryLoc.x, accessoryLoc.y, accessorySize, accessorySize);
    }
  }

  ///////////
  // displaying clothing on mouse drag:
  ///////////

  if (currentClothing == "dress1") {
    // show dress1 clothing at mouseX, mouseY
    image(dress1, mouseX, mouseY, dressSize, dressSize);
  } else if (currentClothing == "dress2"){
    image(dress2, mouseX, mouseY, dressSize, dressSize);
  }else if (currentClothing == "top1") {
    image(top1, mouseX, mouseY, topSize, topSize);
  } else if (currentClothing == "top2") {
    image(top2, mouseX, mouseY, topSize, topSize);
  } 
//   else if (currentClothing == "top3") {
//     image(top3, mouseX, mouseY, topSize * bigTop, topSize * bigTop);
//   } 
  else if (currentClothing == "bottom1") {
    image(bottom1, mouseX, mouseY, bottomSize, bottomSize);
  } else if (currentClothing == "bottom2") {
    image(bottom2, mouseX, mouseY, bottomSize * bigBottom, bottomSize * bigBottom);
  } else if (currentClothing == "shoe1") {
    image(shoe1, mouseX, mouseY, shoeSize, shoeSize);
  } else if (currentClothing == "accessory1") {
    image(accessory1, mouseX, mouseY, accessorySize, accessorySize);
  }
  pop();
  // option to save pic of lizard:
  if (mouseX > 100 && mouseX < 300 && mouseY > height - 125 && mouseY < height - 75) {
    stroke(255);
    fill(255, 201, 240);
  } else {
    fill(255);
    stroke(255, 201, 240);
  }
  strokeWeight(2);
  rect(100, height - 125, 200, 50, 25);
  textSize(24);
  noStroke();
  fill(0);
  text("save image", 150, height - 100);
}

function mousePressed() {

  if (screen == 2) {


    //////////
    // check which item of clothing we selected:
    //////////

    if (mouseX > 420 && mouseX < 560 && mouseY > 20 && mouseY < 160) {
      currentClothing = "dress1";
    } else if (mouseX > 550 && mouseX < 760 && mouseY > 20 && mouseY <160) {
      currentClothing = "dress2";
    } else if (mouseX > 420 && mouseX < 520 && mouseY > 150 && mouseY < 250) {
      currentClothing = "top1"
    } else if (mouseX > 530 && mouseX < 630 && mouseY > 150 && mouseY < 250) {
      currentClothing = "top2"
    } 
    // else if (mouseX > 660 && mouseX < 760 && mouseY > 150 && mouseY < 250) {
    //   currentClothing = "top3"
    // } 
    else if (mouseX > 420 && mouseX < 520 && mouseY > 280 && mouseY < 380) {
      currentClothing = "bottom1"
    } else if (mouseX > 510 && mouseX < 710 && mouseY > 280 && mouseY < 480) {
      currentClothing = "bottom2";
    } else if (mouseX > 420 && mouseX < 570 && mouseY > 470 && mouseY < 620) {
      currentClothing = "shoe1";
    } else if (mouseX > 420 && mouseX < 520 && mouseY > 610 && mouseY < 710) {
      currentClothing = "accessory1";
    }
  }
}

function mouseClicked() {
  if (screen == 2) {
    if (mouseX > 100 && mouseX < 300 && mouseY > height - 125 && mouseY < height - 75) {
      let c = get(0, 0, 400, 670);
      saveImage.image(c, 0, 0);
      save(saveImage, "lizard dress up" + frameCount + ".png")
    }
  }
}

function mouseReleased() {
  if (screen == 2) { // making sure we are on dress up screen

    //////////
    // placing clothing on screen:
    // only do so if we have actually selected an item 
    //////////

    if (currentClothing != " ") {
      // we have clothing on mouse
      // going to save mouseX and mosueY to temporary variable
      var x = mouseX;
      var y = mouseY;
      //   if (currentClothing == "dress1"){
      //     // we want to place our image 
      //   }
      placeClothing(x, y);
    }
    currentClothing = " ";
  }
  if (screen == 0) {
    if (mouseX > (width / 2) - 50 && mouseX < (width / 2) + 50 && mouseY > height - 250 && mouseY < height - 150) {
      // movw to instructions screen
      screen = 1;
      console.log(screen);
    }
  }
  if (screen == 1 && proceedToGame) {
    if (mouseX > (width / 2) - 50 && mouseX < (width / 2) + 50 && mouseY > height - 250 && mouseY < height - 150) {
      // movw to instructions screen
      screen = 2;
      console.log(screen);
    }
  }
}

function placeClothing(x, y) {
  ///////////
  // place clothing and udate variables associated w item:
  //////////

  if (currentClothing == "dress1" || currentClothing == "dress2") {
    dressLoc.x = x;
    dressLoc.y = y;
    currentDress = currentClothing;
    dressOn = true;
    // wipe the top and bottom varibles 
    topLoc.x = 0;
    topLoc.y = 0;
    currentTop = " ";
    bottomLoc.x = 0;
    bottomLoc.y = 0;
    currentBottom = " ";
  }
  if (currentClothing == "top1" || currentClothing == "top2" || currentClothing == "top3") {
    topLoc.x = x;
    topLoc.y = y;
    currentTop = currentClothing;
    dressOn = false;
  }
  if (currentClothing == "bottom1" || currentClothing == "bottom2") {
    bottomLoc.x = x;
    bottomLoc.y = y;
    currentBottom = currentClothing;
    dressOn = false;
  }

  if (currentClothing == "shoe1") {
    shoeLoc.x = x;
    shoeLoc.y = y;
    currentShoe = currentClothing;
  }

  if (currentClothing == "accessory1") {
    accessoryLoc.x = x;
    accessoryLoc.y = y;
    currentAccessory = currentClothing;
  }
}

function rotateIcon(x, y, size, img) {
  /////////
  // rotating item of clothing as we hover:
  /////////
  push();
  imageMode(CENTER);
  translate(x + size / 2, y + size / 2);
  if (currentAngle > rMax || currentAngle < rMin) {
    rSpeed *= -1; //changing direction of rotation
  }
  rotate(currentAngle);
  image(img, 0, 0, size, size);
  currentAngle += rSpeed;
  pop();
}
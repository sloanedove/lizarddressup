// clothes on right, dress1 on left
// clothes get 350, dress1 gets 250 for width
// item types: dresses, tops, bottoms, shoes, purses, jewelry

var screen = 0; // 0 is title screen, 1 is instructions, 2 is game play
// variables for title
var title = [
  "L",
  "I",
  "Z",
  "A",
  "R",
  "D",
  " ",
  "D",
  "R",
  "E",
  "S",
  "S",
  " ",
  "U",
  "P",
];
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
var dressOne;
var dressTwo;
var dresses = [];

var bottomOne;
var bottomTwo;

var topOne;
var topTwo;
var topThree;
var topFour;
var topFive;

var clothing = [];

var closetPage = 0;
var arrow;

function preload() {
  lizardDoll = loadImage("lizarddoll.png");
  dress1 = loadImage("clothing/dresses/dress1.png");
  dress2 = loadImage("clothing/dresses/dress2.png");

  top1 = loadImage("clothing/tops/top1.png");
  top2 = loadImage("clothing/tops/top2.png");
  //   top3 = loadImage("top3.png");

  bottom1 = loadImage("clothing/bottoms/bottom1.png");
  bottom2 = loadImage("clothing/bottoms/bottom2.png");

  shoe1 = loadImage("clothing/shoes/shoe1.png");

  accessory1 = loadImage("clothing/accessories/accessory1.png");

  //   titleFont = loadFont("bootsandspurs.ttf");
  roombackground = loadImage("roombackground.png");
  bow = loadImage("bow.png");
  arrow = loadImage("arrow.png");

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
  dressOne = new Dress(420, 40, "clothing/dresses/dress1.png");
  dressTwo = new Dress(420, 60, "clothing/dresses/dress2.png");

  bottomOne = new Bottom(420, 280, 100, 100, "clothing/bottoms/bottom1.png");
  bottomTwo = new Bottom(510, 280, 200, 200, "clothing/bottoms/bottom2.png");

  topOne = new Top(420, 150, "clothing/tops/top1.png");
  topTwo = new Top(530, 150, "clothing/tops/top2.png");
  topThree = new Top(0, 0, "clothing/tops/top3.png");
  topFour = new Top(0, 0, "clothing/tops/top4.png");
  topFive = new Top(0, 0, "clothing/tops/top5.png");

  clothing.push(0);
  clothing[0]=[];
  clothing.push(1);
  clothing[1]=[];
  clothing[0].push(dress3);
  clothing[0].push(dressOne);
  clothing[1].push(dressTwo);
  clothing[0].push(bottomOne);
  clothing[0].push(bottomTwo);
  clothing[0].push(topOne);
  clothing[0].push(topTwo);
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
}

function startScreen() {
  // background
  background(255, 201, 240);
  // draw title
  //   textFont(titleFont);
  textFont("Ariel");
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

  if (
    mouseX > width / 2 - 50 &&
    mouseX < width / 2 + 50 &&
    mouseY > height - 250 &&
    mouseY < height - 150
  ) {
    rotateIcon(width / 2 - 50, height - 250, 100, bow);
  } else {
    image(bow, width / 2 - 50, height - 250, 100, 100);
  }
  angle += speed; //make sure to update so we move!
}

function instructionScreen() {
  background(0);
  textSize(25);
  textFont("Arial");
  textAlign(CENTER);
  text("drag and drop clothing onto miss lizard", width / 2, height / 2);
  // button:
  if (
    mouseX > width / 2 - 50 &&
    mouseX < width / 2 + 50 &&
    mouseY > height - 250 &&
    mouseY < height - 150
  ) {
    rotateIcon(width / 2 - 50, height - 250, 100, bow);
  } else {
    image(top1, width / 2 - 50, height - 250, 100, 100);
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

  for (var i = 0; i < clothing[closetPage].length; i++) {
    if (clothing[closetPage][i].intersect()) {
      clothing[closetPage][i].rotateIcon();
    } else {
      image(
        clothing[closetPage][i].fileName,
        clothing[closetPage][i].x,
        clothing[closetPage][i].y,
        clothing[closetPage][i].width,
        clothing[closetPage][i].height
      );
    }
  }

  //row 3:
  //rotate if hovering

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

  for(var j=0; j<clothing.length; j++){
    for (var i = 0; i < clothing[j].length; i++) {
      clothing[j][i].clothingOnLizard();
    } 
  }
   

  if (shoeLoc.x != 0 && shoeLoc.y != 0) {
    if (currentShoe == "shoe1") {
      image(shoe1, shoeLoc.x, shoeLoc.y, shoeSize, shoeSize);
    }
  }

  if (accessoryLoc.x != 0 && accessoryLoc.y != 0) {
    if (currentAccessory == "accessory1") {
      image(
        accessory1,
        accessoryLoc.x,
        accessoryLoc.y,
        accessorySize,
        accessorySize
      );
    }
  }

  ///////////
  // displaying clothing on mouse drag:
  ///////////

  if (currentClothing == "shoe1") {
    image(shoe1, mouseX, mouseY, shoeSize, shoeSize);
  } else if (currentClothing == "accessory1") {
    image(accessory1, mouseX, mouseY, accessorySize, accessorySize);
  }
  pop();
  // option to save pic of lizard:
  if (
    mouseX > 100 &&
    mouseX < 300 &&
    mouseY > height - 125 &&
    mouseY < height - 75
  ) {
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
for(var j=0; j < clothing.length; j++){
  for (var i = 0; i < clothing[j].length; i++) {
    if (clothing[j][i].placed) {
      console.log("placed");
      image(
        clothing[j][i].fileName,
        clothing[j][i].x,
        clothing[j][i].y,
        clothing[j][i].width,
        clothing[j][i].height
      );
    }
  } 
}
  image(arrow, width-100, height-100, 100, 50);
}
function mousePressed() {
  if (screen == 2) {
    if(mouseX>width-100 && mouseX<width && mouseY>height-100 && mouseY<height-50){
      closetPage++;
      if(closetPage>=2){
        closetPage=0;
      }
    }
    
    for (var i = 0; i < clothing[closetPage].length; i++) {
      var act = false;
      for (var j = 0; j < clothing[closetPage].length; j++) {
        if (clothing[closetPage][j].active) {
          act = true;
        }
      }

      if (act == false && clothing[closetPage][i].intersect()) {
        clothing[closetPage][i].active = !clothing[closetPage][i].active;
      } else if (clothing[closetPage][i].active) {
        clothing[closetPage][i].x = mouseX - clothing[closetPage][i].width / 2;
        clothing[closetPage][i].y = mouseY - clothing[closetPage][i].height / 2;
        clothing[closetPage][i].active = !clothing[closetPage][i].active;
        clothing[closetPage][i].placed = !clothing[closetPage][i].placed;
      }
    }

    if (topFour.intersect()) {
      topFour.active = !topFour.active;
    } else if (topFour.active) {
      topFour.x = mouseX - topFour.width / 2;
      topFour.y = mouseY - topFour.height / 2;
      topFour.active = !topFour.active;
    }

    if (topFive.intersect()) {
      topFive.active = !topFive.active;
    } else if (topFive.active) {
      topFive.x = mouseX - topFive.width / 2;
      topFive.y = mouseY - topFive.height / 2;
      topFive.active = !topFive.active;
    }

    if (mouseX > 420 && mouseX < 570 && mouseY > 470 && mouseY < 620) {
      currentClothing = "shoe1";
    } else if (mouseX > 420 && mouseX < 520 && mouseY > 610 && mouseY < 710) {
      currentClothing = "accessory1";
    }
  }
}

function mouseClicked() {
  if (screen == 2) {
    if (
      mouseX > 100 &&
      mouseX < 300 &&
      mouseY > height - 125 &&
      mouseY < height - 75
    ) {
      let c = get(0, 0, 400, 670);
      saveImage.image(c, 0, 0);
      save(saveImage, "lizard dress up" + frameCount + ".png");
    }
  }
}

function mouseReleased() {
  if (screen == 2) {
    // making sure we are on dress up screen

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
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 + 50 &&
      mouseY > height - 250 &&
      mouseY < height - 150
    ) {
      // movw to instructions screen
      screen = 1;
    }
  }
  if (screen == 1 && proceedToGame) {
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 + 50 &&
      mouseY > height - 250 &&
      mouseY < height - 150
    ) {
      // movw to instructions screen
      screen = 2;
    }
  }
}

function placeClothing(x, y) {
  ///////////
  // place clothing and udate variables associated w item:
  //////////

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

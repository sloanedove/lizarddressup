// clothes on right, dress1 on left
// clothes get 350, dress1 gets 250 for width
// item types: dresses, tops, bottoms, shoes, purses, jewelry

var screen = "home"; // 0 is title screen, 1 is instructions, 2 is game play
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
//this is for rotating hovered image:
var rMin = -5;
var rMax = 5;
var currentAngle = 0;
var rSpeed = 1;

var angle = 0;
var offset = 300;
var scalar = 40;
var speed = 8;
var roombackground;
// variables for buttons:
var proceedToGame = false;
var saveImage; // variable for saving pic of lizard
// variables for game:
var lizardDoll;

var clothing = [];
var closetPage = 0;

var bow;
var arrow;

var home;
var sun;
var mall;
var phone;
var menubackground;

var exitButton;

function preload() {
  lizardDoll = loadImage("lizarddoll.png");
  roombackground = loadImage("roombackground.png");
  menubackground = loadImage("menu/background.png");
}

function setup() {
  createCanvas(1500, 900);
  angleMode(DEGREES);
  saveImage = createGraphics(400, 670);

  var dress3 = new Clothing(1000, 80, 250, 300, "clothing/dresses/dress3.png");
  var dressOne = new Clothing(
    1120,
    80,
    250,
    300,
    "clothing/dresses/dress1.png"
  );
  var dressTwo = new Clothing(390, 30, 250, 300, "clothing/dresses/dress2.png");

  var bottomOne = new Clothing(
    430,
    340,
    100,
    100,
    "clothing/bottoms/bottom1.png"
  );
  var bottomTwo = new Clothing(
    490,
    320,
    200,
    200,
    "clothing/bottoms/bottom2.png"
  );

  var topOne = new Clothing(420, 70, 150, 150, "clothing/tops/top1.png");
  var topTwo = new Clothing(520, 70, 100, 100, "clothing/tops/top2.png");
  var topThree = new Clothing(620, 70, 100, 100, "clothing/tops/top3.png");
  var topFour = new Clothing(720, 70, 100, 100, "clothing/tops/top4.png");
  var topFive = new Clothing(820, 70, 100, 100, "clothing/tops/top5.png");

  var shoeOne = new Clothing(1000, 700, 70, 70, "clothing/shoes/shoe1.png");

  clothing.push(0);
  clothing[0] = [];
  clothing.push(1);
  clothing[1] = [];
  clothing[0].push(dress3);
  clothing[0].push(dressOne);
  clothing[1].push(dressTwo);
  clothing[0].push(bottomOne);
  clothing[0].push(bottomTwo);
  clothing[0].push(topOne);
  clothing[0].push(topTwo);
  clothing[0].push(topThree);
  clothing[0].push(topFour);
  clothing[1].push(topFive);
  clothing[0].push(shoeOne);

  bow = new Button(width / 2 - 50, height - 250, 100, 100, "bow.png");
  arrow = new Button(width - 100, height - 100, 100, 50, "arrow.png");

  home = new Button(300, 100, 100, 100, "menu/home.png");
  sun = new Button(100, 100, 100, 100, "menu/thesun.png");
  mall = new Button(500, 500, 100, 100, "menu/themall.png");
  phone = new Button(100, 100, 100, 100, "menu/phonecool.png");

  exitButton = new Button(20, 20, 100, 100, "bow.png");
}

function draw() {
  switch (screen) {
    case "home":
      menuScreen();
      break;
    case "dress up title":
      startScreen();
      break;
    case "instructions dress up":
      instructionScreen();
      break;
    case "dress up game":
      dressUpScreen();
      break;
    case "nail title":
      startScreen();
      break;
    case "nail instructions":
      instructionScreen();
      break;
    case "nail game":
      nailGameScreen();
      break;
  }
image(exitButton.fileName, exitButton.x, exitButton.y, exitButton.width, exitButton.height);
}

function menuScreen() {
  image(menubackground, 0, 0, width, height);
  home.show();
  phone.show();
  sun.show();
  mall.show();
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

  bow.show();
  angle += speed; //make sure to update so we move!
}

function instructionScreen() {
  background(0);
  textSize(25);
  textFont("Arial");
  textAlign(CENTER);
  text("drag and drop clothing onto miss lizard", width / 2, height / 2);
  // button:
  bow.show();
  if (proceedToGame == false) {
    proceedToGame = true;
  }
}

function dressUpScreen() {
  ///////////
  // background panels and lizard:
  ///////////
  background(roombackground);
  image(lizardDoll, 0, 100, 450, 550);

  ///////////
  // right panel images:
  ///////////

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

  //////////
  // displaying item of clothing on lizard:
  //////////

  push();

  imageMode(CENTER);

  for (var j = 0; j < clothing.length; j++) {
    for (var i = 0; i < clothing[j].length; i++) {
      clothing[j][i].clothingOnLizard();
    }
  }

  ///////////
  // displaying clothing on mouse drag:
  ///////////

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
  for (var j = 0; j < clothing.length; j++) {
    for (var i = 0; i < clothing[j].length; i++) {
      if (clothing[j][i].placed) {
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
  image(arrow.fileName, arrow.x, arrow.y, arrow.width, arrow.height);
}

function nailGameScreen(){
background(255);
image(lizardDoll, 100, 100, 250, 250);
}

function mousePressed() {
  //switches screens dpending on which screen it is
  if (screen == "home") {
    if (home.intersect()) {
      screen = "dress up title";
    }
    if (mall.intersect()) {
      screen = "nail title";
    }
  } else if (screen == "dress up title") {
    if (bow.intersect()) {
      screen = "instructions dress up";
    }
  } else if (screen == "instructions dress up") {
    if (bow.intersect()) {
      screen = "dress up game";
    }
  } else if (screen == "nail instructions") {
    if (bow.intersect()) {
      screen = "nail game";
    }
  }
  else if(screen =="nail title"){
    if (bow.intersect()){
      screen = "nail instructions";
    }
  }
    if(exitButton.intersect()){
      screen = "home"
    }
  // switch closet page in dress up game
  if (screen == "dress up game") {
    if (arrow.intersect()) {
      closetPage++;
      if (closetPage >= 2) {
        closetPage = 0;
      }
    }
    // j for loop checks if anything picked up previously, i for loop to pick up item; makes it so we can only pick up one item at a time
    // goes through every clothing item on specific closet page
    for (var i = 0; i < clothing[closetPage].length; i++) {
      //checking if clothing is active
      var act = false;
      // j is iterator to go through clothing items independent of other for loop
      for (var j = 0; j < clothing[closetPage].length; j++) {
        if (clothing[closetPage][j].active) {
          act = true;
        }
      }
      // main interator we are checking against to see if clothing item we are trying to access is not active already
      if (act == false && clothing[closetPage][i].intersect()) {
        clothing[closetPage][i].active = true;
      }
    }
  }
}

function mouseClicked() {
  if (screen == "instructions dress up") {
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
  //shows clothing on doll when mouse released
  if (screen == "dress up game") {
    for (var i = 0; i < clothing[closetPage].length; i++) {
      if (clothing[closetPage][i].active) {
        clothing[closetPage][i].x = mouseX - clothing[closetPage][i].width / 2;
        clothing[closetPage][i].y = mouseY - clothing[closetPage][i].height / 2;
        clothing[closetPage][i].active = false;
        clothing[closetPage][i].placed = true;
      }
    }
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

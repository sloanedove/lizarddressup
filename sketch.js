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
// every time add new background image, add here
var menubackground, mallbackground, roombackground;
// mall button variables
var nailsalonbutton,
  clothingstorebutton,
  petstorebutton,
  tattooparlorbutton,
  arcadebutton,
  pretzelbutton;

var exitButton;

var lizardhand;
var lizardhandx = 400;
var lizardhandy = 100;
var lizardhandsize = 900;
var colorchart;
var swatches = [];

var nailFilePath;

var nails = [];
var nailtest;

var nailcolor = [];

var pets = [];
var petColors = [];
var petFileNames = [];
var petstore;

var avatarlizard;

var hearts;

function preload() {
  nailFilePath = "nailgame/nailcolors/nail";
  petstore = loadImage("backgrounds/petstore.png");
  lizardDoll = loadImage("lizarddoll.png");

  hearts = loadImage("buttons/hearts.png");

  // loading images for background variables
  roombackground = loadImage("backgrounds/roombackground.png");
  menubackground = loadImage("menu/background.png");
  //to do: replace mall background image
  // mallbackground = loadImage("backgrounds/mallstores.png");

  lizardhand = loadImage("nailgame/lizardhand.png");
  colorchart = loadImage("nailgame/colorchart.png");
  nailtest = loadImage("nailgame/nailcolors/nail1color12.png");

  nailcolor.push(0);
  nailcolor[0] = [];
  nailcolor.push(0);
  nailcolor[1] = [];
  nailcolor.push(0);
  nailcolor[2] = [];
  nailcolor.push(0);
  nailcolor[3] = [];
  nailcolor.push(0);
  nailcolor[4] = [];
  for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 22; j++) {
      nailcolor[i - 1].push(loadImage(nailFilePath + i + "color" + j + ".png"));
    }
  }
  petFileNames.push(loadImage("bugs/ant1.png"));
  petFileNames.push(loadImage("bugs/ant2.png"));
  petFileNames.push(loadImage("bugs/ant3.png"));
  petFileNames.push(loadImage("bugs/ladybug1.png"));
  petFileNames.push(loadImage("bugs/ladybug2.png"));
  petFileNames.push(loadImage("bugs/ladybug3.png"));
  petFileNames.push(loadImage("bugs/caterpillar1.png"));
  petFileNames.push(loadImage("bugs/caterpillar2.png"));
  petFileNames.push(loadImage("bugs/caterpillar3.png"));
  petFileNames.push(loadImage("bugs/worm1.png"));
  petFileNames.push(loadImage("bugs/worm2.png"));
  petFileNames.push(loadImage("bugs/worm3.png"));
  petFileNames.push(loadImage("bugs/beetle1.png"));
  petFileNames.push(loadImage("bugs/beetle2.png"));
  petFileNames.push(loadImage("bugs/beetle3.png"));
  petFileNames.push(loadImage("bugs/grasshopper1.png"));
  petFileNames.push(loadImage("bugs/grasshopper2.png"));
  petFileNames.push(loadImage("bugs/grasshopper3.png"));

  var count = 0;
  // for (var i = 0; i < petFileNames.length; i += 3) {
  //   if (i <= 6) {
  //     pets.push(new pet(300 + i * 100, 100, 200, 200, petFileNames[i]));
  //   } else {
  //     pets.push(new pet(100 + count * 100, 400, 200, 200, petFileNames[i]));
  //     count += 3;
  //     console.log(count);
  //   }
  // }

  // add all pets here
  pets.push(new pet(400, 250, 200, 200, petFileNames[1]));
  pets.push(new pet(800, 250, 200, 200, petFileNames[4]));
  pets.push(new pet(1200, 240, 200, 200, petFileNames[7]));
  pets.push(new pet(450, 500, 200, 200, petFileNames[9]));
  pets.push(new pet(800, 450, 200, 200, petFileNames[13]));
  pets.push(new pet(1200, 470, 200, 200, petFileNames[15]));

  // this is all of the buttons
  bow = new Button(1772 / 2 - 50, 900 - 250, 100, 100, "buttons/bow.png");
  arrow = new Button(1772 - 100, 900 - 100, 100, 50, "buttons/arrow.png");

  home = new Button(100, 400, 350, 350, "menu/home.png");
  sun = new Button(100, 100, 300, 300, "menu/sun.png");
  mall = new Button(600, 300, 350, 350, "menu/themall.png");
  phone = new Button(1150, 450, 250, 250, "menu/phonecool.png");

  var storefrontbuttonsize = 490;
  var storefrontoffset = 250;
  nailsalonbutton = new Button(
    0 + storefrontoffset,
    0,
    storefrontbuttonsize,
    storefrontbuttonsize,
    "storefronts/nailsalon.png"
  );
  clothingstorebutton = new Button(
    storefrontbuttonsize + storefrontoffset,
    0,
    storefrontbuttonsize,
    storefrontbuttonsize,
    "storefronts/clothingstore.png"
  );
  petstorebutton = new Button(
    0 + storefrontoffset,
    storefrontbuttonsize,
    storefrontbuttonsize,
    storefrontbuttonsize,
    "storefronts/bugstore.png"
  );
  tattooparlorbutton = new Button(
    storefrontbuttonsize * 2 + storefrontoffset,
    0,
    storefrontbuttonsize,
    storefrontbuttonsize,
    "storefronts/tattooparlor.png"
  );
  arcadebutton = new Button(
    storefrontbuttonsize + storefrontoffset,
    storefrontbuttonsize,
    storefrontbuttonsize,
    storefrontbuttonsize,
    "storefronts/arcade.png"
  );
  pretzelbutton = new Button(
    storefrontbuttonsize * 2 + storefrontoffset,
    storefrontbuttonsize,
    storefrontbuttonsize,
    storefrontbuttonsize,
    "storefronts/pretzelstore.png"
  );

  exitButton = new Button(20, 20, 100, 100, "buttons/bow.png");
}

function setup() {
  createCanvas(1772, 900);
  angleMode(DEGREES);
  avatarlizard = new avatar(lizardDoll);
  saveImage = createGraphics(400, 670);

  //dresses
  var dress3 = new Clothing(1160, 80, 250, 250, "clothing/dresses/dress3.png");
  var dressOne = new Clothing(
    1330,
    80,
    250,
    250,
    "clothing/dresses/dress1.png"
  );
  var dressTwo = new Clothing(
    1480,
    80,
    235,
    235,
    "clothing/dresses/dress2.png"
  );
  //bottoms
  var bottomOne = new Clothing(
    510,
    340,
    120,
    120,
    "clothing/bottoms/bottom1.png"
  );
  var bottomTwo = new Clothing(
    570,
    320,
    240,
    240,
    "clothing/bottoms/bottom2.png"
  );
  //tops
  var topOne = new Clothing(480, 70, 160, 160, "clothing/tops/top1.png");
  var topTwo = new Clothing(640, 70, 100, 100, "clothing/tops/top2.png");
  var topThree = new Clothing(700, 70, 140, 140, "clothing/tops/top3.png");
  var topFour = new Clothing(830, 70, 120, 120, "clothing/tops/top4.png");
  var topFive = new Clothing(940, 70, 140, 140, "clothing/tops/top5.png");
  //shoes
  var shoeOne = new Clothing(1300, 500, 180, 180, "clothing/shoes/shoe1.png");
  //accessories
  // var accessory1 = new Clothing(500,500,180,180,"accessories/accesory1.png");

  clothing.push(0);
  clothing[0] = [];
  clothing.push(1);
  clothing[1] = [];

  clothing[0].push(shoeOne);

  clothing[0].push(bottomTwo);
  clothing[0].push(bottomOne);

  clothing[0].push(dress3);
  clothing[0].push(dressOne);
  clothing[0].push(dressTwo);

  clothing[0].push(topTwo);
  clothing[0].push(topThree);
  clothing[0].push(topFour);
  clothing[1].push(topFive);

  clothing[0].push(topOne);

  // making new swatches
  // when adding new swatch, make this first
  // then push swatch to array
  var darkPink = new swatch(1200, 260, "nailgame/swatches/color1swatch.png");
  var babyBlue = new swatch(1100, 320, "nailgame/swatches/color2swatch.png");
  var peach = new swatch(1140, 310, "nailgame/swatches/color3swatch.png");
  var darkBrown = new swatch(1180, 310, "nailgame/swatches/color4swatch.png");
  var darkGreen = new swatch(1215, 315, "nailgame/swatches/color5swatch.png");
  var brightPink = new swatch(1245, 320, "nailgame/swatches/color6swatch.png");
  var orange = new swatch(1095, 370, "nailgame/swatches/color7swatch.png");
  var blue = new swatch(1125, 365, "nailgame/swatches/color8swatch.png");
  var lavender = new swatch(1160, 370, "nailgame/swatches/color9swatch.png");
  var cream = new swatch(1195, 370, "nailgame/swatches/color10swatch.png");
  var brightGreen = new swatch(
    1220,
    380,
    "nailgame/swatches/color11swatch.png"
  );
  var purple = new swatch(1270, 395, "nailgame/swatches/color12swatch.png");
  var lightBrown = new swatch(1060, 415, "nailgame/swatches/color13swatch.png");
  var brightYellow = new swatch(
    1095,
    415,
    "nailgame/swatches/color14swatch.png"
  );
  var lightPink = new swatch(1113, 425, "nailgame/swatches/color15swatch.png");
  var red = new swatch(1150, 430, "nailgame/swatches/color16swatch.png");
  var yellow = new swatch(1180, 435, "nailgame/swatches/color17swatch.png");
  var khaki = new swatch(1220, 435, "nailgame/swatches/color18swatch.png");
  var white = new swatch(1250, 440, "nailgame/swatches/color19swatch.png");
  var darkBlue = new swatch(1125, 490, "nailgame/swatches/color20swatch.png");
  var grey = new swatch(1170, 490, "nailgame/swatches/color21swatch.png");
  var black = new swatch(1210, 500, "nailgame/swatches/color22swatch.png");

  swatches.push(darkPink);
  swatches.push(babyBlue);
  swatches.push(peach);
  swatches.push(darkBrown);
  swatches.push(darkGreen);
  swatches.push(brightPink);
  swatches.push(orange);
  swatches.push(blue);
  swatches.push(lavender);
  swatches.push(cream);
  swatches.push(brightGreen);
  swatches.push(purple);
  swatches.push(lightBrown);
  swatches.push(brightYellow);
  swatches.push(lightPink);
  swatches.push(red);
  swatches.push(yellow);
  swatches.push(khaki);
  swatches.push(white);
  swatches.push(darkBlue);
  swatches.push(grey);
  swatches.push(black);

  for (var i = 0; i < 5; i++) {
    nails.push(nailcolor[i][3]);
  }
}

function draw() {
  switch (screen) {
    case "home":
      menuScreen();
      break;
    case "mall screen":
      mallScreen();
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

    case "nail instructions":
      instructionScreen();
      break;
    case "nail game":
      nailGameScreen();
      break;
    case "pet store":
      petStoreScreen();
      break;
    case "pet intro screen":
      petIntroScreen();
      break;
    case "tattoo intro screen":
      tattooIntroScreen();
      break;
    case "tattoo parlor screen":
      tattooParlorScreen();
      break;
  }
  // petStoreScreen();
  // nailGameScreen();
  imageMode(CORNER);
  image(
    exitButton.fileName,
    exitButton.x,
    exitButton.y,
    exitButton.width,
    exitButton.height
  );
}

function menuScreen() {
  image(menubackground, 0, 0, width, height);
  home.show();
  phone.show();
  sun.show();
  mall.show();
  // avatarlizard.pet=new pet(200, 200, 200, 200, petFileNames[0]);
  // avatarlizard.display(200, 200, 300, 300);
}

function mallScreen() {
  // image(mallbackground, 0, 0, width, height);
  petstorebutton.show();
  clothingstorebutton.show();
  nailsalonbutton.show();
  tattooparlorbutton.show();
  arcadebutton.show();
  pretzelbutton.show();
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
  // image(lizardDoll, 0, 150, 550, 550);
  avatarlizard.display(0, 150, 550, 550);

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
        // console.log(clothing[j][i].placed);
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

function nailGameScreen() {
  imageMode(CORNER);
  background(255);
  image(lizardhand, lizardhandx, lizardhandy, lizardhandsize, lizardhandsize);
  image(colorchart, 1000, 200, 400, 400);
  for (var i = 0; i < swatches.length; i++) {
    swatches[i].show();
  }
  for (var j = 0; j < swatches.length; j++) {
    swatches[j].clothingOnLizard();
  }

  imageMode(CORNER);
  for (var k = 0; k < nails.length; k++) {
    image(nails[k], lizardhandx, lizardhandy, lizardhandsize, lizardhandsize);
  }
}

function petIntroScreen() {
  background(255);
  bow.show();
}

var ant1,
  ant2,
  ant3,
  beetle1,
  beetle2,
  beetle3,
  caterpillar1,
  caterpillar2,
  caterpillar3,
  grasshopper1,
  grasshopper2,
  grasshopper3,
  ladybug1,
  ladybug2,
  ladybug3,
  worm1,
  worm2,
  worm3;
function petStoreScreen() {
  background(petstore);
  // this for loop handles the pets generated in the menu
  for (var i = 0; i < pets.length; i++) {
    pets[i].show();
    if (pets[i].intersect() && mouseIsPressed) {
      if (i == 0) {
        ant1 = new pet(400, 250, 200, 200, petFileNames[i * 3]);
        ant2 = new pet(400, 350, 200, 200, petFileNames[i * 3 + 1]);
        ant3 = new pet(400, 450, 200, 200, petFileNames[i * 3 + 2]);
      } else if (i == 1) {
        beetle1 = new pet(750, 250, 200, 200, petFileNames[i * 3]);
        beetle2 = new pet(750, 300, 200, 200, petFileNames[i * 3 + 1]);
        beetle3 = new pet(750, 400, 200, 200, petFileNames[i * 3 + 2]);
      } else if (i == 2) {
        caterpillar1 = new pet(200, 200, 200, 200, petFileNames[i * 3]);
        caterpillar2 = new pet(200, 300, 200, 200, petFileNames[i * 3 + 1]);
        caterpillar3 = new pet(200, 400, 200, 200, petFileNames[i * 3 + 2]);
      } else if (i == 3) {
        grasshopper1 = new pet(200, 200, 200, 200, petFileNames[i * 3]);
        grasshopper2 = new pet(200, 300, 200, 200, petFileNames[i * 3 + 1]);
        grasshopper3 = new pet(200, 400, 200, 200, petFileNames[i * 3 + 2]);
      } else if (i == 4) {
        ladybug1 = new pet(200, 200, 200, 200, petFileNames[i * 3]);
        ladybug2 = new pet(200, 300, 200, 200, petFileNames[i * 3 + 1]);
        ladybug3 = new pet(200, 400, 200, 200, petFileNames[i * 3 + 2]);
      } else if (i == 5) {
        worm1 = new pet(200, 200, 200, 200, petFileNames[i * 3]);
        worm2 = new pet(200, 300, 200, 200, petFileNames[i * 3 + 1]);
        worm3 = new pet(200, 400, 200, 200, petFileNames[i * 3 + 2]);
      }
    }
  }

  if (ant1 != undefined || ant2 != undefined || ant3 != undefined) {
    ant1.show();
    ant2.show();
    ant3.show();
    if (ant1.intersect()) {
      avatarlizard.pet = ant1;
    }
    if (ant2.intersect()) {
      avatarlizard.pet = ant2;
    }
    if (ant3.intersect()) {
      avatarlizard.pet = ant3;
    }
  }
  if (!pets[0].intersect() && mouseIsPressed) {
    ant1 = undefined;
    ant2 = undefined;
    ant3 = undefined;
  }

  if (beetle1 != undefined || beetle2 != undefined || beetle3 != undefined) {
    beetle1.show();
    beetle2.show();
    beetle3.show();
    if (beetle1.intersect()) {
      avatarlizard.pet = beetle1;
    }
    if (beetle2.intersect()) {
      avatarlizard.pet = beetle2;
    }
    if (beetle3.intersect()) {
      avatarlizard.pet = beetle3;
    }
  }

  if (!pets[1].intersect() && mouseIsPressed) {
    beetle1 = undefined;
    beetle2 = undefined;
    beetle3 = undefined;
  }
  if (
    caterpillar1 != undefined ||
    caterpillar2 != undefined ||
    caterpillar3 != undefined
  ) {
    caterpillar1.show();
    caterpillar2.show();
    caterpillar3.show();
    if (caterpillar1.intersect()) {
      avatarlizard.pet = caterpillar1;
    }
    if (caterpillar2.intersect()) {
      avatarlizard.pet = caterpillar2;
    }
    if (caterpillar3.intersect()) {
      avatarlizard.pet = caterpillar3;
    }
  }
  if (!pets[2].intersect() && mouseIsPressed) {
    caterpillar1 = undefined;
    caterpillar2 = undefined;
    caterpillar3 = undefined;
  }
  if (
    grasshopper1 != undefined ||
    grasshopper2 != undefined ||
    grasshopper3 != undefined
  ) {
    grasshopper1.show();
    grasshopper2.show();
    grasshopper3.show();
    if (grasshopper1.intersect()) {
      avatarlizard.pet = grasshopper1;
    }
    if (grasshopper2.intersect()) {
      avatarlizard.pet = grasshopper2;
    }
    if (grasshopper3.intersect()) {
      avatarlizard.pet = grasshopper3;
    }
  }
  if (!pets[3].intersect() && mouseIsPressed) {
    grasshopper1 = undefined;
    grasshopper2 = undefined;
    grasshopper3 = undefined;
  }
  if (ladybug1 != undefined || ladybug2 != undefined || ladybug3 != undefined) {
    ladybug1.show();
    ladybug2.show();
    ladybug3.show();

    if (ladybug1.intersect()) {
      avatarlizard.pet = ladybug1;
    }
    if (ladybug2.intersect()) {
      avatarlizard.pet = ladybug2;
    }
    if (ladybug3.intersect()) {
      avatarlizard.pet = ladybug3;
    }
  }
  if (!pets[4].intersect() && mouseIsPressed) {
    ladybug1 = undefined;
    ladybug2 = undefined;
    ladybug3 = undefined;
  }
  if (worm1 != undefined || worm2 != undefined || worm3 != undefined) {
    worm1.show();
    worm2.show();
    worm3.show();

    if (worm1.intersect()) {
      avatarlizard.pet = worm1;
    }
    if (worm2.intersect()) {
      avatarlizard.pet = worm2;
    }
    if (worm3.intersect()) {
      avatarlizard.pet = worm3;
    }
  }
  if (!pets[5].intersect() && mouseIsPressed) {
    worm1 = undefined;
    worm2 = undefined;
    worm3 = undefined;
  }
  avatarlizard.display(0, 275, 600, 600);
  // }
}

function tattooIntroScreen() {
  background(255);
  bow.show();
}

function tattooParlorScreen() {
  background(255);
}

function mousePressed() {
  //switches screens dpending on which screen it is
  if (screen == "home") {
    if (home.intersect()) {
      screen = "dress up title";
    }
    if (mall.intersect()) {
      screen = "mall screen";
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
  } else if (screen == "mall screen") {
    if (nailsalonbutton.intersect()) {
      screen = "nail instructions";
    }
    if (clothingstorebutton.intersect()) {
      screen = "nail title";
    }
    if (petstorebutton.intersect()) {
      screen = "pet intro screen";
    }
    if (tattooparlorbutton.intersect()) {
      screen = "tattoo intro screen";
    }
    if (arcadebutton.intersect()) {
      screen = "arcade intro screen";
    }
    if (pretzelbutton.intersect()) {
      screen = "pretzel intro screen";
    }
  } else if (screen == "pet intro screen") {
    if (bow.intersect()) {
      screen = "pet store";
    }
  } else if (screen == "tattoo intro screen") {
    if (bow.intersect()) {
      screen = "tattoo parlor screen";
    }
  }
  if (exitButton.intersect()) {
    screen = "home";
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
  // this is the nail game image detection
  for (var i = 0; i < swatches.length; i++) {
    if (swatches[i].intersect()) {
      swatches[i].active = true;
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
function addClothes(clothingItem, type, typestring){
  if (clothingItem.file.includes(typestring)&& type == undefined) {
    return clothingItem.file;
  } else if (clothingItem.file.includes(typestring)&& type) {
    for (var j = 0; j < clothing[closetPage].length; j++) {
      if (type == clothing[closetPage][j].file) {
        clothing[closetPage][j].placed=false;
        clothing[closetPage][j].x = clothing[closetPage][j].originalX;
        clothing[closetPage][j].y = clothing[closetPage][j].originalY;
        console.log(clothingItem.file);
      }
    }
  return clothingItem.file;
  } 
}

function mouseReleased() {
  //shows clothing on doll when mouse released
  if (screen == "dress up game") {
    for (var i = 0; i < clothing[closetPage].length; i++) {
      const clothingItem = clothing[closetPage][i];
      //moves the piece of clothing when its held by mouse
      if (clothingItem.active) {
        clothingItem.x = mouseX - clothingItem.width / 2;
        clothingItem.y = mouseY - clothingItem.height / 2;
        clothingItem.active = false;
        //checks if clothing item is on lizard
        if (mouseX <= 450) {
          clothingItem.placed = true;
          if(clothingItem.file.includes("bottom")){
          avatarlizard.clothes.bottom = addClothes(clothingItem, avatarlizard.clothes.bottom, "bottom");
          }else if(clothingItem.file.includes("top")){
              avatarlizard.clothes.top = addClothes(clothingItem, avatarlizard.clothes.top, "top");
          }else if(clothingItem.file.includes("jacket")){
            avatarlizard.clothes.jacket = addClothes(clothingItem, avatarlizard.clothes.jacket, "jacket");
        }else if(clothingItem.file.includes("shoes")){
          avatarlizard.clothes.shoes = addClothes(clothingItem, avatarlizard.clothes.shoes, "shoes");
      }

        } else {
          clothingItem.placed = false;
        }
      }
      //snaps clothing back to original spot when its placed in closet area
      if (
        !clothingItem.placed &&
        clothingItem.x != clothingItem.originalX &&
        clothingItem.y != clothingItem.originalY &&
        mouseX>450
      ) {
        clothingItem.x = clothingItem.originalX;
        clothingItem.y = clothingItem.originalY;
        
      }
     
    }
  }
  for (var i = 0; i < swatches.length; i++) {
    if (swatches[i].active) {
      swatches[i].x = swatches[i].originalx;
      swatches[i].y = swatches[i].originaly;
      swatches[i].active = false;
      swatches[i].placed = true;
      if (mouseX > 550 && mouseX < 650) {
        nails[0] = nailcolor[0][i];
        // nailgame/nailcolors/nail1color1.png
      } else if (mouseX >= 650 && mouseX < 760) {
        console.log("nail2");
        nails[1] = nailcolor[1][i];
      } else if (mouseX >= 760 && mouseX < 870) {
        console.log("nail3");
        nails[2] = nailcolor[2][i];
      } else if (mouseX >= 870 && mouseX < 1000) {
        console.log("nail4");
        nails[3] = nailcolor[3][i];
      } else if (mouseX > 1000 && mouseX < 1080) {
        console.log("nail5");
        nails[4] = nailcolor[4][i];
      }
    }
  }
}

// function releaseHearts(){
//   for(let i=0; i<20; i++){
//     let heart= document.createElement("img");
//     heart.src="images/hearts.png";
//     heart.setAttribute("class", "heart")
//     heart.style.position="fixed";
//     heart.style.bottom="0px";
//     heart.width=randomIntFromInterval(50, window.innerWidth/3);
//     heart.style.left=randomIntFromInterval(5, window.innerWidth)+"px";
//     heart.speed=randomIntFromInterval(4,10);
//     heart.style.height="auto";
//  //    heart.height=65;
//     console.log(heart);
//     document.body.appendChild(heart);
//  }
//   setInterval(updateHearts, 16)

//  }

//  function updateHearts(){
//     for(let i=0;i<20;i++){

//      let hearts=document.body.getElementsByClassName("heart");
//      // let floatingHearts= document.getElementById("heart");
//      let heartPosition= hearts[i].style.bottom;
//      heartPosition=parseInt(heartPosition.substring(0, heartPosition.length-2));
//      heartPosition += hearts[i].speed;
//      hearts[i].style.bottom=heartPosition+"px"
//  }
//  }

//  function randomIntFromInterval(min, max) { // min and max included
//      return Math.floor(Math.random() * (max - min + 1) + min)
//    }

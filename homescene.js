function homescene(avatarlizard) {
  const scene = (sketch) => {
    var lizardDoll, roombackground;
    var clothing = [];
    var closetPage = 0;
    var dressOn = false;

    sketch.preload = () => {
      lizardDoll = sketch.loadImage("lizarddolltrimmed.png");
      roombackground = sketch.loadImage("backgrounds/roombackground.png");
      bow = new Button(
        sketch,
        1772 / 2 - 50,
        900 - 250,
        100,
        100,
        "buttons/bow.png"
      );
      arrow = new Button(
        sketch,
        1772 - 100,
        900 - 100,
        100,
        50,
        "buttons/arrow.png"
      );
      resetButton = new Button(
        sketch,
        75,
        900 - 100,
        1323/10,
        1150/10,
        "buttons/burger.png"
      );

      //adding clothing pages
      clothing.push(0);
      clothing[0] = [];
      clothing.push(1);
      clothing[1] = [];
      clothing.push(2);
      clothing[2] = [];

      //adding clothing per page
      //shoes
      clothing[0].push(
        new Clothing(
          sketch,
          1300,
          725,
          1500,
          1500,
          8.75,
          "clothing/shoes/shoe1.png"
        )
      );
      //bottoms
      clothing[0].push(
        new Clothing(
          sketch,
          500,
          350,
          1490,
          1326,
          12,
          "clothing/bottoms/bottom1.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          575,
          325,
          1152,
          1473,
          6,
          "clothing/bottoms/bottom2.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          760,
          325,
          1170,
          1478,
          8,
          "clothing/bottoms/bottom3.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          900,
          325,
          1202,
          1477,
          8,
          "clothing/bottoms/bottom4.png"
        )
      );
      clothing[1].push(
        new Clothing(
          sketch,
          525,
          350,
          1351,
          1433,
          9,
          "clothing/bottoms/bottom5.png"
        )
      );
      clothing[1].push(
        new Clothing(
          sketch,
          685,
          350,
          1327,
          1349,
          10,
          "clothing/bottoms/bottom6.png"
        )
      );
      clothing[2].push(
        new Clothing(
          sketch,
          555,
          350,
          1196,
          1476,
          8,
          "clothing/bottoms/bottom7.png"
        )
      );
      clothing[1].push(
        new Clothing(
          sketch,
          830,
          350,
          1500,
          1500,
          11,
          "clothing/bottoms/bottom8.png"
        )
      );
      clothing[2].push(
        new Clothing(
          sketch,
          900,
          350,
          1240,
          1440,
          7,
          "clothing/bottoms/bottom9.png"
        )
      );
      clothing[1].push(
        new Clothing(
          sketch,
          975,
          350,
          1086,
          1343,
          7,
          "clothing/bottoms/bottom10.png"
        )
      );
      clothing[2].push(
        new Clothing(
          sketch,
          745,
          350,
          1500,
          1500,
          12,
          "clothing/bottoms/bottom11.png"
        )
      );

      //tops
      clothing[0].push(
        new Clothing(sketch, 500, 70, 1480, 1299, 11, "clothing/tops/top1.png")
      );
      clothing[0].push(
        new Clothing(sketch, 645, 80, 1253, 1456, 14, "clothing/tops/top2.png")
      );
      clothing[0].push(
        new Clothing(sketch, 750, 70, 966, 1289, 11, "clothing/tops/top3.png")
      );
      clothing[0].push(
        new Clothing(sketch, 855, 70, 1083, 1400, 10, "clothing/tops/top4.png")
      );
      clothing[0].push(
        new Clothing(sketch, 960, 70, 1325, 1427, 10, "clothing/tops/top5.png")
      );
      clothing[1].push(
        new Clothing(sketch, 515, 70, 1459, 1309, 11, "clothing/tops/top6.png")
      );
      clothing[1].push(
        new Clothing(sketch, 640, 70, 1474, 1111, 7.5, "clothing/tops/top7.png")
      );
      clothing[1].push(
        new Clothing(sketch, 840, 70, 1305, 1480, 9, "clothing/tops/top8.png")
      );
      clothing[1].push(
        new Clothing(
          sketch,
          1000,
          70,
          1479,
          1216,
          17.5,
          "clothing/tops/top10.png"
        )
      );
      clothing[2].push(
        new Clothing(sketch, 550, 70, 1500, 1349, 11, "clothing/tops/top9.png")
      );

      //dresses + suits
      clothing[0].push(
        new Clothing(
          sketch,
          1250,
          90,
          1096,
          1477,
          5,
          "clothing/dresses/dress1.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          1400,
          90,
          828,
          1451,
          5,
          "clothing/dresses/dress2.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          1530,
          90,
          1007,
          1462,
          5,
          "clothing/dresses/dress3.png"
        )
      );

      //jackets
      clothing[0].push(
        new Clothing(
          sketch,
          1250,
          480,
          1500,
          1500,
          8,
          "clothing/jackets/jacket1.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          1440,
          480,
          2021,
          1776,
          14,
          "clothing/jackets/jacket3.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          1590,
          460,
          1500,
          1500,
          8,
          "clothing/jackets/jacket4.png"
        )
      );
      clothing[1].push(
        new Clothing(
          sketch,
          1275,
          490,
          1550,
          1500,
          11,
          "clothing/jackets/jacket2.png"
        )
      );
      clothing[1].push(
        new Clothing(
          sketch,
          1400,
          450,
          1550,
          1500,
          7,
          "clothing/jackets/jacket6.png"
        )
      );
      // clothing[1].push(new Clothing(sketch, 1575, 490, 1550, 1500, 11, "clothing/jackets/jacket7.png"));

      //accessories
      clothing[0].push(
        new Clothing(
          sketch,
          550,
          720,
          1500,
          1500,
          9,
          "clothing/accessories/accessory1.png"
        )
      );
      clothing[0].push(
        new Clothing(
          sketch,
          700,
          720,
          1500,
          1500,
          9,
          "clothing/accessories/accessory2.png"
        )
      );
    };
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("homescene");
      sketch.background(0);
      sketch.angleMode(sketch.DEGREES);
      sketch.avatarlizard = new avatar(sketch, lizardDoll);
    };

    sketch.draw = () => {
      sketch.dressUpScreen();
      // console.log(sketch.avatarlizard);
    };

    sketch.dressUpScreen = () => {
      sketch.background(roombackground);
      sketch.avatarlizard.display(sketch, 75, 150, 2.75);
      for (var i = 0; i < clothing[closetPage].length; i++) {
        if (clothing[closetPage][i].intersect()) {
          clothing[closetPage][i].rotateIcon();
        } else {
          sketch.image(
            clothing[closetPage][i].fileName,
            clothing[closetPage][i].x,
            clothing[closetPage][i].y,
            clothing[closetPage][i].scaledWidth,
            clothing[closetPage][i].scaledHeight
          );
        }
      }
      sketch.push();

      sketch.imageMode(sketch.CENTER);

      for (var j = 0; j < clothing.length; j++) {
        for (var i = 0; i < clothing[j].length; i++) {
          clothing[j][i].clothingOnLizard();
        }
      }

      sketch.pop();
      sketch.image(arrow.fileName, arrow.x, arrow.y, arrow.width, arrow.height);
      sketch.image(resetButton.fileName, resetButton.x, resetButton.y, resetButton.width, resetButton.height);
      sketch.moreClothes();
      sketch.avatarlizard.displayClothing(sketch, 75, 150, 2.75);
    };

    sketch.mousePressed = () => {
      if (arrow.intersect()) {
        closetPage++;
        if (closetPage >= 3) {
          closetPage = 0;
        }
      }
      if(resetButton.intersect()){
        sketch.avatarlizard.clothes={
          //key:value
          shoes: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
          bottom: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
          top:{file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
          dress: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
          jacket: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
          accessory: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},

      };
      }
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
    };
    sketch.checkDress = () => {
      if (dressOn) {
        if (
          sketch.avatarlizard.clothes.top.file != undefined ||
          sketch.avatarlizard.clothes.bottom.file != undefined
        ) {
          for (var j = 0; j < clothing[closetPage].length; j++) {
            if (
              sketch.avatarlizard.clothes.top.file == clothing[closetPage][j].file ||
              sketch.avatarlizard.clothes.bottom.file == clothing[closetPage][j].file
            ) {
              clothing[closetPage][j].placed = false;
              clothing[closetPage][j].x = clothing[closetPage][j].originalX;
              clothing[closetPage][j].y = clothing[closetPage][j].originalY;
            }
          }
          sketch.avatarlizard.clothes.top.file = undefined;
          sketch.avatarlizard.clothes.bottom.file = undefined;
        }
      } else {
        if (sketch.avatarlizard.clothes.dress.file != undefined) {
          for (var j = 0; j < clothing[closetPage].length; j++) {
            if (
              sketch.avatarlizard.clothes.dress.file == clothing[closetPage][j].file
            ) {
              clothing[closetPage][j].placed = false;
              clothing[closetPage][j].x = clothing[closetPage][j].originalX;
              clothing[closetPage][j].y = clothing[closetPage][j].originalY;
            }
          }
          sketch.avatarlizard.clothes.dress.file = undefined;
        }
      }
    };
    sketch.addClothes = (clothingItem, type, typestring) => {
      if (clothingItem.file.includes(typestring) && type == undefined) {
        return clothingItem.file;
      } else if (clothingItem.file.includes(typestring) && type) {
        for (var j = 0; j < clothing[closetPage].length; j++) {
          if (type == clothing[closetPage][j].file) {
            clothing[closetPage][j].placed = false;
            clothing[closetPage][j].x = clothing[closetPage][j].originalX;
            clothing[closetPage][j].y = clothing[closetPage][j].originalY;
          }
        }
        return clothingItem.file;
      }
    };
    sketch.mouseReleased = () => {
      for (var i = 0; i < clothing[closetPage].length; i++) {
        const clothingItem = clothing[closetPage][i];
        //moves the piece of clothing when its held by mouse
        if (clothingItem.active) {
          clothingItem.x = sketch.mouseX - clothingItem.scaledWidth / 2;
          clothingItem.y = sketch.mouseY - clothingItem.scaledHeight / 2;
          clothingItem.active = false;
          //checks if clothing item is on lizard
          if (sketch.mouseX <= 450) {
            clothingItem.placed = true;
          } else {
            clothingItem.placed = false;
          }
        }
        //snaps clothing back to original spot when its placed in closet area
        if (
          !clothingItem.placed &&
          clothingItem.x != clothingItem.originalX &&
          clothingItem.y != clothingItem.originalY &&
          sketch.mouseX > 450
        ) {
          clothingItem.x = clothingItem.originalX;
          clothingItem.y = clothingItem.originalY;
        }
      }
    };

    sketch.moreClothes = () => {
      for (let i = 0; i < clothing.length; i++) {
        for (let j = 0; j < clothing[i].length; j++) {
          let clothingItem = clothing[i][j];
          if (clothingItem.placed) {
            if (clothingItem.file.includes("dress")) {
              dressOn = true;
              sketch.avatarlizard.clothes.dress.file = sketch.addClothes(
                clothingItem,
                sketch.avatarlizard.clothes.dress.file,
                "dress"
              );
              sketch.checkDress();
              sketch.avatarlizard.clothes.dress.x = clothingItem.x;
              sketch.avatarlizard.clothes.dress.y = clothingItem.y;
              sketch.avatarlizard.clothes.dress.width = clothingItem.scaledWidth;
              sketch.avatarlizard.clothes.dress.height = clothingItem.scaledHeight;
              sketch.avatarlizard.clothes.dress.loadedImage = clothingItem.fileName;
            }
            if (clothingItem.file.includes("bottom")) {
              dressOn = false;
              sketch.avatarlizard.clothes.bottom.file = sketch.addClothes(
                clothingItem,
                sketch.avatarlizard.clothes.bottom.file,
                "bottom"
              );
              sketch.checkDress();
              sketch.avatarlizard.clothes.bottom.x = clothingItem.x;
              sketch.avatarlizard.clothes.bottom.y = clothingItem.y;
              sketch.avatarlizard.clothes.bottom.width = clothingItem.scaledWidth;
              sketch.avatarlizard.clothes.bottom.height = clothingItem.scaledHeight;
              sketch.avatarlizard.clothes.bottom.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("top")) {
              dressOn = false;
              sketch.avatarlizard.clothes.top.file = sketch.addClothes(
                clothingItem,
                sketch.avatarlizard.clothes.top.file,
                "top"
              );
              sketch.checkDress();
              sketch.avatarlizard.clothes.top.x = clothingItem.x;
              sketch.avatarlizard.clothes.top.y = clothingItem.y;
              sketch.avatarlizard.clothes.top.width = clothingItem.scaledWidth;
              sketch.avatarlizard.clothes.top.height = clothingItem.scaledHeight;
              sketch.avatarlizard.clothes.top.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("jacket")) {
              sketch.avatarlizard.clothes.jacket.file = sketch.addClothes(
                clothingItem,
                sketch.avatarlizard.clothes.jacket.file,
                "jacket"
              );
              sketch.avatarlizard.clothes.jacket.x = clothingItem.x;
              sketch.avatarlizard.clothes.jacket.y = clothingItem.y;
              sketch.avatarlizard.clothes.jacket.width = clothingItem.scaledWidth;
              sketch.avatarlizard.clothes.jacket.height = clothingItem.scaledHeight;
              sketch.avatarlizard.clothes.jacket.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("shoes")) {
              sketch.avatarlizard.clothes.shoes.file = sketch.addClothes(
                clothingItem,
                sketch.avatarlizard.clothes.shoes.file,
                "shoes"
              );
              sketch.avatarlizard.clothes.shoes.x = clothingItem.x;
              sketch.avatarlizard.clothes.shoes.y = clothingItem.y;
              sketch.avatarlizard.clothes.shoes.width = clothingItem.scaledWidth;
              sketch.avatarlizard.clothes.shoes.height = clothingItem.scaledHeight;
              sketch.avatarlizard.clothes.shoes.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("accessory")) {
              sketch.avatarlizard.clothes.accessory.file = sketch.addClothes(
                clothingItem,
                sketch.avatarlizard.clothes.accessory.file,
                "accessory"
              );
              sketch.avatarlizard.clothes.accessory.x = clothingItem.x;
              sketch.avatarlizard.clothes.accessory.y = clothingItem.y;
              sketch.avatarlizard.clothes.accessory.width = clothingItem.scaledWidth;
              sketch.avatarlizard.clothes.accessory.height = clothingItem.scaledHeight;
              sketch.avatarlizard.clothes.accessory.loadedImage = clothingItem.fileName;
            }
          }
        }
      }
    }
    
    let homebuttonclose = document.getElementById("home-close-btn");
    homebuttonclose.addEventListener("click", () => {
      sketch.moreClothes();
      console.log(sketch.avatarlizard);
      document.getElementById("homescene").style.display = "none";
    });
  };
  let s = new p5(scene);
  // console.log(s[avatarlizard]);
  return s;
}

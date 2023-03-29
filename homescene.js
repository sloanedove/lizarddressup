function homescene() {
  const scene = (sketch) => {
    var lizardDoll, roombackground;
    var avatarlizard;
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
      //adding clothing pages
      clothing.push(0);
      clothing[0] = [];
      clothing.push(1);
      clothing[1] = [];
      //adding clothing per page
      //shoes
      clothing[0].push(
        new Clothing(
          sketch,
          1300,
          725,
          1500,
          1500,
          10,
          "clothing/shoes/shoe1.png"
        )
      );
      //tops
      clothing[0].push(new Clothing(sketch, 500, 70, 1480, 1299, 10, "clothing/tops/top1.png"));
      clothing[0].push(new Clothing(sketch, 610, 70, 1253, 1456, 10, "clothing/tops/top2.png"));
      clothing[0].push(new Clothing(sketch, 745, 80, 966, 1289, 10, "clothing/tops/top3.png"));
      clothing[0].push(new Clothing(sketch, 820, 70, 1083, 1400, 10, "clothing/tops/top4.png"));
      clothing[0].push(new Clothing(sketch, 940, 70, 1325, 1427, 10, "clothing/tops/top5.png"));
      clothing[1].push(new Clothing(sketch, 500, 70, 1459,1309, 10, "clothing/tops/top6.png"));
      clothing[1].push(new Clothing(sketch, 610, 70, 1474, 1111, 10, "clothing/tops/top7.png"));
      clothing[1].push(new Clothing(sketch, 745, 80, 1305, 1480, 10, "clothing/tops/top8.png"));
      clothing[1].push(new Clothing(sketch, 820, 70, 1500, 1349, 10, "clothing/tops/top9.png"));
      clothing[1].push(new Clothing(sketch, 940, 70, 1479, 1216, 10, "clothing/tops/top10.png"));

      //bottoms

      //full body items

      //jackets

      //accessories

    };
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("homescene");
      sketch.background(0);
      sketch.angleMode(sketch.DEGREES);
      avatarlizard = new avatar(sketch, lizardDoll);
    };

    sketch.draw = () => {
      sketch.dressUpScreen();
    };

    sketch.dressUpScreen = () => {
      sketch.background(roombackground);
      avatarlizard.display(75, 150, 2.75);
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
    };

    sketch.mousePressed = () => {
      if (arrow.intersect()) {
        closetPage++;
        if (closetPage >= 2) {
          closetPage = 0;
        }
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
          avatarlizard.clothes.top.file != undefined ||
          avatarlizard.clothes.bottom.file != undefined
        ) {
          for (var j = 0; j < clothing[closetPage].length; j++) {
            if (
              avatarlizard.clothes.top.file == clothing[closetPage][j].file ||
              avatarlizard.clothes.bottom.file == clothing[closetPage][j].file
            ) {
              clothing[closetPage][j].placed = false;
              clothing[closetPage][j].x = clothing[closetPage][j].originalX;
              clothing[closetPage][j].y = clothing[closetPage][j].originalY;
            }
          }
          avatarlizard.clothes.top.file = undefined;
          avatarlizard.clothes.bottom.file = undefined;
        }
      } else {
        if (avatarlizard.clothes.dress.file != undefined) {
          for (var j = 0; j < clothing[closetPage].length; j++) {
            if (
              avatarlizard.clothes.dress.file == clothing[closetPage][j].file
            ) {
              clothing[closetPage][j].placed = false;
              clothing[closetPage][j].x = clothing[closetPage][j].originalX;
              clothing[closetPage][j].y = clothing[closetPage][j].originalY;
            }
          }
          avatarlizard.clothes.dress.file = undefined;
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
            //TODO : saving x and y locations to clothingLocation object on lizard

            if (clothingItem.file.includes("dress")) {
              dressOn = true;
              avatarlizard.clothes.dress.file = sketch.addClothes(
                clothingItem,
                avatarlizard.clothes.dress.file,
                "dress"
              );
              sketch.checkDress();
              avatarlizard.clothes.dress.x = clothingItem.x;
              avatarlizard.clothes.dress.y = clothingItem.y;
              avatarlizard.clothes.dress.width = clothingItem.width;
              avatarlizard.clothes.dress.height = clothingItem.height;
              avatarlizard.clothes.dress.loadedImage = clothingItem.fileName;
            }
            if (clothingItem.file.includes("bottom")) {
              dressOn = false;
              avatarlizard.clothes.bottom.file = sketch.addClothes(
                clothingItem,
                avatarlizard.clothes.bottom.file,
                "bottom"
              );
              sketch.checkDress();
              avatarlizard.clothes.bottom.x = clothingItem.x;
              avatarlizard.clothes.bottom.y = clothingItem.y;
              avatarlizard.clothes.bottom.width = clothingItem.width;
              avatarlizard.clothes.bottom.height = clothingItem.height;
              avatarlizard.clothes.bottom.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("top")) {
              dressOn = false;
              avatarlizard.clothes.top.file = sketch.addClothes(
                clothingItem,
                avatarlizard.clothes.top.file,
                "top"
              );
              sketch.checkDress();
              avatarlizard.clothes.top.x = clothingItem.x;
              avatarlizard.clothes.top.y = clothingItem.y;
              avatarlizard.clothes.top.width = clothingItem.width;
              avatarlizard.clothes.top.height = clothingItem.height;
              avatarlizard.clothes.top.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("jacket")) {
              avatarlizard.clothes.jacket.file = sketch.addClothes(
                clothingItem,
                avatarlizard.clothes.jacket.file,
                "jacket"
              );
              avatarlizard.clothes.jacket.x = clothingItem.x;
              avatarlizard.clothes.jacket.y = clothingItem.y;
              avatarlizard.clothes.jacket.width = clothingItem.width;
              avatarlizard.clothes.jacket.height = clothingItem.height;
              avatarlizard.clothes.jacket.loadedImage = clothingItem.fileName;
            } else if (clothingItem.file.includes("shoes")) {
              avatarlizard.clothes.shoes.file = sketch.addClothes(
                clothingItem,
                avatarlizard.clothes.shoes.file,
                "shoes"
              );
              avatarlizard.clothes.shoes.x = clothingItem.x;
              avatarlizard.clothes.shoes.y = clothingItem.y;
              avatarlizard.clothes.shoes.width = clothingItem.width;
              avatarlizard.clothes.shoes.height = clothingItem.height;
              avatarlizard.clothes.shoes.loadedImage = clothingItem.fileName;
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
          sketch.mouseX > 450
        ) {
          clothingItem.x = clothingItem.originalX;
          clothingItem.y = clothingItem.originalY;
        }
      }
    };
  };

  return new p5(scene);
}

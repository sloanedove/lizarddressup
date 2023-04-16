function petscene(avatarlizard) {
  // function petscene(){
  const scene = (sketch) => {
    var petstorebackground;
    var petFileNames = [];
    var pets = [];
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
    sketch.preload = () => {
      petstorebackground = sketch.loadImage("backgrounds/petstore.png");
      petFileNames.push(sketch.loadImage("bugs/ant1.png"));
      petFileNames.push(sketch.loadImage("bugs/ant2.png"));
      petFileNames.push(sketch.loadImage("bugs/ant3.png"));
      petFileNames.push(sketch.loadImage("bugs/ladybug1.png"));
      petFileNames.push(sketch.loadImage("bugs/ladybug2.png"));
      petFileNames.push(sketch.loadImage("bugs/ladybug3.png"));
      petFileNames.push(sketch.loadImage("bugs/caterpillar1.png"));
      petFileNames.push(sketch.loadImage("bugs/caterpillar2.png"));
      petFileNames.push(sketch.loadImage("bugs/caterpillar3.png"));
      petFileNames.push(sketch.loadImage("bugs/worm1.png"));
      petFileNames.push(sketch.loadImage("bugs/worm2.png"));
      petFileNames.push(sketch.loadImage("bugs/worm3.png"));
      petFileNames.push(sketch.loadImage("bugs/beetle1.png"));
      petFileNames.push(sketch.loadImage("bugs/beetle2.png"));
      petFileNames.push(sketch.loadImage("bugs/beetle3.png"));
      petFileNames.push(sketch.loadImage("bugs/grasshopper1.png"));
      petFileNames.push(sketch.loadImage("bugs/grasshopper2.png"));
      petFileNames.push(sketch.loadImage("bugs/grasshopper3.png"));
      pets.push(new pet(sketch, 400, 250, 200, 200, petFileNames[1]));
      pets.push(new pet(sketch, 800, 250, 200, 200, petFileNames[4]));
      pets.push(new pet(sketch, 1200, 240, 200, 200, petFileNames[7]));
      pets.push(new pet(sketch, 450, 500, 200, 200, petFileNames[9]));
      pets.push(new pet(sketch, 800, 450, 200, 200, petFileNames[13]));
      pets.push(new pet(sketch, 1200, 470, 200, 200, petFileNames[15]));
    };
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("petscene");
      sketch.background(0);
    };
    sketch.draw = () => {
      sketch.image(
        petstorebackground,
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
      // this for loop handles the pets generated in the menu
      for (var i = 0; i < pets.length; i++) {
        pets[i].show();
        if (pets[i].intersect() && sketch.mouseIsPressed) {
          if (i == 0) {
            ant1 = new pet(sketch, 675, 650, 200, 200, petFileNames[i * 3]);
            ant2 = new pet(sketch,875, 650, 200, 200, petFileNames[i * 3 + 1]);
            ant3 = new pet(sketch,1075, 650, 200, 200, petFileNames[i * 3 + 2]);
          } else if (i == 1) {
            beetle1 = new pet(sketch,675, 650, 200, 200, petFileNames[i * 3]);
            beetle2 = new pet(sketch,875, 650, 200, 200, petFileNames[i * 3 + 1]);
            beetle3 = new pet(sketch,1075, 650, 200, 200, petFileNames[i * 3 + 2]);
          } else if (i == 2) {
            caterpillar1 = new pet(sketch,200, 200, 200, 200, petFileNames[i * 3]);
            caterpillar2 = new pet(sketch,200, 300, 200, 200, petFileNames[i * 3 + 1]);
            caterpillar3 = new pet(sketch,200, 400, 200, 200, petFileNames[i * 3 + 2]);
          } else if (i == 3) {
            grasshopper1 = new pet(sketch,200, 200, 200, 200, petFileNames[i * 3]);
            grasshopper2 = new pet(sketch,200, 300, 200, 200, petFileNames[i * 3 + 1]);
            grasshopper3 = new pet(sketch,200, 400, 200, 200, petFileNames[i * 3 + 2]);
          } else if (i == 4) {
            ladybug1 = new pet(sketch,200, 200, 200, 200, petFileNames[i * 3]);
            ladybug2 = new pet(sketch,200, 300, 200, 200, petFileNames[i * 3 + 1]);
            ladybug3 = new pet(sketch,200, 400, 200, 200, petFileNames[i * 3 + 2]);
          } else if (i == 5) {
            worm1 = new pet(sketch,200, 200, 200, 200, petFileNames[i * 3]);
            worm2 = new pet(sketch,200, 300, 200, 200, petFileNames[i * 3 + 1]);
            worm3 = new pet(sketch,200, 400, 200, 200, petFileNames[i * 3 + 2]);
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
      if (!pets[0].intersect() && sketch.mouseIsPressed) {
        ant1 = undefined;
        ant2 = undefined;
        ant3 = undefined;
      }

      if (
        beetle1 != undefined ||
        beetle2 != undefined ||
        beetle3 != undefined
      ) {
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

      if (!pets[1].intersect() && sketch.mouseIsPressed) {
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
      if (!pets[2].intersect() && sketch.mouseIsPressed) {
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
      if (!pets[3].intersect() && sketch.mouseIsPressed) {
        grasshopper1 = undefined;
        grasshopper2 = undefined;
        grasshopper3 = undefined;
      }
      if (
        ladybug1 != undefined ||
        ladybug2 != undefined ||
        ladybug3 != undefined
      ) {
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
      if (!pets[4].intersect() && sketch.mouseIsPressed) {
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
      if (!pets[5].intersect() && sketch.mouseIsPressed) {
        worm1 = undefined;
        worm2 = undefined;
        worm3 = undefined;
      }
      avatarlizard.display(sketch, 100, 275, 2.75);
      avatarlizard.displayClothing(sketch, 100, 275, 2.75);
    };
  };
  let petscenediv = document.getElementById("petscene");
  let petbutton = document.getElementById("pet-close-btn");
  petbutton.addEventListener("click", () => {
    petscenediv.style.display = "none";
  });
  return new p5(scene);
}

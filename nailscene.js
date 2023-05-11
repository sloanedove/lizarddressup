function nailscene(avatarlizard) {
  const scene = (sketch) => {
    var nailFilePath = "nailgame/nailcolors/nail";
    var nailcolor = [];
    var swatches = [];
    var nails = [];
    var lizardhand;
    var lizardhandx = 400;
    var lizardhandy = 100;
    var lizardhandsize = 900;
    var colorchart;
    var savednails=[];

    sketch.preload = () => {
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
          nailcolor[i - 1].push(
            sketch.loadImage(nailFilePath + i + "color" + j + ".png")
          );
        }
      }
      lizardhand = sketch.loadImage("nailgame/lizardhand.png");
      colorchart = sketch.loadImage("nailgame/colorchart.png");
    };
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("nailscene");
      sketch.background(0);
      // making new swatches
      // when adding new swatch, make this first
      // then push swatch to array
      var darkPink = new swatch(
        sketch,
        1200,
        260,
        "nailgame/swatches/color1swatch.png"
      );
      var babyBlue = new swatch(
        sketch,
        1100,
        320,
        "nailgame/swatches/color2swatch.png"
      );
      var peach = new swatch(
        sketch,
        1140,
        310,
        "nailgame/swatches/color3swatch.png"
      );
      var darkBrown = new swatch(
        sketch,
        1180,
        310,
        "nailgame/swatches/color4swatch.png"
      );
      var darkGreen = new swatch(
        sketch,
        1215,
        315,
        "nailgame/swatches/color5swatch.png"
      );
      var brightPink = new swatch(
        sketch,
        1245,
        320,
        "nailgame/swatches/color6swatch.png"
      );
      var orange = new swatch(
        sketch,
        1095,
        370,
        "nailgame/swatches/color7swatch.png"
      );
      var blue = new swatch(
        sketch,
        1125,
        365,
        "nailgame/swatches/color8swatch.png"
      );
      var lavender = new swatch(
        sketch,
        1160,
        370,
        "nailgame/swatches/color9swatch.png"
      );
      var cream = new swatch(
        sketch,
        1195,
        370,
        "nailgame/swatches/color10swatch.png"
      );
      var brightGreen = new swatch(
        sketch,
        1220,
        380,
        "nailgame/swatches/color11swatch.png"
      );
      var purple = new swatch(
        sketch,
        1270,
        395,
        "nailgame/swatches/color12swatch.png"
      );
      var lightBrown = new swatch(
        sketch,
        1060,
        415,
        "nailgame/swatches/color13swatch.png"
      );
      var brightYellow = new swatch(
        sketch,
        1095,
        415,
        "nailgame/swatches/color14swatch.png"
      );
      var lightPink = new swatch(
        sketch,
        1117,
        425,
        "nailgame/swatches/color15swatch.png"
      );
      var red = new swatch(
        sketch,
        1150,
        430,
        "nailgame/swatches/color16swatch.png"
      );
      var yellow = new swatch(
        sketch,
        1180,
        435,
        "nailgame/swatches/color17swatch.png"
      );
      var khaki = new swatch(
        sketch,
        1220,
        435,
        "nailgame/swatches/color18swatch.png"
      );
      var white = new swatch(
        sketch,
        1250,
        440,
        "nailgame/swatches/color19swatch.png"
      );
      var darkBlue = new swatch(
        sketch,
        1125,
        490,
        "nailgame/swatches/color20swatch.png"
      );
      var grey = new swatch(
        sketch,
        1170,
        490,
        "nailgame/swatches/color21swatch.png"
      );
      var black = new swatch(
        sketch,
        1210,
        500,
        "nailgame/swatches/color22swatch.png"
      );

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
    };

    sketch.draw = () => {
      sketch.imageMode(sketch.CORNER);
      sketch.background(255);
      sketch.image(
        lizardhand,
        lizardhandx,
        lizardhandy,
        lizardhandsize,
        lizardhandsize
      );
      sketch.image(colorchart, 1000, 200, 400, 400);
      for (var i = 0; i < swatches.length; i++) {
        swatches[i].show();
      }
      for (var j = 0; j < swatches.length; j++) {
        swatches[j].clothingOnLizard();
      }

      sketch.imageMode(sketch.CORNER);
      for (var k = 0; k < nails.length; k++) {
        sketch.image(
          nails[k],
          lizardhandx,
          lizardhandy,
          lizardhandsize,
          lizardhandsize
        );
      }
    };
    sketch.mousePressed = () => {
      for (var i = 0; i < swatches.length; i++) {
        if (swatches[i].intersect()) {
          swatches[i].active = true;
        }
      }
    };
    sketch.mouseReleased = () => {
      for (var i = 0; i < swatches.length; i++) {
        if (swatches[i].active) {
          swatches[i].x = swatches[i].originalx;
          swatches[i].y = swatches[i].originaly;
          swatches[i].active = false;
          swatches[i].placed = true;
          if (sketch.mouseX > 550 && sketch.mouseX < 650) {
            nails[0] = nailcolor[0][i];
            savednails[0]="nail1color"+ (i+1);
            // nailgame/nailcolors/nail1color1.png
          } else if (sketch.mouseX >= 650 && sketch.mouseX < 760) {
            nails[1] = nailcolor[1][i];
            savednails[1]="nail2color"+ (i+1);
          } else if (sketch.mouseX >= 760 && sketch.mouseX < 870) {
            nails[2] = nailcolor[2][i];
            savednails[2]="nail3color"+(i+1);
          } else if (sketch.mouseX >= 870 && sketch.mouseX < 1000) {
            savednails[3]="nail4color"+(i+1);
            nails[3] = nailcolor[3][i];
          } else if (sketch.mouseX > 1000 && sketch.mouseX < 1080) {
            nails[4] = nailcolor[4][i];
            savednails[4]="nail5color"+(i+1);
          }
        }
      }
    };
    let nailscenediv = document.getElementById("nailscene");
    let nailbutton = document.getElementById("nail-close-btn");
    nailbutton.addEventListener("click", () => {
      nailscenediv.style.display = "none";
      avatarlizard.nails=savednails;
    });
  };
  return new p5(scene);
}

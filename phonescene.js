function phonescene(avatarlizard) {
  const scene = (sketch) => {
    let firstmessage;
    let messagewidth = 2100;
    let messageheight = 478;
    let numclicks = 0;
    let choices = ["statefair", "balloon", "paris", "lavender"];

    sketch.preload = () => {
      //TODO: replace arrow asset w go to date button
      arrowbtn = sketch.loadImage("buttons/gotodatebtn.png");
      blankscreen = sketch.loadImage("phone/blankscreen.png");
      phonenewmessage = sketch.loadImage("phone/phonenewmessage.png");
      gffirstmessage = sketch.loadImage("phone/1.png");
      firstmessageresponse1 = sketch.loadImage("phone/1a.png");
      firstmessageresponse2 = sketch.loadImage("phone/1b.png");
      firstmessageresponse3 = sketch.loadImage("phone/1c.png");
      gfsecondmessage1 = sketch.loadImage("phone/2a.png");
      gfsecondmessage2 = sketch.loadImage("phone/2b.png");
      gfsecondmessage3 = sketch.loadImage("phone/2c.png");
      secondmessageresponse1 = sketch.loadImage("phone/3.png");
      secondmessageresponse2 = sketch.loadImage("phone/4.png");
      secondmessageresponse3 = sketch.loadImage("phone/5.png");
      secondmessageresponse4 = sketch.loadImage("phone/6.png");
      gfthirdmessage1 = sketch.loadImage("phone/3a.png");
      gfthirdmessage2 = sketch.loadImage("phone/4a.png");
      gfthirdmessage3 = sketch.loadImage("phone/5a.png");
      gfthirdmessage4 = sketch.loadImage("phone/6a.png");
      //nail imports
      if (avatarlizard.nails[0]) {
        nail1view1 = sketch.loadImage(
          "phonenailsview1/" + avatarlizard.nails[0] + "view1.png"
        );
      }
      if (avatarlizard.nails[1]) {
        nail2view1 = sketch.loadImage(
          "phonenailsview1/" + avatarlizard.nails[1] + "view1.png"
        );
      }
      if (avatarlizard.nails[2]) {
        nail3view1 = sketch.loadImage(
          "phonenailsview1/" + avatarlizard.nails[2] + "view1.png"
        );
      }
      if (avatarlizard.nails[3]) {
        nail4view1 = sketch.loadImage(
          "phonenailsview1/" + avatarlizard.nails[3] + "view1.png"
        );
      }
      if (avatarlizard.nails[4]) {
        nail5view1 = sketch.loadImage(
          "phonenailsview1/" + avatarlizard.nails[4] + "view1.png"
        );
      }
//view2
      if (avatarlizard.nails[0]) {
        nail1view2 = sketch.loadImage(
          "phonenailsview2/" + avatarlizard.nails[0] + "view2.png"
        );
      }
      if (avatarlizard.nails[2]) {
        nail3view2 = sketch.loadImage(
          "phonenailsview2/" + avatarlizard.nails[2] + "view2.png"
        );
      }
      if (avatarlizard.nails[3]) {
        nail4view2 = sketch.loadImage(
          "phonenailsview2/" + avatarlizard.nails[3] + "view2.png"
        );
      }
      if (avatarlizard.nails[4]) {
        nail5view2 = sketch.loadImage(
          "phonenailsview2/" + avatarlizard.nails[4] + "view2.png"
        );
      }
    };

    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("phonescene");
      sketch.background(0);
      sketch.image(phonenewmessage, 0, 0, sketch.width, sketch.height);
      if (avatarlizard.nails[0]) {
        sketch.image(nail1view1, 0, 0, sketch.width, sketch.height);
      }
      if (avatarlizard.nails[1]) {
        sketch.image(nail2view1, 0, 0, sketch.width, sketch.height);
      }
      if (avatarlizard.nails[2]) {
        sketch.image(nail3view1, 0, 0, sketch.width, sketch.height);
      }
      if (avatarlizard.nails[3]) {
        sketch.image(nail4view1, 0, 0, sketch.width, sketch.height);
      }
      if (avatarlizard.nails[4]) {
        sketch.image(nail5view1, 0, 0, sketch.width, sketch.height);
      }
    };
    let timeInSeconds = 0;
    let time = 0;
    let num = 1;
    sketch.draw = () => {
      // sketch.image(firstmessage,100, 100, 700, 700)
      time += sketch.deltaTime;
      timeInSeconds = time / 1000;
      if (timeInSeconds > num) {
        num++;
      }
      if (numclicks == 2 && timeInSeconds > 3) {
        // numclicks++;
        sketch.mousePressed();
      }
    };

    let response1;
    let response2;
    sketch.mousePressed = () => {
      let x = sketch.width / 2 - 100;
      let y = sketch.height / 2 - 50;
      if (numclicks == 0) {
        sketch.drawbackground();
        sketch.image(
          gffirstmessage,
          550,
          300,
          messagewidth / 4,
          messageheight / 4
        );
        sketch.image(
          firstmessageresponse1,
          x,
          y,
          messagewidth / 4,
          messageheight / 4
        );
        sketch.image(
          firstmessageresponse2,
          x,
          y + messageheight / 4,
          messagewidth / 4,
          messageheight / 4
        );
        sketch.image(
          firstmessageresponse3,
          x,
          y + (messageheight / 4) * 2,
          messagewidth / 4,
          messageheight / 4
        );
      } else if (numclicks == 1) {
        time = 0;
        num = 1;
        sketch.drawbackground();
        sketch.image(
          gffirstmessage,
          550,
          300,
          messagewidth / 4,
          messageheight / 4
        );
        if (sketch.hover(x, y, messagewidth / 4, messageheight / 4)) {
          sketch.image(
            firstmessageresponse1,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response1 = "1a";
        }
        if (
          sketch.hover(
            x,
            y + messageheight / 4,
            messagewidth / 4,
            messageheight / 4
          )
        ) {
          sketch.image(
            firstmessageresponse2,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response1 = "1b";
        }
        if (
          sketch.hover(
            x,
            y + (messageheight / 4) * 2,
            messagewidth / 4,
            messageheight / 4
          )
        ) {
          sketch.image(
            firstmessageresponse3,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response1 = "1c";
        }
        // TODO : replace image w correct size and typing gif; change all clothing + convert clothing sketch to do what this does
        if (response1 == "1a") {
          sketch.image(
            gfsecondmessage1,
            505,
            515,
            messagewidth / 4,
            messageheight / 4
          );
        } else if (response1 == "1b") {
          sketch.image(
            gfsecondmessage2,
            505,
            515,
            messagewidth / 4,
            messageheight / 4
          );
        } else if (response1 == "1c") {
          sketch.image(
            gfsecondmessage3,
            505,
            515,
            messagewidth / 4,
            messageheight / 4
          );
        }
        // sketch.image(arrowbtn,1200,700,65, 65);
      } else if (numclicks == 2) {
        x = 700;
        y = 250;

        sketch.drawbackground();
        sketch.image(
          secondmessageresponse1,
          x,
          y,
          messagewidth / 4,
          messageheight / 4
        );
        sketch.image(
          secondmessageresponse2,
          x,
          y + messageheight / 4,
          messagewidth / 4,
          messageheight / 4
        );
        sketch.image(
          secondmessageresponse3,
          x,
          y + (messageheight / 4) * 2,
          messagewidth / 4,
          messageheight / 4
        );
        sketch.image(
          secondmessageresponse4,
          x,
          y + (messageheight / 4) * 3,
          messagewidth / 4,
          messageheight / 4
        );
      } else if (numclicks == 3) {
        sketch.drawbackground();
        x = 700;
        y = 250;

        if (sketch.hover(x, y, messagewidth / 4, messageheight / 4)) {
          sketch.image(
            secondmessageresponse1,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response2 = choices[0];
        }
        if (
          sketch.hover(
            x,
            y + messageheight / 4,
            messagewidth / 4,
            messageheight / 4
          )
        ) {
          sketch.image(
            secondmessageresponse2,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response2 = choices[1];
        }
        if (
          sketch.hover(
            x,
            y + (messageheight / 4) * 2,
            messagewidth / 4,
            messageheight / 4
          )
        ) {
          sketch.image(
            secondmessageresponse3,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response2 = choices[2];
        }
        if (
          sketch.hover(
            x,
            y + (messageheight / 4) * 3,
            messagewidth / 4,
            messageheight / 4
          )
        ) {
          sketch.image(
            secondmessageresponse4,
            x,
            y,
            messagewidth / 4,
            messageheight / 4
          );
          response2 = choices[3];
        }
        if (response2 == choices[0]) {
          sketch.image(
            gfthirdmessage1,
            550,
            y + messageheight / 4,
            messagewidth / 4,
            messageheight / 4
          );
        } else if (response2 == choices[1]) {
          sketch.image(
            gfthirdmessage2,
            550,
            350,
            messagewidth / 4,
            messageheight / 4
          );
        } else if (response2 == choices[2]) {
          sketch.image(
            gfthirdmessage3,
            550,
            350,
            messagewidth / 4,
            messageheight / 4
          );
        } else if (response2 == choices[3]) {
          sketch.image(
            gfthirdmessage4,
            550,
            335,
            messagewidth / 4,
            messageheight / 4
          );
        }
        sketch.image(arrowbtn, 1200, 700, 65, 65);
        sketch.response = response2;
      } else if (numclicks == 4) {
        if (sketch.hover(1200, 700, 65, 65)) {
          document.getElementById("phonescene").style.display = "none";
          document.getElementById("phone-close-btn").style.display = "none";
          document.getElementById("datescene").style.display = "block";
          datescene(sketch.response, avatarlizard);
        }
      }
      numclicks++;
    };
    sketch.hover = (x, y, width, height) => {
      if (
        sketch.mouseX >= x &&
        sketch.mouseX <= x + width &&
        sketch.mouseY >= y &&
        sketch.mouseY <= y + height
      ) {
        return true;
      }
      return false;
    };
    sketch.drawbackground=()=>{
      sketch.background(0);
        sketch.image(blankscreen, 0, 0, sketch.width, sketch.height);
        if (avatarlizard.nails[0]) {
          sketch.image(nail1view2, 0, 0, sketch.width, sketch.height);
        }
        if (avatarlizard.nails[2]) {
          sketch.image(nail3view2, 0, 0, sketch.width, sketch.height);
        }
        if (avatarlizard.nails[3]) {
          sketch.image(nail4view2, 0, 0, sketch.width, sketch.height);
        }
        if (avatarlizard.nails[4]) {
          sketch.image(nail5view2, 0, 0, sketch.width, sketch.height);
        }
    }
  };
  return new p5(scene);
}

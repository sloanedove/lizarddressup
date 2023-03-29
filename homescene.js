function homescene() {
  const scene = (sketch) => {
    var lizardDoll, roombackground;
    var avatarlizard;
    var clothing=[];
    sketch.preload = () =>{
        lizardDoll = sketch.loadImage("lizarddolltrimmed.png");
        roombackground = sketch.loadImage("backgrounds/roombackground.png");
        bow = new Button(1772 / 2 - 50, 900 - 250, 100, 100, "buttons/bow.png");
        arrow = new Button(1772 - 100, 900 - 100, 100, 50, "buttons/arrow.png");
        //adding clothing pages
        clothing.push(0);
        clothing[0] = [];
        clothing.push(1);
        clothing[1] = [];
        //adding clothing per page
        clothing[0].push(new Clothing(1300, 500, 180, 180, "clothing/shoes/shoe1.png"));
    }
    sketch.setup = () => {
      let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
      canvas.parent("homescene");
      sketch.background(0);
      sketch.angleMode(DEGREES);
        avatarlizard = new avatar(lizardDoll);
    };
  };

  return new p5(scene);
}


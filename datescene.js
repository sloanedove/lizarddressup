function datescene(response, avatarlizard) {
    const scene = (sketch) => {
        let w=2338;
        let h=1654;
        // let choices = ["statefair", "balloon", "paris", "lavender"];
        sketch.preload = () => {
            statefair=sketch.loadImage("backgrounds/lizardfair.jpeg");
            balloon=sketch.loadImage("backgrounds/lizardhotairballoon.jpeg");
        }
        sketch.setup = () => {
            let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent("datescene");
            sketch.background(255);
            if(response=="statefair"){
                sketch.image(statefair,0, 0, w/2, h/2);
                avatarlizard.display(sketch, sketch.width/2, sketch.height/2, 2.75);
                avatarlizard.displayClothing(sketch, sketch.width/2, sketch.height/2,2.75);
            } else if(response=="balloon"){
                sketch.image(balloon,0, 0, w/2, h/2);
            }
        }
    }
    return new p5(scene);
}


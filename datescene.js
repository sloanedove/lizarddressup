function datescene(response, avatarlizard) {
    const scene = (sketch) => {
        let lizardsize=1500/2.75;
        let w=2100;
        let h=1066;
        // let choices = ["statefair", "balloon", "paris", "lavender"];
        sketch.preload = () => {
            statefair=sketch.loadImage("dates/carnivaldate.png");
            balloon=sketch.loadImage("dates/balloon.png");
            balloonbackground=sketch.loadImage("dates/balloondate.png");
            lavender=sketch.loadImage("dates/lavenderdate.png");
            paris=sketch.loadImage("dates/parisdate.png");
            lizardgf=sketch.loadImage("lizardgf.png");
        }
        sketch.setup = () => {
            let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent("datescene");
            sketch.background(255);
            if(response=="statefair"){
                sketch.image(statefair,0, 0, sketch.width, sketch.height);
                sketch.push();
                avatarlizard.display(sketch, (sketch.width/2)-350, sketch.height/2, 2.75);
                avatarlizard.displayClothing(sketch, (sketch.width/2)-350, sketch.height/2,2.75);
                sketch.pop();
                sketch.image(lizardgf, (sketch.width/2)+50-350, sketch.height/2,lizardsize, lizardsize);
            } else if(response=="balloon"){
                sketch.image(balloonbackground,0, 0, sketch.width, sketch.height);
                sketch.push();
                avatarlizard.display(sketch, (sketch.width/2)-250, 200, 2.75);
                avatarlizard.displayClothing(sketch, (sketch.width/2)-250, 200,2.75);
                sketch.pop();
                sketch.image(lizardgf, (sketch.width/2)+50-250, 200,lizardsize, lizardsize);
                // sketch.image(balloon,0, 0, sketch.width, sketch.height);
            }else if(response=="lavender"){
                sketch.image(lavender,0, 0, sketch.width, sketch.height);
                sketch.push();
                avatarlizard.display(sketch, sketch.width/2 - 20, 150, 2.75);
                avatarlizard.displayClothing(sketch, sketch.width/2 - 20, 150,2.75);
                sketch.pop();
                sketch.image(lizardgf, (sketch.width/2)+50, 150,lizardsize, lizardsize);
            }else if(response=="paris"){
                sketch.image(paris,0, 0, sketch.width, sketch.height);
                sketch.push();
                avatarlizard.display(sketch, (sketch.width/2)-350, sketch.height/2, 2.75);
                avatarlizard.displayClothing(sketch, (sketch.width/2)-350, sketch.height/2,2.75);
                sketch.pop();
                sketch.image(lizardgf, (sketch.width/2)+50-350, sketch.height/2,lizardsize, lizardsize);
            }
            
        }
    }
    return new p5(scene);
}


function phonescene(){
    const scene = (sketch)=>{
        let firstmessage
        let messagewidth=2100;
        let messageheight=478;
        let numclicks=0;
        sketch.preload=()=>{
            blankscreen=sketch.loadImage("phone/blankscreen.png");
            phonenewmessage=sketch.loadImage("phone/phonenewmessage.png");
            gffirstmessage=sketch.loadImage("phone/1.png");
            firstmessageresponse1=sketch.loadImage("phone/1a.png");
            firstmessageresponse2=sketch.loadImage("phone/1b.png");
            firstmessageresponse3=sketch.loadImage("phone/1c.png");
            gfsecondmessage1=sketch.loadImage("phone/2a.png");
            gfsecondmessage2=sketch.loadImage("phone/2b.png");
            gfsecondmessage3=sketch.loadImage("phone/2c.png");
            secondmessageresponse1=sketch.loadImage("phone/3.png");
            secondmessageresponse2=sketch.loadImage("phone/4.png");
            secondmessageresponse3=sketch.loadImage("phone/5.png");
            secondmessageresponse4=sketch.loadImage("phone/6.png");
            gfthirdmessage1=sketch.loadImage("phone/3a.png");
            gfthirdmessage2=sketch.loadImage("phone/4a.png");
            gfthirdmessage3=sketch.loadImage("phone/5a.png");
            gfthirdmessage4=sketch.loadImage("phone/6a.png");
        }
        
        sketch.setup=()=>{
            let canvas = sketch.createCanvas(window.innerWidth, window.innerHeight)
            canvas.parent("phonescene")
            sketch.background(0);
            sketch.image(phonenewmessage, 0,0,sketch.width, sketch.height);
        }

        sketch.draw=()=>{
            
            // sketch.image(firstmessage,100, 100, 700, 700)
        }

        sketch.mousePressed=()=>{
            let x=sketch.width/2 - 100;
            let y=sketch.height/2 - 50;
            if(numclicks==0){
                sketch.background(0);
                sketch.image(blankscreen, 0, 0, sketch.width, sketch.height);
                sketch.image(gffirstmessage, 550, 300, messagewidth/4, messageheight/4);
                sketch.image(firstmessageresponse1,x,y,messagewidth/4,messageheight/4);
                sketch.image(firstmessageresponse2,x,y + messageheight/4,messagewidth/4,messageheight/4);
                sketch.image(firstmessageresponse3,x,y + (messageheight/4)*2,messagewidth/4,messageheight/4);
            }else{
                    sketch.background(0);
                    sketch.image(blankscreen, 0, 0, sketch.width, sketch.height);
                    sketch.image(gffirstmessage, 0, 0, sketch.width, sketch.height);
                if(sketch.hover(x,y,messagewidth/4,messageheight/4)){
                    sketch.image(firstmessageresponse1,x,y,messagewidth/4,messageheight/4);
                }
                if(sketch.hover(x,y + messageheight/4,messagewidth/4,messageheight/4)){
                    sketch.image(firstmessageresponse2,x,y,messagewidth/4,messageheight/4);
                }
                if(sketch.hover(x,y + (messageheight/4)*2,messagewidth/4,messageheight/4)){
                    sketch.image(firstmessageresponse3,x,y,messagewidth/4,messageheight/4);
                }  
                // TODO : replace image w correct size and typing gif; change all clothing + convert clothing sketch to do what this does 
                sketch.image(gfsecondmessage1,0,y+messagewidth/4,sketch.width,sketch.height)
            }
            numclicks++
        }
        sketch.hover=(x,y,width,height)=>{
            if(sketch.mouseX>=x && sketch.mouseX<=x+width && sketch.mouseY>=y && sketch.mouseY<=y+height){
                return true
            }
            return false
        }
    }
    return new p5(scene)
}
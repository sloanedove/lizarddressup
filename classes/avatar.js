class avatar{
    constructor(sketch, img){
        this.sketch=sketch;
        this.clothes={
            //key:value
            shoes: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            bottom: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            top:{file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            dress: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            jacket: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
    

        };
        this.width=860;
        this.height=1500;
        this.pet=undefined;
        this.avatarimage=img;
        this.tattoos=[];
      
    }

    display(sketch,x,y,scale){
        sketch.push();
        sketch.translate(x,y);
        var scaledWidth=this.width/scale;
        var scaledHeight=this.height/scale;
        sketch.image(this.avatarimage, 0, 0, scaledWidth, scaledHeight);
        if(this.pet!=undefined){
            //position of pet
            // image(this.pet.fileName, x+width/2, y+height, 100, 100)
        }
        if (this.tattoos.length!=0){
            for(let i=0; i<this.tattoos.length; i++){
                image(this.tattoos[i],x,y,width,height);
            }
        }
        
        sketch.pop();   
    }
    displayClothing(sketch, x,y,scale){
        sketch.push();
        sketch.imageMode(sketch.CORNER);
        sketch.translate(x,y);
        var scaledWidth=this.width/scale;
        var scaledHeight=this.height/scale;
        Object.entries(this.clothes).forEach((clothingItem)=>{
            const [itemType, object] = clothingItem;
            // let file = clothingItem[1];
            
            if(object.file!=undefined){
                // image(object.loadedImage,object.x,object.y, object.width, object.height);
                sketch.push();
                var clothingX=0;
                var clothingY=0;
                if(itemType=="top" || itemType=="jacket"){
                    clothingX=scaledWidth/2.25 + 7;
                    clothingY=scaledHeight/2.25 + 13; 
                }else if(itemType=="bottom"){
                    clothingX=scaledWidth/2.25 - 30;
                    clothingY=scaledHeight/4*3;
                }else if(itemType=="dress"){
                    clothingX=scaledWidth/2 - 25;
                    clothingY=scaledHeight/2+ 50;
                }else if(itemType=="shoes"){
                    clothingX=scaledWidth/2-68;
                    clothingY=scaledHeight-62; 
                }
                sketch.imageMode(this.sketch.CENTER);
                sketch.image(object.loadedImage,clothingX,clothingY, object.width/1.1, object.height/1.1);
                sketch.pop();
                
            }
        })
        sketch.pop();
    }
}
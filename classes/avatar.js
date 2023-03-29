class avatar{
    constructor(sketch, img){
        this.sketch=sketch;
        this.clothes={
            //key:value
            top:{file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            bottom: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            shoes: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            jacket: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            dress: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},

        };
        this.width=860;
        this.height=1500;
        this.pet=undefined;
        this.image=img;
        this.tattoos=[];
      
    }

    display(x,y,scale){
        this.sketch.push();
        this.sketch.translate(x,y);
        var scaledWidth=this.width/scale;
        var scaledHeight=this.height/scale;
        this.sketch.image(this.image, 0, 0, scaledWidth, scaledHeight);
        if(this.pet!=undefined){
            //position of pet
            image(this.pet.fileName, x+width/2, y+height, 100, 100)
        }
        if (this.tattoos.length!=0){
            for(let i=0; i<this.tattoos.length; i++){
                image(this.tattoos[i],x,y,width,height);
            }
        }
        //TODO : adjust clothing size based on scale
        Object.entries(this.clothes).forEach((clothingItem)=>{
            const [itemType, object] = clothingItem;
            // let file = clothingItem[1];
            
            if(object.file!=undefined){
                // image(object.loadedImage,object.x,object.y, object.width, object.height);
                this.sketch.push();
                var clothingX=0;
                var clothingY=0;
                if(itemType=="top" || itemType=="jacket"){
                    clothingX=scaledWidth/2.25 + 5;
                    clothingY=scaledHeight/2.25 + 6; 
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
                this.sketch.imageMode(this.sketch.CENTER);
                this.sketch.image(object.loadedImage,clothingX,clothingY, object.width/(scale * 3), object.height/(scale * 3));
                this.sketch.pop();
                
            }
        })
        this.sketch.pop();   
    }
}
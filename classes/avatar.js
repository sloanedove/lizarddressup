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
            accessory: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},

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
                var w=0;
                var h=0;

                //tops

                if(object.file=="clothing/tops/top1.png"){
                    clothingX=80;
                    clothingY=190;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top2.png"){
                    clothingX=100;
                    clothingY=209;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top3.png"){
                    clothingX=102;
                    clothingY=200;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top4.png"){
                    clothingX=94;
                    clothingY=192;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top5.png"){
                    clothingX=80;
                    clothingY=188;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top6.png"){
                    clothingX=77;
                    clothingY=194;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top7.png"){
                    clothingX=65;
                    clothingY=192;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top8.png"){
                    clothingX=69;
                    clothingY=197;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top10.png"){
                    clothingX=103;
                    clothingY=199;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/tops/top9.png"){
                    clothingX=74;
                    clothingY=197;
                    w=object.width;
                    h=object.height;
                }

                //bottoms

                if(object.file=="clothing/bottoms/bottom1.png"){
                    clothingX=72;
                    clothingY=288;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom2.png"){
                    clothingX=7;
                    clothingY=288;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom3.png"){
                    clothingX=45;
                    clothingY=292;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom4.png"){
                    clothingX=38;
                    clothingY=292;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom5.png"){
                    clothingX=49;
                    clothingY=295;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom6.png"){
                    clothingX=63;
                    clothingY=295;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom7.png"){
                    clothingX=35;
                    clothingY=303;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom8.png"){
                    clothingX=63;
                    clothingY=300;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom10.png"){
                    clothingX=43;
                    clothingY=307;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom9.png"){
                    clothingX=25;
                    clothingY=303;
                    w=object.width;
                    h=object.height;
                }
                if(object.file=="clothing/bottoms/bottom11.png"){
                    clothingX=68;
                    clothingY=306;
                    w=object.width;
                    h=object.height;
                }



                // if(itemType=="top" || itemType=="jacket"){
                //     clothingX=scaledWidth/2.25 + 7;
                //     clothingY=scaledHeight/2.25 + 13; 
                // }else if(itemType=="bottom"){
                //     clothingX=scaledWidth/2.25 - 30;
                //     clothingY=scaledHeight/4*3;
                // }else if(itemType=="dress"){
                //     clothingX=scaledWidth/2 - 25;
                //     clothingY=scaledHeight/2+ 50;
                // }else if(itemType=="shoes"){
                //     clothingX=scaledWidth/2-68;
                //     clothingY=scaledHeight-62; 
                // }
               
                sketch.image(object.loadedImage,clothingX,clothingY, w, h);
                sketch.pop();
                
            }
        })
        sketch.pop();
    }
}
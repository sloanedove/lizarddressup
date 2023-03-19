class avatar{
    constructor(img){
        this.clothes={
            //key:value
            top:{file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            bottom: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            shoes: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            jacket: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},
            dress: {file:undefined, x:undefined,y:undefined, width: undefined, height: undefined, loadedImage: undefined},

        };
        this.pet=undefined;
        this.image=img;
        this.tattoos=[];
      
    }
    // TODO : update clothing location per screen based on lizard location

    display(x,y,width,height){
        image(this.image, x, y, width, height);
        if(this.pet!=undefined){
            //position of pet
            image(this.pet.fileName, x+width/2, y+height, 100, 100)
        }
        if (this.tattoos.length!=0){
            for(let i=0; i<this.tattoos.length; i++){
                image(this.tattoos[i],x,y,width,height);
            }
        }
        Object.entries(this.clothes).forEach((clothingItem)=>{
            const [itemType, object] = clothingItem;
            // let file = clothingItem[1];
            
            if(object.file!=undefined){
                image(object.loadedImage,object.x,object.y, object.width, object.height);
                console.log(clothingItem);
                push();
                fill(color(255,0,0));
                ellipse(object.x, object.y,50)
                pop();
            }
        })
        
    }
}
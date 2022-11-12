class avatar{
    constructor(img){
        this.clothesArray=[];
        this.pet=undefined;
        this.image=img;
        this.tattoos=[];
    }
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
        
    }
}
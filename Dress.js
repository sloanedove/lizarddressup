class Dress{
constructor(x,y, fileName){
    this.x= x;
    this.y= y;
    this.fileName=fileName;
    this.width=100;
    this.height=500;
}
intersect(){
    var d=dist(this.x, this.y, mouseX,mouseY);
    return d<this.width;
}
}
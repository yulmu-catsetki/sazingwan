class colorPalette{
  constructor(x,y,c){
    this.x = x;
    this.y = y;
    this.color = c;
    this.size = 40;
  }
  
  display(){
    fill(this.color);
    rectMode(CORNER);
    rect(this.x,this.y,this.size,this.size);
  }
  
  isOver(){
    if(mouseX>this.x&&mouseX<this.x+this.size&&mouseY>this.y&&mouseY<this.y+this.size){
      return true;
    }else{
      return false;
    }
  }
  
  returnColor(){
    return this.color;
  }
  
  changeColor(){
    this.color = color(random(255),random(255),random(255));
  }
  
  
}
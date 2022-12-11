class photo{
  constructor(img){
    this.img = img;
    this.x = random(150,900);
    this.y = random(103,400);
  }
  display(){
    image(this.img,this.x,this.y,200,140);
  }
  
  activate(){
    if(mouseX>this.x&&mouseX<this.x+200&&mouseY>this.y&&mouseY<this.y+140){
      this.x = mouseX-100;
      this.y= mouseY-70;
      return true;
    }
    return false;
  }
}
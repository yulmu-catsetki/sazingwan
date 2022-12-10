class photo{
  constructor(img){
    this.img = img;
    this.x = random(150,900);
    this.y = random(103,400);
  }
  display(){
    image(this.img,this.x,this.y,200,140);
  }
}
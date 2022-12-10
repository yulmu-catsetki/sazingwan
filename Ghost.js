class Ghost{
  constructor(basic,talking){
    this.basic_img = basic;
    this.talking_img = talking;
    this.active = false;
  }
  
  
  display(k){
    if(this.active){
      image(this.talking_img[k%this.basic_img.length],0,0);
    }else{
      image(this.basic_img[k%this.basic_img.length],0,0);
    }
  }
  
  starttalking(){
    this.active = true;
  }
  stoptalking(){
    this.active = false;
  }
  
  
}
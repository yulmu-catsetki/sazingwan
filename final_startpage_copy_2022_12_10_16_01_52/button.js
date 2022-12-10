class button{
  constructor(a,b){
    this.true_img = a;
    this.false_img = b;
    this.curr_img = b;
    this.active = false;
  }
  
  mouseOver(i){
    this.curr_img = this.true_img[i%(this.true_img.length)];
  }
  mouseNotOver(){
    this.curr_img =this.false_img;
  }
  display(){
    if(this.active){
       this.curr_img = this.true_img[i%(this.true_img.length)];
    }
    image(this.curr_img,0,0);
  
    
  }
  buttonSelected(){
    this.active = true;
  }
  buttonDeselected(){
    this.active = false;
  }
  
  returnActive(){
    return this.active;
  }
  
  
}
//intro assets
let intro_ghosts = [];
let introbackground;
let total_image_num = 20;
let Ghost1 = [];
let Ghost1_talk = [];
let Ghost2 = [];
let Ghost2_talk = [];
let Ghost3 = [];
let Ghost3_talk = [];
let Ghost4 = [];
let Ghost4_talk = [];
let talk_box;
let all_clear =false;
//main screen assets
let button_sound;
let camera_sound;

let qrImg;
let qr;
let forQRurl;
let tagDiv;

let background00 = [];
let background_christmas = [];
let browseMask_false;
let browseMask_true = [];
let dialogue_false;
let dialogue_true = [];
let drawMask_false;
let drawMask_true = [];
let gallery_false;
let gallery_true = [];
let home_true = [];
let home_false;
let music_mainScreen;
let music_nextScreen;
let music_ending;
let rightArrow_true = [];
let rightArrow_false;
let leftArrow_true = [];
let leftArrow_false;
let eraser_cursor;
let brush_cursor;
let background01;

let database;
let storage;

let Dice_false;
let Dice_true = [];
let brush_true = [];
let brush_false;
let eraser_true = [];
let eraser_false;
let drawDone_true = [];
let drawDone_false;
let drawMask_help_true = [];
let drawMask_help_false;

let checkDone_false;
let checkDone_true = [];
let checkNotDone_false;
let checkNotDone_true = [];

let faceapi;
let detections = [];
let video;
let mycanvas;
let drawings;
let facefilter = [];
let colors = [];
let delay0;

let ghost_takePhoto ;
let saveGallery_true =[];
let saveGallery_false;
let download_true =[];
let download_false;

let gallery_background;
let gallery_light = [];
let galleryPhotos = [];


let basicFont; 
let picturenum =0;
let select_picturenum = 0;
let raw_photos = [];
let on_photos =[];
let photos_selected =[];
let final_photos = [];
let photoindex=0;

let right_false;
let right_true =[];
let left_false;
let left_true =[];

let sure_false;
let sure_true=[];
let no_false;
let no_true =[];
let togallery_popup;

let frames =[];
let framesback =['#c9bfd8','#6c7d45','#6a92b5','#f8d9ae'];
let fromDrawing = false;
let explains =[];
let ghost1_bubble;
let ghost1_chats =['안녕!\n 인생사진관에 온 걸 환영해.\n자세한 설명이 듣고 싶으면\n나를 눌러줘.','음...\n일단 내 친구 정이가\n다양한 필터를\n써볼 수 있게 해줄 거야','다른 친구 뭉이는\n직접 너만의 필터를\n그리는 걸 도와줄 거고!\n솜씨를 뽐내봐!','갤러리에 가면\n우리가 준비한\n명예의 전당이 있어!\n종강에 성공한 자!','\n내 설명은 여기서 끝이야!\n하핫','\n지금부터는\n그냥 멋진 대사를 칠 거야!\n','중요한 건,\n과제전을 향한\n"꺾이지 않는 마음"\n이라구\n','싸늘하다.\n가슴에 비수가 날아와 꽂힌다.\n하지만 괜찮다.\n이제 종강이니까.','\n이거 다 그리면\n우리 종강하는 거다','\n이거 과제전하기\n딱 좋은 날씨네...','신에게는\n아직...\n3명의 팀플 동료가\n남아 있습니다','\n개강은\n돌아오는거야~~~','꼭 그렇게..\n늦게 종강해야만..\n속이 후련하셨나요\n교수님들..?','\n어찌,\n내가 A+을 받을 상인가?','뭐야...\n아직도 내 이야기가\n궁금한 거야??!\nㅎㅎ','그렇다면 내가\n비밀 하나 얘기해 줄게\n너만 아는 거다?\n다른데 얘기하면 곤란해!','화이트 크리스마스\n기대되지 않아?\n눈이 왔으면 좋겠어!\n펑펑!'];

let facedetect;
let facedetectReady;
let facedetectOn;
let videoOn;

let qrpresent;
let savecomplete_false;
let savecomplete_true =[];
let ending_ghosts=[];

//이스터에그용
const SNOWFLAKES_PER_LAYER = 200;
const MAX_SIZE = 7;
const GRAVITY = 0.45;
const LAYER_COUNT = 5;
let music_mainScreen_christmas;
const WIND_SPEED = 1;
const WIND_CHANGE = 0.0025;
let easteregg = false;
const SNOWFLAKES = [];

function preload() {
  music_mainScreen_christmas = loadSound("assets/christmas/music_mainScreen_christmas.m4a");
  music_mainScreen = loadSound("assets/music_mainScreen.mp3");
  music_nextScreen = loadSound("assets/music_nextScreen.mp3");
  music_ending = loadSound("assets/ending/music_ending.mp3");
  button_sound = loadSound("assets/button_click.wav");
  camera_sound = loadSound("assets/camera.mp3");
  for (let i = 1; i <= 6; i++) {
    let array1 = ["assets/Intro/Intro-", i, ".png"];
    imgName = join(array1, "");
    intro_ghosts[i - 1] = loadImage(imgName);
  }
  introbackground = loadImage("assets/Intro/Intro.png");

  gallery_background = loadImage("assets/gallery/gallery_background.png");
  gallery_light[0] = loadImage("assets/gallery/gallery_light1.png");
  gallery_light[1] = loadImage("assets/gallery/gallery_light2.png");
  gallery_light[2] = loadImage("assets/gallery/gallery_light3.png");
  explains[0] = loadImage("assets/explain_1.png");
  explains[1] = loadImage("assets/explain_2.png");
  explains[2] = loadImage("assets/explain_3.png");
  ghost1_bubble = loadImage("assets/ghost1_bubble.png");
  
  ghost_takePhoto =loadImage("assets/ghost_takePhoto.png");
  saveGallery_true[0] =loadImage("assets/saveGallery_true.png");
  saveGallery_false=loadImage("assets/saveGallery_false.png");
  
  saveGallery = new button(saveGallery_true,saveGallery_false);
  
  download_true[0]=loadImage("assets/download_true.png");
  download_false=loadImage("assets/download_false.png");
  download = new button(download_true,download_false);
  
  for(let i=1;i<=4;i++){
    let array1 = ["assets/frame/frame", i, "_top.png"];
    imgName = join(array1, "");
    frames[i - 1] = loadImage(imgName);
  }
  
  for (let i = 1; i <= 6; i++) {
    let array1 = ["assets/Intro/Ghost1-", i, ".png"];
    imgName = join(array1, "");
    Ghost1[i - 1] = loadImage(imgName);
    array1 = ["assets/Intro/Ghost1_talk-", i, ".png"];
    imgName = join(array1, "");
    Ghost1_talk[i - 1] = loadImage(imgName);

    array1 = ["assets/Intro/Ghost2-", i, ".png"];
    imgName = join(array1, "");
    Ghost2[i - 1] = loadImage(imgName);
    array1 = ["assets/Intro/Ghost2_talk-", i, ".png"];
    imgName = join(array1, "");
    Ghost2_talk[i - 1] = loadImage(imgName);

    array1 = ["assets/Intro/Ghost3-", i, ".png"];
    imgName = join(array1, "");
    Ghost3[i - 1] = loadImage(imgName);
    array1 = ["assets/Intro/Ghost3_talk-", i, ".png"];
    imgName = join(array1, "");
    Ghost3_talk[i - 1] = loadImage(imgName);

    array1 = ["assets/Intro/Ghost4-", i, ".png"];
    imgName = join(array1, "");
    Ghost4[i - 1] = loadImage(imgName);
    array1 = ["assets/Intro/Ghost4_talk-", i, ".png"];
    imgName = join(array1, "");
    Ghost4_talk[i - 1] = loadImage(imgName);
  }
  ghost1 = new Ghost(Ghost1, Ghost1_talk);
  ghost2 = new Ghost(Ghost2, Ghost2_talk);
  ghost3 = new Ghost(Ghost3, Ghost3_talk);
  ghost4 = new Ghost(Ghost4, Ghost4_talk);

  talk_box = loadImage("assets/Intro/talk_box.png");

  for (let i = 1; i <= 9; i++) {
    let array1 = ["assets/filter/00", i, ".png"];
    imgName = join(array1, "");
    facefilter[i - 1] = loadImage(imgName);
  }
  
  for(let i=10;i<=21;i++){
    let array1 = ["assets/filter/0", i, ".png"];
    imgName = join(array1, "");
    facefilter[i - 1] = loadImage(imgName);
  }
  
  
  for (let i = 1; i <= 7; i++) {
    let array1 = ["assets/background00-", i, ".png"];
    imgName = join(array1, "");
    background00[i - 1] = loadImage(imgName);
    let array2 = ["assets/christmas/background_christmas-", i, ".png"];
    imgName = join(array2, "");
    
    background_christmas[i - 1] = loadImage(imgName);
  }
  browseMask_false = loadImage("assets/browseMask_false.png");
  for (let i = 1; i <= 4; i++) {
    let array1 = ["assets/browseMask_true-", i, ".png"];
    imgName = join(array1, "");
    browseMask_true[i - 1] = loadImage(imgName);
  }
  browseMask = new button(browseMask_true, browseMask_false);

  dialogue_false = loadImage("assets/dialogue_false.png");
  for (let i = 1; i <= 4; i++) {
    let array1 = ["assets/dialogue_true-", i, ".png"];
    imgName = join(array1, "");
    dialogue_true[i - 1] = loadImage(imgName);
  }
  dialogue = new button(dialogue_true, dialogue_false);

  drawMask_false = loadImage("assets/drawMask_false.png");
  for (let i = 1; i <= 4; i++) {
    let array1 = ["assets/drawMask_true-", i, ".png"];
    imgName = join(array1, "");
    drawMask_true[i - 1] = loadImage(imgName);
  }
  drawMask = new button(drawMask_true, drawMask_false);

  gallery_false = loadImage("assets/gallery_false.png");
  gallery_true[0] = loadImage("assets/gallery_true.png");
  gallery = new button(gallery_true, gallery_false);

  home_true[0] = loadImage("assets/home_true.png");
  home_false = loadImage("assets/home_false.png");
  home = new button(home_true, home_false);

  leftArrow_false = loadImage("assets/leftArrow_false.png");
  leftArrow_true[0] = loadImage("assets/leftArrow_true.png");
  leftArrow = new button(leftArrow_true, leftArrow_false);

  rightArrow_false = loadImage("assets/rightArrow_false.png");
  rightArrow_true[0] = loadImage("assets/rightArrow_true.png");
  rightArrow = new button(rightArrow_true, rightArrow_false);

  background01 = loadImage("assets/background01.png");
  brush_cursor = loadImage("assets/brush_cursor.png");
  eraser_cursor = loadImage("assets/eraser_cursor.png");

  brush_false = loadImage("assets/brush_false.png");
  brush_true[0] = loadImage("assets/brush_true.png");
  brush = new button(brush_true, brush_false);
  brush.buttonSelected();
  eraser_false = loadImage("assets/eraser_false.png");
  eraser_true[0] = loadImage("assets/eraser_true.png");
  eraser = new button(eraser_true, eraser_false);
  drawDone_false = loadImage("assets/drawDone_false.png");
  drawDone_true[0] = loadImage("assets/drawDone_true.png");
  drawDone = new button(drawDone_true, drawDone_false);

  checkDone_false = loadImage("assets/checkDone_false.png");
  checkDone_true[0] = loadImage("assets/checkDone_true.png");
  checkDone = new button(checkDone_true, checkDone_false);

  checkNotDone_false = loadImage("assets/checkNotDone_false.png");
  checkNotDone_true[0] = loadImage("assets/checkNotDone_true.png");
  checkNotDone = new button(checkNotDone_true, checkNotDone_false);

  right_false = loadImage("assets/right_false.png");
  right_true[0] = loadImage("assets/right_true.png");
  right = new button(right_true, right_false);
  
  left_false = loadImage("assets/left_false.png");
  left_true[0] = loadImage("assets/left_true.png");
  left = new button(left_true, left_false);
  
  sure_false = loadImage("assets/sure_false.png");
  sure_true[0] = loadImage("assets/sure_true.png");
  sure = new button(sure_true, sure_false);
  
  no_false = loadImage("assets/no_false.png");
  no_true[0] = loadImage("assets/no_true.png");
  no = new button(no_true, no_false);

  togallery_popup = loadImage("assets/togallery_popup.png");;
  
  for (let i = 2; i <= 17; i++) {
    let array1 = ["assets/Dice-", i, ".png"];
    imgName = join(array1, "");
    Dice_true[i - 2] = loadImage(imgName);
  }
  Dice_false = loadImage("assets/Dice-1.png");
  Dice = new button(Dice_true, Dice_false);

  for (let i = 1; i <= 4; i++) {
    let array1 = ["assets/drawMask_help_true-", i, ".png"];
    imgName = join(array1, "");
    drawMask_help_true[i - 1] = loadImage(imgName);
    
    let array2 = ["assets/ending/ending_ghosts-", i, ".png"];
    imgName = join(array2, "");
    ending_ghosts[i - 1] = loadImage(imgName);
    
    
  }
  drawMask_help_false = loadImage("assets/drawMask_help_false.png");
  drawMask_help = new button(drawMask_help_true, drawMask_help_false);
  
  qrpresent = loadImage("assets/ending/qrpresent.png");
  savecomplete_false = loadImage("assets/ending/savecomplete_false.png");
  savecomplete_true[0] = loadImage("assets/ending/savecomplete_true.png");
  savecomplete = new button(savecomplete_true, savecomplete_false);
  
  
  basicFont = loadFont('assets/DX가을동화Md.ttf');
  
  video = createCapture(VIDEO);
  video.size(800, 600);
  video.hide();

  facedetectReady= false;
  facedetectOn =false;
  videoOn = false;
  //faceapi = ml5.faceApi(video, faceOptions, faceReady);
 const faceOptions = {
    withLandmarks: true,
    withExpressions: false,
    withDescriptors: false,
    minConfidence: 0.5,
   
  };
    faceapi = ml5.faceApi(video, faceOptions, faceReady);
    faceapi.detect(gotFaces);
   
}


p5.disableFriendlyErrors = true;

function setup() {
  
  tagDiv = createDiv();
  // position it:
  tagDiv.position(430, 245);
  slider = createSlider(1, 50, 8);
  slider.remove();
  mycanvas = createCanvas(1280, 720);

  musicPlay();
  drawings = createGraphics(height, height);
  finalphoto = createGraphics(1000,700);
  finalphoto_fordownload = createGraphics(1000,700);
  for(let i=0;i<8;i++){
    raw_photos[i] = createGraphics(800,600);
    on_photos[i] = false;
    photos_selected[i] = false;
  }

  //colors
  for (let j = 0; j < 10; j++) {
    colors[j] = new colorPalette(
      10,
      50 * j + 110,
      color(random(255), random(255), random(255))
    );
  }
  
  REStart = createButton('');
  
  skip = createButton('NEXT');
  skip.size(100,40);
  skip.hide();
  for (let l = 0; l < LAYER_COUNT; l++) {
    SNOWFLAKES.push([]);
    for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
      SNOWFLAKES[l].push({
        x: random(width),
        y: random(height),
        mass: random(0.75, 1.25),
        l: l + 1
      });
    }
}
  var config = {
  apiKey: "AIzaSyAZ60wxUtci6ZvctVY0BZy4Smc_71B_WtM",
  authDomain: "sazingwan-ad11e.firebaseapp.com",
  projectId: "sazingwan-ad11e",
  storageBucket: "sazingwan-ad11e.appspot.com",
  databaseURL : "https://sazingwan-ad11e-default-rtdb.firebaseio.com/",
  messagingSenderId: "1077861169840",
  appId: "1:1077861169840:web:a82346389c9d99670a5975",
  measurementId: "G-SP0S9C7J92",
  storageURL : "gs://sazingwan-ad11e.appspot.com"
};

   firebase.initializeApp(config); 
  console.log(firebase);
  database = firebase.database();
  storage = firebase.storage();
  
 

}


function turnOnCapture() {
  console.log("video on");
  videoOn = true;
}

function turnOffCapture() {
  console.log("video off");
  videoOn = false;
}

function turnOnFaceDetect() {
  if (!facedetectReady) {
    facedetectReady = true;
    const faceOptions = {
    withLandmarks: true,
    withExpressions: false,
    withDescriptors: false,
    minConfidence: 0.5,
   
  };
    faceapi = ml5.faceApi(video, faceOptions, faceReady);
    faceapi.detect(gotFaces);
   
  }
}

function turnOffFaceDetect() {
  if (facedetectOn) {
    faceapi.video = undefined;
    facedetectReady = false;
    facedetectOn = false;
  }
}

let intro = true;
let x1 = 0;
let x2 = -1280;

let intro_animation = false;
let curr_line =0;


let mainScreen = false;
let mode = 0;
let browseMaskPage = false;
let drawMaskPage = false;
let galleryPage = false;
let checkMaskPage = false;
let takePhotoPage = false;
let selectPhotoPage = false;
let selectFramePage = false;
let saveGalleryPopup = false;
let sharePhotoPage = false;
let ending = false;


let goIntro_animation = false;
let goCheckMask = false;
let gohome = false;
let goDrawMask = false;
let goPhoto = false;
let goShare = false;
let showPOPUP =false;
let goEnding = false; 

let back_framenum = 0;
let i = 0;
let facefilterNum =0 ;
let brushMode = 0;
let browseMaskPage_mode = 0;
let drawstart = 0;
let frameNum = 0;
let selectFramePage_mode = 0;
let answer = 0;
let curr_brush_color ="#000000";
let chatnum=0;
function draw() {
  fullscreen();
  REStart.mouseClicked(fromStart);
  background(color("#E1F4FB"));
  musicPlay();
  textFont(basicFont);
  if (intro) {
    turnOffFaceDetect();
    i++;
    cursor();
    if (i % 10 == 0) {
      back_framenum++;
    }
    image(intro_ghosts[back_framenum % intro_ghosts.length], 0, 0);
    image(introbackground, x1, 0);
    image(introbackground, x2, 0);
    x1 += 1;
    x2 += 1;

    if (x1 > width) {
      x1 = -width;
    }
    if (x2 > width) {
      x2 = -width;
    }
    noStroke();

    if (dist(mouseX, mouseY, width / 2, height / 2 - 30) < 75) {
      fill("#405381");
      circle(width / 2, height / 2 - 30, 150);
      fill(255);
      triangle(
        width / 2 - 30,
        height / 2,
        width / 2 - 30,
        height / 2 - 60,
        width / 2 + 40,
        height / 2 - 30
      );
      goIntro_animation = true;
    } else {
      fill(255);
      circle(width / 2, height / 2 - 30, 150);
      fill("#405381");
      triangle(
        width / 2 - 30,
        height / 2,
        width / 2 - 30,
        height / 2 - 60,
        width / 2 + 40,
        height / 2 - 30
      );
      goIntro_animation = false;
    }
  }
  if (intro_animation) {
    i++;
    cursor();
    if (i % 6 == 0) {
      back_framenum++;
    }
    noStroke();
    ghost1.display(back_framenum);
    ghost2.display(back_framenum);
    ghost3.display(back_framenum);
    ghost4.display(back_framenum);

    image(talk_box, 0, 0);
    textAlign(LEFT,TOP);
    if (back_framenum >= 6 && back_framenum < 18) {
      ghost1.starttalking();
      textSize(32);
      fill("#FF884F");
      text("새로운 사람이다!!", 150, 550);
    }
    if (back_framenum == 18) {
      ghost1.stoptalking();
    }
    if (back_framenum >=18  && back_framenum < 30) {
      ghost2.starttalking();
      fill("#DD6696");
      text("...안녕", 150, 550);
    }

    if (back_framenum == 30) {
      ghost2.stoptalking();
    }

    if (back_framenum >= 30 && back_framenum < 42) {
      ghost3.starttalking();
      fill("#6368D8");
      text("수집 가치가 있어 보이는군.", 150, 550);
    }

    if (back_framenum == 42) {
      ghost3.stoptalking();
    }

    if (back_framenum >= 42 && back_framenum < 54) {
      ghost4.starttalking();
      ghost3.stoptalking();
      fill("#367A38");
      text("반가워~ 헤헤...", 150, 550);
    }
  
    if (back_framenum >= 54) {
      ghost4.stoptalking();
      skip.position(1070,600);
      skip.size(100,40);
      skip.style("font-family",basicFont);
      skip.style("font-size","20px");
      skip.style('color', '#ffffff');
      skip.style('background-color', '#315388');
      skip.show();
    }
    
    skip.mouseClicked(addline);
    
    
    switch(curr_line){
      case 1:
        ghost2.starttalking();
        fill("#DD6696");
        text("우린 종강의 정령들이야. 매년 종강까지 \n잘 버틴 용감한 학생들을 촬영해서 \n과제의 전당에 올리는 역할을 하고 있지.",150, 520);
        break;
        
      case 2:
        ghost2.stoptalking();
        ghost3.starttalking();
        fill("#6368D8");
        text("매 학기, 가장 마음의 여유가 있을 때, \n각자 제일 빛나는 자기다운 모습을 남겨주기 위한\n'인생사진관'이랍니다.",150,520);
        break;
        
      case 3:
        ghost3.stoptalking();
        ghost1.starttalking();
        fill("#FF884F");
        text("그냥 사진이 아니야!!! \n필터를 자유롭게 그려서 가장 너다운 모습을 남길 수 있다고! \n세상에 하나뿐인 네 모습을 찍어봐!",150,520);
        break;
      
      case 4:
        ghost1.stoptalking();
        ghost4.starttalking();
        fill("#367A38");
        text("좋아~ \n이제 우리랑 인생사진관으로 가보자\n하암...",150,520);
        break;
      case 5:
        intro_animation = false;
        mainScreen = true;
        skip.hide();
    }
   
  }
  if (mainScreen) {
    skip.hide();
    drawstart = 0;
    i++;
    cursor();
    if (i % 8 == 0) {
      back_framenum++;
    }
    if(easteregg){
      background(color("#4F7C8C"));
      image(background_christmas[back_framenum % 7], 0, 0); // 타이틀 화면
    }else{
      image(background00[back_framenum % 7], 0, 0); // 타이틀 화면
    }
    
    mode = 0;

    if (mouseX > 290 && mouseX < 420 && mouseY > 85 && mouseY < 235) {
      browseMask.mouseOver(back_framenum);
      mode = 1;
    } else {
      browseMask.mouseNotOver();
    }
    if (mouseX > 385 && mouseX < 475 && mouseY > 560 && mouseY < 650) {
      drawMask.mouseOver(back_framenum);
      mode = 2;
    } else {
      drawMask.mouseNotOver();
    }
    if (mouseX > 905 && mouseX < 955 && mouseY > 495 && mouseY < 600) {
      mode =4;
      dialogue.mouseOver(back_framenum);
    } else {
      dialogue.mouseNotOver();
    }
    if (mouseX > 690 && mouseX < 830 && mouseY > 530 && mouseY < 600) {
      gallery.mouseOver(back_framenum);
      mode = 3;
    } else {
      gallery.mouseNotOver();
    }

    browseMask.display(); // 각각의 버튼이 보이게 함
    
    drawMask.display();
    gallery.display();
    if(chatnum%ghost1_chats.length==1){
      image(explains[0],0,0);
    }
    if(chatnum%ghost1_chats.length==2){
      image(explains[1],0,0);
    }
    if(chatnum%ghost1_chats.length==3){
      image(explains[2],0,0);
    }
    dialogue.display();
    image(ghost1_bubble,0,0);
    textAlign(CENTER,BASELINE);
    textSize(30);
    fill("#405381");
    text(ghost1_chats[chatnum%ghost1_chats.length],1065,180);
    if(chatnum>16){
      easteregg = true;
      
    }
    if(easteregg){
       letitSnow();
    }
    
    
    
  }
  if (!mainScreen && !intro) {
    translate(0, 0);
    push();
    home.display();
    if (mouseX < 90 && mouseX > 10 && mouseY > 10 && mouseY < 80) {
      home.mouseOver(0);
      gohome = true;
    } else {
      home.mouseNotOver();
      gohome = false;
    }
    pop();
  }
  if (browseMaskPage) {
    translate(0, 0);
    push();
    goPhoto=false;
     array1 = [facefilterNum % facefilter.length+1,'/',facefilter.length];
    let filter_situation = join(array1, "");
    textAlign(CENTER, CENTER);
    textSize(40);
    fill("#405381");
    text(filter_situation,1120,50);
    
    
    browseMaskPage_mode = 0;
    rightArrow.display();
    leftArrow.display();
    checkDone.display();
    if (mouseX < 220 && mouseX > 160 && mouseY > 310 && mouseY < 400) {
      leftArrow.mouseOver(0);
      browseMaskPage_mode = 1;
    } else {
      leftArrow.mouseNotOver();
    }
    if (mouseX < 1120 && mouseX > 1060 && mouseY > 310 && mouseY < 400) {
      rightArrow.mouseOver(0);
      browseMaskPage_mode = 2;
    } else {
      rightArrow.mouseNotOver();
    }
    if (mouseX > 1130 && mouseX < 1260 && mouseY > 600 && mouseY < 695) {
      checkDone.mouseOver(0);
      goPhoto = true;
      fromDrawing = false;
    } else {
      checkDone.mouseNotOver();
    }
    pop();

    translate(
      (width - video.width) / 2 + video.width,
      (height - video.height) / 2
    );
    scale(-1, 1);
    push();
    
    image(video, 0, 0, video.width, video.height);
    scale(-1,1);
    if (detections) {
      if (detections.length > 0) {
        for (let j = 0; j < detections.length; j++) {
          let points = detections[j].landmarks.positions;
          //for (let i = 0; i < points.length; i++) {
          //stroke(0, 0, 255);
          //strokeWeight(8);
          //point(-points[i]._x, points[i]._y);
          //}
          imageMode(CENTER);
          
          push();
          
          translate(- points[33]._x,points[33]._y )
          rotate(atan2(points[0]._y-points[16]._y,-points[0]._x+ points[16]._x));
          
          image(facefilter[facefilterNum % facefilter.length],0,-dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)/6,dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)*2,dist(points[33]._x,points[33]._y,points[8]._x,points[8]._y)*4.8);
          
          
          pop();
          imageMode(CORNER);
         
        }
      }
    }

    pop();
  }
  if (drawMaskPage) {
    noCursor();
    drawstart++;
    goCheckMask = false;
    image(background01, 0, 0, width, height);
    image(drawings, 280, 0);
    i++;
    if (i % 8 == 0) {
      back_framenum++;
    }
    textAlign(CENTER, TOP);
    textSize(22);
    
    

    if (mouseX > 104 && mouseX < 150 && mouseY > 90 && mouseY < 138) {
      Dice.mouseOver(back_framenum);
      if (mouseIsPressed) {
        for (let j = 0; j < colors.length; j++) {
          colors[j].changeColor();
        }
      }
    } else {
      fill("#405381");
      text("색이 마음에 안 들면\n주사위를 눌러...",145,175);
      Dice.mouseNotOver();
    }
    if (mouseX > 135 && mouseX < 175 && mouseY > 596 && mouseY < 720) {
      brush.mouseOver(0);
      if (mouseIsPressed) {
        brushMode = 0;
        brush.buttonSelected();
        eraser.buttonDeselected();
      }
    } else {
      fill("#405381");
      text("붓",155,540);
      brush.mouseNotOver();
    }
    if (mouseX > 190 && mouseX < 252 && mouseY > 595 && mouseY < 720) {
      eraser.mouseOver(0);
      if (mouseIsPressed) {
        eraser.buttonSelected();
        brush.buttonDeselected();
        brushMode = 1;
      }
    } else {
      fill("#405381");
      text("지우개",223,560);
      eraser.mouseNotOver();
    }
    if (mouseX > 1044 && mouseX < 1252 && mouseY > 608 && mouseY < 686) {
      drawDone.mouseOver(0);
      goCheckMask = true;
    } else {
      drawDone.mouseNotOver();
    }
    if (mouseX > 1128 && mouseX < 1280 && mouseY > 35 && mouseY < 188) {
      drawMask_help.mouseOver(back_framenum);
    } else {
      drawMask_help.mouseNotOver();
    }
    
    fill("#405381");
    text("크기\n조절",170,330);
    text("다 지우고 싶으면\n'스페이스바'를\n누르렴",1150,300);
    
    if(brushMode == 0){
      fill(curr_brush_color);
    ellipse(170,420,slider.value()+5,slider.value()+5);
    }else{
      fill(255);
      ellipse(170,420,slider.value()+5,slider.value()+5);
    }
  
    
    let brushsize = slider.value();
    if (mouseIsPressed) {
      if (drawstart > 50 && brushMode == 0) {
        
        drawings.noErase();
        drawings.strokeWeight(brushsize);
        drawings.stroke(curr_brush_color);
        drawings.line(mouseX - 280, mouseY, pmouseX - 280, pmouseY);
      }

      if (brushMode == 1) {
        
        drawings.erase();
        drawings.strokeWeight(brushsize);
        drawings.line(mouseX - 280, mouseY, pmouseX - 280, pmouseY);
      }

    }

    for (let j = 0; j < 10; j++) {
      colors[j].display();
    }
    Dice.display();
    drawDone.display();
    eraser.display();
    brush.display();
    drawMask_help.display();
    if (brushMode == 0) {
      image(brush_cursor, mouseX, mouseY, 100, 100);
      fill(curr_brush_color);
      triangle(mouseX-1,mouseY-1,mouseX+8,mouseY+20,mouseX+20,mouseY+7);
    } else {
      image(eraser_cursor, mouseX - 20, mouseY - 20, 100, 100);
    }
  }
  if (checkMaskPage) {
    cursor();
    
    goDrawMask = false;
    goPhoto = false;

    translate(0, 0);
    push();
    checkDone.display();
    checkNotDone.display();
    if (mouseX > 40 && mouseX < 170 && mouseY > 600 && mouseY < 695) {
      checkNotDone.mouseOver(0);
      goDrawMask = true;
    } else {
      checkNotDone.mouseNotOver();
    }
    if (mouseX > 1130 && mouseX < 1260 && mouseY > 600 && mouseY < 695) {
      checkDone.mouseOver(0);
      goPhoto = true;
      fromDrawing = true;
    } else {
      checkDone.mouseNotOver();
    }

    pop();
    
    translate(
      (width - video.width) / 2 + video.width,
      (height - video.height) / 2
    );
    scale(-1, 1);
    push();
    
    image(video, 0, 0, video.width, video.height);
    scale(-1,1);
    
    if (detections) {
      if (detections.length > 0) {
        for (let j = 0; j < detections.length; j++) {
          let points = detections[j].landmarks.positions;
          imageMode(CENTER);
          push();
          
          translate(- points[33]._x,points[33]._y)
          rotate(atan2(points[0]._y-points[16]._y,-points[0]._x+ points[16]._x));
          image(drawings,0,-dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)/6,dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)*2,dist(points[33]._x,points[33]._y,points[8]._x,points[8]._y)*5.5);
          
          
          pop();
         
          imageMode(CORNER);
        }
      }
    }
    pop();
  }
  if (takePhotoPage){
    if(picturenum >= 8){
      delay0++;
      if(delay0==10){
        selectPhotoPage = true;
        takePhotoPage = false;
      }
      
      
    }
    array1 = [picturenum,"/8"];
    let situation = join(array1, "");
    textAlign(CENTER, CENTER);
    textSize(40);
    fill("#405381");
    text(situation,1160,100);
    textSize(40);
    text('사진을 찍으려면 스페이스바를 눌러줘',640,690);
    translate(
      (width - video.width) / 2 + video.width,
      (height - video.height) / 2
    );
    scale(-1, 1);
    push();
    
    image(video, 0, 0, video.width, video.height);
    scale(-1,1);
    
    if (detections) {
      if (detections.length > 0) {
        for (let j = 0; j < detections.length; j++) {
          let points = detections[j].landmarks.positions;
          imageMode(CENTER);
          push();
          
          translate(- points[33]._x,points[33]._y)
          rotate(atan2(points[0]._y-points[16]._y,-points[0]._x+ points[16]._x));
          if(fromDrawing){
            image(drawings,0,-dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)/6,dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)*2,dist(points[33]._x,points[33]._y,points[8]._x,points[8]._y)*5.5);
          }else{
            image(facefilter[facefilterNum % facefilter.length],0,-dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)/6,dist(points[0]._x,points[0]._y,points[16]._x,points[16]._y)*2,dist(points[33]._x,points[33]._y,points[8]._x,points[8]._y)*4.8);
          }
          
          
          
          pop();
         
          imageMode(CORNER);
        }
      }
    }
    pop();
  } 
  if (selectPhotoPage){
    
    select_picturenum = 0;
    for(let i=0;i<4;i++){
      image(raw_photos[i],i*(raw_photos[i].width/3+20)+60,100,raw_photos[i].width/3,raw_photos[i].height/3);
      image(raw_photos[i+4],i*(raw_photos[i].width/3+20)+60,120+raw_photos[i].height/3,raw_photos[i].width/3,raw_photos[i].height/3);
      if(mouseX>i*(raw_photos[i].width/3+20)+60&&mouseX<i*(raw_photos[i].width/3+20)+60+raw_photos[i].width/3+20&&mouseY<100+raw_photos[i].height/3&&mouseY>100){
         on_photos[i] = true;
         }else{
           on_photos[i] = false;
         }
      if(mouseX>i*(raw_photos[i].width/3+20)+60&&mouseX<i*(raw_photos[i].width/3+20)+60+raw_photos[i].width/3+20&&mouseY<120+raw_photos[i].height/3+raw_photos[i].height/3&&mouseY>120+raw_photos[i].height/3){
         on_photos[i+4] = true;
         }else{
           on_photos[i+4] = false;
         }
      fill(255,255,255,63);
      if(photos_selected[i]){
        select_picturenum++;
        rect(i*(raw_photos[i].width/3+20)+60,100,raw_photos[i].width/3,raw_photos[i].height/3);
      }
      if(photos_selected[i+4]){
        select_picturenum++;
        rect(i*(raw_photos[i].width/3+20)+60,120+raw_photos[i].height/3,raw_photos[i].width/3,raw_photos[i].height/3);
      }
      

    }
    
    fill("#405381");
    array1 = [select_picturenum,"/4"];
    let situation = join(array1, "");
    textSize(40);
    textAlign(CENTER, CENTER);
    
    text(situation,640,600);
    if(select_picturenum<4){
      text('마음에 드는 사진 4장을 골라줘!',640,640);
    }else{
      text('다 골랐으면 스페이스바를 눌러 넘어가자!',640,640);
    }
    
    textAlign(LEFT,TOP);
  }
  if (selectFramePage){
    
    for(let i=0;i<8;i++){
      if(photos_selected[i]){
        final_photos[photoindex] = i;
        photoindex++;
      }
    }
    
  
    right.display();
    left.display();
    saveGallery.display();
    download.display();
    

    
    
    selectFramePage_mode =0;
    if (mouseX > 1166 && mouseX < 1263 && mouseY > 20 && mouseY < 103) {
      saveGallery.mouseOver(0);
      showPOPUP = true;
    } else {
      saveGallery.mouseNotOver();
      showPOPUP = false;
    }
    if (mouseX > 1160 && mouseX < 1260 && mouseY > 626 && mouseY < 695) {
      download.mouseOver(0);
      goShare=true;
    } else {
      download.mouseNotOver();
      goShare=false;
    }
    if (mouseX > 54 && mouseX < 101 && mouseY > 300 && mouseY < 409) {
      left.mouseOver(0);
      selectFramePage_mode =1;
    } else {
      left.mouseNotOver();
    }
    if (mouseX > 1183 && mouseX < 1230 && mouseY > 300 && mouseY < 409) {
      right.mouseOver(0);
      selectFramePage_mode =2;
    } else {
      right.mouseNotOver();
      
    }

    finalphoto.fill(framesback[frameNum%frames.length]);
    
    finalphoto.noStroke();
    finalphoto.rect(0,0,1000,700);
    
    image(finalphoto,140,10); 
    
    image(raw_photos[final_photos[0]],235,55,400,300);
    image(raw_photos[final_photos[1]],235,365,400,300);
    image(raw_photos[final_photos[2]],645,55,400,300);
    image(raw_photos[final_photos[3]],645,365,400,300);
    image(frames[frameNum%frames.length],140,10,1000,700);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill("#2E2A2A");
    let array_text =[year(),'.',month(),'.',day(),'.'];
    let today_date = join(array_text,"");
    text(today_date,1050,685);
    
    if(saveGalleryPopup){
      image(togallery_popup,0,0);
      textSize(30);
      textAlign(CENTER, CENTER);
      text('우리 사진관 명예의 전당에 사진을 올릴래?',640,310);
      text('홈화면의 갤러리에서 확인할 수 있어!',640,350);
      textAlign(LEFT);
      sure.display();
      no.display();
      answer =0;
      if (mouseX > 395 && mouseX < 648 && mouseY > 453 && mouseY < 546) {
      sure.mouseOver(0);
      answer =1;
      } else {
      sure.mouseNotOver();
      
      }
      if (mouseX > 690 && mouseX < 940 && mouseY > 453 && mouseY < 546) {
      no.mouseOver(0);
      answer =2;
      } else {
      no.mouseNotOver();
      
      }
    }else{
      finalphoto_fordownload = get(140,10,1000,700);
    }
    
  }
  
  if(sharePhotoPage){
    savecomplete.display();
    image(qrpresent,0,0);
    tagDiv.html(qrImg);
    textSize(25);
    textAlign(CENTER, TOP);
      text('우리가 준비한 선물이야!\n너만의 인생사진을 오랫동안\n간직하고 싶다면,\n아래에 있는 QR코드를 찍어서\n사진을 휴대폰에 저장할 수 있어!',227,100);
    text('선물이 제대로 나올때까지\n3초만 기다려줘~',940,80);
    if (mouseX > 980 && mouseX < 1260 && mouseY > 573 && mouseY < 691) {
      savecomplete.mouseOver(0);
      goEnding = true;
      } else {
      savecomplete.mouseNotOver();
      goEnding = false;
  }
  }
  
  if(ending){
    i++;
    
    if(i%8==0){
      back_framenum++;
    }
    imageMode(CORNER);
    translate(0,0);
    image(ending_ghosts[back_framenum%ending_ghosts.length],0,0);
    
    
    if(fromDrawing){

      imageMode(CENTER);
      push();
      translate(147,164)
      rotate(atan2(50,175));
      image(drawings,0,0,200,200);
      pop();
      
      push();
      translate(165,432)
      rotate(atan2(50,175));
      image(drawings,0,0,175,175);
      pop();
      
      push();
      translate(1121,114)
      rotate(atan2(-99,175));
      image(drawings,0,0,180,175);
      pop();
      
      push();
      translate(1129,405);
      rotate(atan2(-70,175));
      image(drawings,0,0,175,160);
      pop();
    }else{

      imageMode(CENTER);
      push();
      translate(147,164);
      rotate(atan2(50,175));
      image(facefilter[facefilterNum % facefilter.length],0,0,200,200);
      pop();
      
      push();
      translate(165,432);
      rotate(atan2(50,175));
      image(facefilter[facefilterNum % facefilter.length],0,0,175,175);
      pop();
      
      push();
      translate(1121,114);
      rotate(atan2(-99,175));
      image(facefilter[facefilterNum % facefilter.length],0,0,180,175);
      pop();
      
      push();
      translate(1129,405);
      rotate(atan2(-70,175));
      image(facefilter[facefilterNum % facefilter.length],0,0,175,160);
      pop();

    }
    textSize(25);
    textAlign(CENTER, TOP);
    translate(0,0);
      text('길다면 길고, 짧다면 짧은 가을학기가 끝났네!\n\n개강할 때까지만 해도 여름의 끝자락이었는데, 어느새 옷깃을 여며야 하는 날씨가 됐구나.\n\n너의 학기는 어땠어?\n누군가는 만족스러운 세 달을 보냈을 거고, 아닌 친구도 있을거야.\n\n아니라고 해도 괜찮아. \n누가 뭐래도 너의 하루하루는 세상에서 제일 소중하니까.\n\n너는 이번 연말에도, 다가올 내년에도, 그리고 앞으로도 행복할거야.\n\n우리 유령들이, 그리고 너를 사랑하는 사람들이 항상 곁에서 응원하며 지켜볼 거니까!\n\n\n정말 고생 많았어.',width/2,height-i/2);
    
    imageMode(CORNER); 
    if(i/2>=height){
      if (dist(mouseX, mouseY, width / 2, height / 2+100) < 75) {
      fill("#405381");
      circle(width / 2, height / 2+100, 150);
      fill(255);
      text("처음으로",width / 2, height / 2 +90);
      all_clear = true;
    } else {
      fill(255);
      circle(width / 2, height / 2+100, 150);
      fill("#405381");
      text("처음으로",width / 2, height / 2+90);
      all_clear = false;
    }
    }
  }
  
  if (galleryPage) {
    i++;
    if (i % 16 == 0) {
      back_framenum++;
    }
    
    
    image(gallery_background,0,0);
    if(mouseIsPressed){
      for(let j=galleryPhotos.length-1;j>=0;j--){
       if(galleryPhotos[j].activate()){
         break;
       }
    }
    }
    for(let j=0;j<galleryPhotos.length;j++){
     galleryPhotos[j].display();
    }
    image(gallery_light[back_framenum%3],0,0);
    
  }

}
// Start detecting faces
function faceReady() {
  
  facedetectOn = true;
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result;
  faceapi.detect(gotFaces);
}

function musicPlay() {
  
  
  if (mainScreen || intro) {
    if(easteregg){
      music_nextScreen.stop();
      music_mainScreen.stop();
      music_ending.stop();
    if (!music_mainScreen_christmas.isPlaying()) music_mainScreen_christmas.loop();
    }else{
      music_ending.stop();
      music_nextScreen.stop();
      music_mainScreen_christmas.stop();
      if (!music_mainScreen.isPlaying()) music_mainScreen.loop();
    }
  }else if(ending){
    music_nextScreen.stop();
    music_mainScreen_christmas.stop();
    music_mainScreen.stop();
    if (!
        music_ending.isPlaying()) music_ending.loop();
  } else {
    music_ending.stop();
    music_mainScreen.stop();
    music_mainScreen_christmas.stop();
    if (!music_nextScreen.isPlaying()) {
      music_nextScreen.loop();
    }
  }
}

function letitSnow()
{ 
  for (let l = 0; l < SNOWFLAKES.length; l++) {
    const LAYER = SNOWFLAKES[l];
    fill("#ffffff");
    for (let i = 0; i < LAYER.length; i++) {
      const snowflake = LAYER[i];
      circle(snowflake.x, snowflake.y, (snowflake.l * MAX_SIZE) / LAYER_COUNT);
      updateSnowflake(snowflake);
    }
  }
  
}
function buttonSound(){
  button_sound.play();
}
function cameraSound(){
  camera_sound.setVolume(1);
  camera_sound.play();
}

function addline(){
  curr_line++;
  buttonSound();
}
// Helper function to prepare a given snowflake for the next frame
function updateSnowflake(snowflake) {
  const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT;
  if (snowflake.y > height + diameter) snowflake.y = -diameter;
  else snowflake.y += GRAVITY * snowflake.l * snowflake.mass;

  // Get the wind speed at the given layer and area of the page
  const wind =
    noise(snowflake.l, snowflake.y * WIND_CHANGE, frameCount * WIND_CHANGE) -
    0.5;
  if (snowflake.x > width + diameter) snowflake.x = -diameter;
  else if (snowflake.x < -diameter) snowflake.x = width + diameter;
  else snowflake.x += wind * WIND_SPEED * snowflake.l;
}

function mousePressed() {
  if (intro) {
    if (goIntro_animation) {
      intro_animation = true;
      back_framenum = 0;
      goIntro_animation = false;
      intro = false;
      buttonSound();
    }
  }
  
  if (mainScreen) {
    switch (mode) {
      case 1:
        turnOnFaceDetect();
        turnOnCapture()
        browseMaskPage = true;
        mainScreen = false;
        buttonSound();

        break;
      case 2:
        clear();
        drawMaskPage = true;
        mainScreen = false;
        slider = createSlider(1, 50, 8);
        slider.position(110,320);
        slider.size(200,30);
        slider.style("transform","rotate(90deg)");

        buttonSound();
        break;
      case 3:
        galleryPage = true;
        mainScreen = false;
        buttonSound();
        break;
      case 4:
        buttonSound();
        chatnum++;
        break;
        
    }
  } else {
    if (gohome) {
      chatnum=0;
      slider.remove();
      tagDiv.remove();
      tagDiv = createDiv();
      tagDiv.position(430, 245);
      turnOffFaceDetect();
      turnOffCapture();
      mode = 0;
      picturenum =0;
      photoindex=0;
      select_picturenum = 0;
      drawings.clear();
      buttonSound();
      intro = false;
      intro_animation = false;
      browseMaskPage = false;
      drawMaskPage = false;
      galleryPage = false;
      gohome = false;
      checkMaskPage = false;
      mainScreen = true;
      takePhotoPage = false;
      selectPhotoPage = false;
      selectFramePage = false;
      sharePhotoPage = false;
      saveGalleryPopup = false;
      for(let i=0;i<8;i++){
      raw_photos[i] = createGraphics(800,600);
      on_photos[i] = false;
      photos_selected[i] = false;
      ending = false;
      }
    }
  }
  if (browseMaskPage) {
    switch (browseMaskPage_mode) {
      case 2:
        facefilterNum++;
        browseMaskPage_mode = 0;
        buttonSound();
        break;
      case 1:
        facefilterNum += facefilter.length-1;
        browseMaskPage_mode = 0;
        buttonSound();
        break;
    }
    if(goPhoto){
      buttonSound();
      takePhotoPage = true;
      goPhoto=false;
      browseMaskPage = false;
    }
  }
  if (drawMaskPage) {
    
    for (let j = 0; j < 10; j++) {
        if (colors[j].isOver()&&brushMode==0) {
          curr_brush_color = colors[j].returnColor();
          buttonSound();
        }
      }  
    
    if (goCheckMask) {
      slider.remove();
      turnOnFaceDetect();
      turnOnCapture();
      checkMaskPage = true;
      drawMaskPage = false;
      goCheckMask = false;
      buttonSound();
    }
  }
  if (checkMaskPage) {
    if (goDrawMask) {
      turnOffFaceDetect();
      turnOffCapture();
      checkMaskPage = false;
      drawMaskPage = true;
      goDrawMask = false;
      buttonSound();
    }
    if (goPhoto) {
      buttonSound();
      takePhotoPage = true;
      goPhoto=false;
      checkMaskPage = false;
    }
  }
  if (selectPhotoPage){
    for(let i=0;i<8;i++){
      turnOffFaceDetect();
      turnOffCapture();
      if(on_photos[i]&&(select_picturenum<4||photos_selected[i])){
        photos_selected[i]=!photos_selected[i];
      }
    }
  }
  if(selectFramePage){
     if(goShare){
      buttonSound();
      total_image_num++;
       
      let storageRef = storage.ref();
      let filesRef = storageRef.child('images/' +  year()+month()+day()+hour()+minute()+second() + '.jpg');
      
       
      finalphoto_fordownload.loadPixels();
      var convertdata = finalphoto_fordownload.canvas.toDataURL();
      //convertdata.save('photo','png');

      const uploadStart = filesRef.putString(convertdata,'data_url');
      uploadStart.then(uploadTaskSnapshot=>{
        uploadTaskSnapshot.ref.getDownloadURL().then((url)=>{
          forQRurl=url
          qr = qrcode(0, 'L');
          qr.addData(forQRurl);
          qr.make(); 
          qrImg = qr.createImgTag(5, 20, "qr code");
        });
        
      });
       
      
      sharePhotoPage = true;
      selectFramePage = false;
      goShare = false;
    }
    switch(selectFramePage_mode){
        case 1:
        frameNum++;
        selectFramePage_mode = 0;
        buttonSound();
        break;
        case 2:
        frameNum += frames.length-1;
        selectFramePage_mode = 0;
        buttonSound();
        break;
    }
    switch(answer){
        case 1:
        saveGalleryPopup =false;
        
        galleryPhotos[galleryPhotos.length] =new photo(finalphoto_fordownload);
        answer = 0;
        buttonSound();
        break;
        case 2:
        saveGalleryPopup =false;
        answer = 0;
        buttonSound();
        break;
    }
    
      if(showPOPUP){
        buttonSound();
        saveGalleryPopup = true;
        showPOPUP = false;
      }
    }
  if(sharePhotoPage){
    if(goEnding){
      buttonSound();
      i = 0;
      tagDiv.remove();
      tagDiv = createDiv();
      ending = true;
      goEnding=false;
      sharePhotoPage = false;
    }
  }
  if(ending){
    if(all_clear){
      all_clear = false;
      fromStart();
    }
  }
}
function takepicture(i) {
  
    raw_photos[i] = get((width - video.width) / 2,
      (height - video.height) / 2,video.width,video.height);
      
    //save(raw_photos[i], "umm", "png");
  
  
}
function fromStart(){
  slider.remove();
  skip.hide();
  turnOffFaceDetect();
  ghost1.stoptalking();
  ghost2.stoptalking();
  ghost3.stoptalking();
  ghost4.stoptalking();
  intro = true;
  easteregg = false;
  x1 = 0;
  x2 = -1280;
  intro_animation = false;
  curr_line =0;
  mainScreen = false;
  mode = 0;
  browseMaskPage = false;
  drawMaskPage = false;
  galleryPage = false;
  checkMaskPage = false;
  takePhotoPage = false;
  selectPhotoPage = false;
  selectFramePage = false;
  saveGalleryPopup = false;
  sharePhotoPage = false;
  goIntro_animation = false;
  goCheckMask = false;
  gohome = false;
  goDrawMask = false;
  goPhoto = false;
  goShare = false;
  showPOPUP =false;
  ending = false;
  all_clear = false;
  back_framenum = 0;
  i = 0;
  facefilterNum = 0;
  brushMode = 0;
  browseMaskPage_mode = 0;
  drawstart = 0;
  frameNum = 0;
  selectFramePage_mode = 0;
  answer = 0;
  
}

function keyPressed() {
  if(drawMaskPage){
    
    if (key == ' ') {
    drawings.clear();
    }
  }
  
  
  if(takePhotoPage){
    
    if (key == ' '&&picturenum<8) {
    cameraSound();
    takepicture(picturenum);
    picturenum++;
    
      if(picturenum==8){
        delay0 =0;
      }
    }
  }
  
  if(selectPhotoPage){
    if (key == ' '&&select_picturenum==4) {
      selectPhotoPage = false;
      selectFramePage = true;
      
  }
  }
  
  
   
}



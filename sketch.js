var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var milk,milkImg;
var m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20;
var button,button1;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
   milkImg=loadImage("Images/Milk.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1200,1000);

  dog=createSprite(1000,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock,stockS);
  textSize(20); 

  milk1=createSprite(200,300,10,10);
  milk1.addImage(milkImg);
  milk1.scale=0.1;

  m2=createSprite(240,300,10,10);
  m2.addImage(milkImg);
  m2.scale=0.1;

  m3=createSprite(280,300,10,10);
  m3.addImage(milkImg);
  m3.scale=0.1;

  m4=createSprite(320,300,10,10);
  m4.addImage(milkImg);
  m4.scale=0.1;

  m5=createSprite(360,300,10,10);
  m5.addImage(milkImg);
  m5.scale=0.1;

  m6=createSprite(400,300,10,10);
  m6.addImage(milkImg);
  m6.scale=0.1;

  m7=createSprite(440,300,10,10);
  m7.addImage(milkImg);
  m7.scale=0.1;

  m8=createSprite(480,300,10,10);
  m8.addImage(milkImg);
  m8.scale=0.1;

  m9=createSprite(520,300,10,10);
  m9.addImage(milkImg);
  m9.scale=0.1;

  m10=createSprite(560,300,10,10);
  m10.addImage(milkImg);
  m10.scale=0.1;

  m11=createSprite(200,380,10,10);
  m11.addImage(milkImg);
  m11.scale=0.1;

  m12=createSprite(240,380,10,10);
  m12.addImage(milkImg);
  m12.scale=0.1;

  m13=createSprite(280,380,10,10);
  m13.addImage(milkImg);
  m13.scale=0.1;

  m14=createSprite(320,380,10,10);
  m14.addImage(milkImg);
  m14.scale=0.1;

  m15=createSprite(360,380,10,10);
  m15.addImage(milkImg);
  m15.scale=0.1;

  m16=createSprite(400,380,10,10);
  m16.addImage(milkImg);
  m16.scale=0.1;

  m17=createSprite(440,380,10,10);
  m17.addImage(milkImg);
  m17.scale=0.1;

  m18=createSprite(480,380,10,10);
  m18.addImage(milkImg);
  m18.scale=0.1;

  m19=createSprite(520,380,10,10);
  m19.addImage(milkImg);
  m19.scale=0.1;

  m20=createSprite(560,380,10,10);
  m20.addImage(milkImg);
  m20.scale=0.1;

  button=createButton('Add Feed');
  button.position(600,80);

  button1=createButton('Feed the dog');
  button1.position(680,80);
}

// function to display UI
function draw() {
  background(46,139,87);
 
  button1.mousePressed(
    function(){
    writeStock(foodS);
    dog.addImage(dogImg1);
    getTime();
    
    if(foodS===1){
      m2.visible=false;
    }
    if(foodS===0){
      milk1.visible=false;
    }
    if(foodS===2){
      m3.visible=false;
    }
    if(foodS===3){
      m4.visible=false;
    }
    if(foodS===4){
      m5.visible=false;
    }
    if(foodS===5){
      m6.visible=false;
    }
    if(foodS===6){
      m7.visible=false;
    }
    if(foodS===7){
      m8.visible=false;
    }
    if(foodS===8){
      m9.visible=false;
    }
    if(foodS===9){
      m10.visible=false;
    }
    if(foodS===10){
      m11.visible=false;
    }
    if(foodS===11){
      m12.visible=false;
    }
    if(foodS===12){
      m13.visible=false;
    }
    if(foodS===13){
      m14.visible=false;
    }
    if(foodS===14){
      m15.visible=false;
    }
    if(foodS===15){
      m16.visible=false;
    }
    if(foodS===16){
      m17.visible=false;
    }
    if(foodS===17){
      m18.visible=false;
    }
    if(foodS===18){
      m19.visible=false;
    }
    if(foodS===19){
      m20.visible=false;
    }
  })


  button.mousePressed(
    function() {
    stockS(foodS);
  
   

    if(foodS===2){
      m2.visible=true;
    }
    if(foodS===1){
      milk1.visible=true;
    }
    if(foodS===3){
      m3.visible=true;
    }
    if(foodS===4){
      m4.visible=true;
    }
    if(foodS===5){
      m5.visible=true;
    }
    if(foodS===6){
      m6.visible=true;
    }
    if(foodS===7){
      m7.visible=true;
    }
    if(foodS===8){
      m8.visible=true;
    }
    if(foodS===9){
      m9.visible=true;
    }
    if(foodS===10){
      m10.visible=true;
    }
    if(foodS===11){
      m11.visible=true;
    }
    if(foodS===12){
      m12.visible=true;
    }
    if(foodS===13){
      m13.visible=true;
    }
    if(foodS===14){
      m14.visible=true;
    }
    if(foodS===15){
      m15.visible=true;
    }
    if(foodS===16){  
    
      m16.visible=true;
    }
    if(foodS===17){
      m17.visible=true;
    }
    if(foodS===18){
      m18.visible=true;
  }
  if(foodS===19){
    m19.visible=true;
  }
  if(foodS===20){
    m20.visible=true;
}
}
)

if(foodS===1){
  m20.visible=false;
  m2.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===2){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===3){
  m20.visible=false;
  milk1.visile=false;
  m2.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===4){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m2.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===5){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m2.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===6){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m2.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===7){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m2.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===8){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m2.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===9){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m2.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===10){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m2.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===11){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m2.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===12){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m2.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===13){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m2.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===14){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m2.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===15){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m2.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===16){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m2.visile=false;
  m17.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===17){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m2.visile=false;
  m18.visile=false;
  m19.visile=false;
}

if(foodS===18){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m2.visile=false;
  m19.visile=false;
}

if(foodS===19){
  m20.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m2.visile=false;
}
if(foodS===20){
   m19.visible=false;
  milk1.visile=false;
  m3.visile=false;
  m4.visile=false;
  m5.visile=false;
  m6.visile=false;
  m7.visile=false;
  m8.visile=false;
  m9.visile=false;
  m10.visile=false;
  m11.visile=false;
  m12.visile=false;
  m13.visile=false;
  m14.visile=false;
  m15.visile=false;
  m16.visile=false;
  m17.visile=false;
  m18.visile=false;
  m2.visile=false;}

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  //textSize(13);
 // text("Note: Press UP_ARROW Key To Feed Drago Milk!",900,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=20;
    //dog.addImage(dogImg1);
  }else{
    x=x-1;
  } 

  database.ref('/').update({
    Food:x
  })
} 

function stockS(y){

  if(keyWentDown(DOWN_ARROW)){
    y=y+1
  }

  if(y>20){
    y=20;
  }
  database.ref('/').update({
    Food:y
  })
}

async function getTime(){

  var g= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var r= await g.json();
  var d= r.datetime;
  var h= d.slice(9,12);

  text("Last Fed: "+h,500,80);
}
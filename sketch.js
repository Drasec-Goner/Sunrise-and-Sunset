const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(screen.width,screen.height);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
    background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   
    
    //change the data in JSON format
    var responseJson= await response.json()
    console.log("Time",responseJson)

    // write code slice the datetime
    var datetime= responseJson.datetime
    var hour=datetime.slice(11,13)

    console.log(hour)


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }else if(hour>=06&&hour<=08){
        bg="sunrise2.png"
    }else if(hour>=08&&hour<=10){
        bg="sunrise3.png"
    }else if(hour>=10&&hour<=12){
        bg="sunrise4.png"
    }else if(hour>=12&&hour<=14){
        bg="sunrise5.png"
    }else if(hour>=14&&hour<=16){
        bg="sunrise6.png"
    }else if(hour>=16&&hour<=18){
        bg="sunset7.png"
    }else if(hour>=18&&hour<=20){
        bg="sunset8.png"
    }else if(hour>=20&&hour<=22){
        bg="sunset9.png"
    }else if(hour>=22&&hour<=24){
        bg="sunset10.png"
    }else if(hour>=00&&hour<=03){
        bg="sunset12.png"
    }

    

    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
   

}

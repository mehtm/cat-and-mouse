
function preload() {
    //load the images here
    groundImage=loadImage("images/garden.png")
    cat1Image=loadImage("images/cat1.png")
    mouse1Image=loadImage("images/mouse1.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,700,50,50)
    cat.addImage(cat1Image)
    cat.scale=0.2
    mouse=createSprite(100,700,20,20)
    mouse.addImage(mouse1Image)
    mouse.scale=0.2
}

function draw() {

    background(groundImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

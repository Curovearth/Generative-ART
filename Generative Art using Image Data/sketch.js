let img;
let cnv;

//preloading all the media elements
function preload(){
  img = loadImage('assets/van.jpg');
}
//only runs once
function setup() {
  cnv = createCanvas(img.width, img.height); //creating the canvas according the image height and width
  //print(img.width,img.height);
  let newCanvasX = (windowWidth - img.width)/2; //coordinate for positioning at the center wrt x axis 
  let newCanvasY = (windowHeight - img.height)/2; //coordinate for positioning at the center wrt y axis
  // print(newCanvasX, newCanvasY);
  cnv.position(newCanvasX,newCanvasY); // final positioning at the center
  
  // 'For' loops for going through the pixels.
  
  for(let col = 0; col<img.width; col+=2){
    for(let row = 0; row< img.height; row+=2){
      let xPos = col; //column number
      let yPos = row; //row number
      let c = img.get(xPos,yPos); //getting the colour information of each pixel
      
      push(); //push and pop always used for translate function
      translate(xPos,yPos);
      rotate(radians(random(360)))
      noFill();
      stroke(color(c));
      strokeWeight(random(3)); //setting the width of strokes for lines
      point(xPos,yPos)
      // fill(color(c));
      strokeWeight(random(3));
      
      //adding the curves to make the art more dynamic
      //Have your own set of experiments below
      // curve(x1, y1, x2, y2, x3, y3, x4, y4)
      curve(xPos, yPos, sin(xPos)*random(60), cos(yPos)*sin(xPos)*random(40),random(10),0,cos(yPos)*sin(xPos)*random(140), cos(yPos)*sin(xPos)*50)
      
      pop();
    }
  }
}

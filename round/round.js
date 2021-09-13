t=0;
k=50; //Number of points
r=10; // points following the path of a circle having the radius mentioned

function draw(){
  createCanvas(w=600, w); // creating a canvas of size 600 * 600
  stroke(255); // Determines the color of points
  background(0); // Background of the art is set as Black
  strokeWeight(2); // Determines the weight(size) of the points
  for(i=k;i--;){
    for(j=k;j--;){
      push();
      translate(x=map(i,0,k,l=600/k+30,570),y=map(j,0,k,l,570)); 
      //x -> left/right translation and y -> up/down translation
      // 570 -> size of graphic in x and y direction -- Bounding values
      //map(value, start1, stop1, start2, stop2, [withinBounds])
     
      o=0.05*dist(x,y,100,100); 
      // waves converging at (m,n) coordinate in -> p*dist(x,y,m,n)
      // p kind of determines the amplitude of the waves here.
      
      point(r*cos(t+o),r*sin(t+o)); 
      // Determines the movement of the waves to be followed by points.
      pop();
      }
    }
    
    t+=0.1; // determines the speed of the movement of points.
    
}
//function keyPressed(){
//  if (key === 's'){
//    saveCanvas("output.mp4");
//  }
//}

//function
size(800,800);
background(0);
blendMode(ADD);

int i = 0;

while(i<10){
  i++;
  //println(i);
  int j = 0;
  while(j<10){
    j++;
    
    int posX = i*80;
    int posY = j*80;
    float dist = random(20);
    float col = random(100,255);
    float sqsize = random(30);
    
    fill(col,0,0);
    rect(posX,j*80,sqsize, sqsize);
    fill(0,col,0);
    rect(posX+dist,posY+dist,sqsize, sqsize);
    fill(0,0,col);
    rect(posX+dist*2,posY+dist*2,sqsize, sqsize);// +20 means that it is 20 pixels apart
    
  }
}

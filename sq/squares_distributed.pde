//function
size(800,800);
background(0);
int i = 0;

while(i<10){
  i++;
  println(i);
  int j = 0;
  while(j<10){
    j++;
    //print("(",i*80,j*80,")");
    print(j," ");
    fill(255,0,0);
    rect(i*80,j*80,50,50);
    
  }
  
}
save("output.png");

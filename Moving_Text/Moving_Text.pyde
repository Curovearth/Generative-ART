def setup():
  size(400,400,P3D)
  frameRate(50)
  textFont(createFont("Arial",32))
  background(0)
    
def draw():
  clear()
  fill(245,190,10)
  text(__processing_source__,0,height-frameCount)
  camera(width/2,height*2,height,width/2,height/2,0,0,1,0)

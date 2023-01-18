function context() 
{
  createCanvas(windowWidth, windowHeight)
  background (202, 180, 155);

  
  
  let title_size = 20;
  //sets the text size
  
    if (device_orientation === "l") 
      //if the device height is lower than its width the following will be done.
  {
    imageMode(CENTER);
   image (img, width/2, height/2-50)
    img.resize(350, 350);
    //resizes image
    textSize (title_size);
  textAlign (CENTER, CENTER);
  fill (25);
  textSize (title_size*2);
  text ("The Iberian Wolf ", width/2, height*0.25 - title_size*3);
  textSize (title_size);
  text ("The Iberian wolf (Canis lupus signatus) is a subspecies of the gray wolf that occurs in the Iberian Peninsula.", width/2, height*0.9-150);
  text ("It differs from the wolf that inhabits the rest of Europe essentially because it is smaller and because of the color of its coat,", width/2, height*0.9-120);
  text ("which is more brownish-yellow. In addition, it has stronger colors and a different color pattern on the faces and muzzle.", width/2, height*0.9-90);
  }
  else
    //if the device width is lower than its height the following will be set
  if (device_orientation === "p") 
  {
    imageMode(CENTER);
    //sets were the image alignment will be
   image (img, width/2, height/2-40)
    img.resize(250, 250);
    //this resizes the image
    textSize (title_size);
  textAlign (CENTER, CENTER);
    //sets the alignmet of the text
  fill (25);
  textSize (title_size*2);
  text ("The Iberian Wolf ", width/2, height/4- title_size);
  textSize (title_size*3);
    textSize(10);
  text ("The Iberian Wolf (Canis lupus signatus) is a subspecies of the gray wolf that", width/2, height*0.9-150);
  text ("occurs in the Iberian Peninsula. It differs from the wolf that inhabits the rest of", width/2, height*0.9-130);
  text ("Europe essentially because it is smaller and because of the color of its coat,", width/2, height*0.9-110);
    text ("which is more brownish-yellow. In addition, it has stronger colors and a", width/2, height*0.9-90);
    text ("different color pattern on the faces and muzzle.", width/2, height*0.9-70);
    //the text was done in this way without creating the text box in order to better suit our project
  }
  
  
 

  
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height-75;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 50;
   //size of the rectangle button, first on being the width and the second one being the height
  
  rectMode (CENTER);
  fill (25)
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
    //button
    
  {
    scene = 3;
    mouseIsReleased = false;
  }
  
}


